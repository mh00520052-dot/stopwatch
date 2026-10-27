// 임상 마일스톤 보드 API (Netlify Function, path /api/*)
//
//   POST   /api/login                 { password }  -> { token, exp }
//   GET    /api/data                  -> { projects: [{id,data}], tasks: [...], milestones: [...] }
//   POST   /api/doc/:collection       body = document          -> { id }   (create)
//   PUT    /api/doc/:collection/:id   body = document          (replace)
//   PATCH  /api/doc/:collection/:id   body = partial document  (deep merge of nested objects)
//   DELETE /api/doc/:collection/:id
//
// Every route except /login needs "Authorization: Bearer <token>".
// Environment variables (Netlify → Project configuration → Environment variables):
//   APP_PASSWORD  required. The password everyone types on the lock screen.
//   APP_SECRET    optional. Signs login tokens; defaults to a value derived from APP_PASSWORD,
//                 so changing the password signs everyone out.
import { getStore } from '@netlify/blobs';
import { createHash, createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import seed from './seed.mjs';

const COLLECTIONS = new Set(['projects', 'tasks', 'milestones']);
const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;
const MAX_DOC_BYTES = 256 * 1024;

// Tests swap in an in-memory store through this hook.
const store = () => globalThis.__MB_TEST_STORE__ || getStore({ name: 'milestone-board', consistency: 'strong' });

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const secret = () => createHash('sha256').update('milestone-board:' + (process.env.APP_SECRET || process.env.APP_PASSWORD || '')).digest();

function signToken(exp) {
  const payload = String(exp);
  return `${payload}.${createHmac('sha256', secret()).update(payload).digest('base64url')}`;
}

function tokenValid(token) {
  const [payload, sig] = String(token || '').split('.');
  if (!payload || !sig || !(Number(payload) > Date.now())) return false;
  const want = Buffer.from(createHmac('sha256', secret()).update(payload).digest('base64url'));
  const got = Buffer.from(sig);
  return got.length === want.length && timingSafeEqual(got, want);
}

const sameSecret = (a, b) => timingSafeEqual(createHash('sha256').update(String(a)).digest(), createHash('sha256').update(String(b)).digest());

// Nested objects merge, everything else (arrays included) replaces — the same rule the page was written against.
function merge(target, patch) {
  for (const [k, v] of Object.entries(patch)) {
    const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);
    target[k] = isObj(v) && isObj(target[k]) ? merge({ ...target[k] }, v) : v;
  }
  return target;
}

async function ensureSeeded(st) {
  const meta = await st.get('meta', { type: 'json' });
  if (meta && meta.seeded) return;
  for (const [collection, docs] of Object.entries(seed)) {
    for (const d of docs) await st.setJSON(`${collection}/${d.id}`, d.data);
  }
  await st.setJSON('meta', { seeded: true, at: new Date().toISOString() });
}

async function readAll(st) {
  const out = { projects: [], tasks: [], milestones: [] };
  const { blobs } = await st.list();
  await Promise.all(
    blobs.map(async ({ key }) => {
      const [collection, id] = key.split('/');
      if (!COLLECTIONS.has(collection) || !id) return;
      const data = await st.get(key, { type: 'json' });
      if (data) out[collection].push({ id, data });
    }),
  );
  return out;
}

async function readBody(req) {
  const text = await req.text();
  if (text.length > MAX_DOC_BYTES) return null;
  try {
    const body = JSON.parse(text);
    return body && typeof body === 'object' && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

export default async (req) => {
  const path = new URL(req.url).pathname.replace(/^\/api\/?/, '');
  if (!process.env.APP_PASSWORD) return json(500, { error: 'APP_PASSWORD 환경변수가 설정되지 않았습니다. Netlify 환경변수에 접속 비밀번호를 넣고 다시 배포하세요.' });

  if (path === 'login') {
    if (req.method !== 'POST') return json(405, { error: 'POST만 허용됩니다.' });
    const body = (await readBody(req)) || {};
    if (!sameSecret(body.password || '', process.env.APP_PASSWORD)) {
      await new Promise((r) => setTimeout(r, 600)); // slow down guessing
      return json(401, { error: '비밀번호가 맞지 않습니다.' });
    }
    const exp = Date.now() + TOKEN_TTL_MS;
    return json(200, { token: signToken(exp), exp });
  }

  const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!tokenValid(token)) return json(401, { error: '로그인이 필요합니다.' });

  const st = store();
  await ensureSeeded(st);

  if (path === 'data' && req.method === 'GET') return json(200, await readAll(st));

  const m = path.match(/^doc\/([a-z]+)(?:\/([A-Za-z0-9_-]{1,64}))?$/);
  if (!m || !COLLECTIONS.has(m[1])) return json(404, { error: '없는 경로입니다.' });
  const [, collection, id] = m;
  const key = id ? `${collection}/${id}` : null;

  if (req.method === 'DELETE' && key) {
    await st.delete(key);
    return json(200, { ok: true });
  }
  const body = await readBody(req);
  if (!body) return json(400, { error: '데이터 형식이 올바르지 않거나 너무 큽니다.' });

  if (req.method === 'POST' && !key) {
    const newId = 'd' + randomBytes(8).toString('hex');
    await st.setJSON(`${collection}/${newId}`, body);
    return json(200, { id: newId });
  }
  if (req.method === 'PUT' && key) {
    await st.setJSON(key, body);
    return json(200, { ok: true });
  }
  if (req.method === 'PATCH' && key) {
    const current = await st.get(key, { type: 'json' });
    if (!current) return json(404, { error: '없는 문서입니다.' });
    await st.setJSON(key, merge(current, body));
    return json(200, { ok: true });
  }
  return json(405, { error: '허용되지 않는 요청입니다.' });
};

export const config = { path: ['/api/*'] };
