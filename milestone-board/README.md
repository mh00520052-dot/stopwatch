# 임상 마일스톤 보드 (Netlify 웹앱)

과제별 마일스톤·Task 간트, 항목별 월별 예산(연구비·CRO·IP·기타), 챙겨야 할 항목을 한 화면에서 관리하는 웹앱입니다.
화면은 `public/index.html`, 저장은 Netlify Function(`netlify/functions/api/api.mjs`)과 Netlify Blobs가 맡습니다.

## 처음 배포하기

1. Netlify → **Add new project → Import an existing project → GitHub** → 이 저장소를 선택합니다.
2. 배포할 브랜치를 고릅니다. 빌드 설정은 저장소 루트의 `netlify.toml`이 채우므로 그대로 둡니다.
3. **Environment variables**에 `APP_PASSWORD`(접속 비밀번호, 8자 이상 권장)를 추가합니다.
4. **Deploy**를 누릅니다. 배포가 끝나면 `https://<프로젝트 이름>.netlify.app`에서 열립니다.
5. 프로젝트 이름은 Project configuration → Change project name에서 바꿀 수 있습니다.

환경변수를 바꾼 뒤에는 Deploys → Trigger deploy로 다시 배포해야 반영됩니다.

## 접속과 권한

- 열면 비밀번호 화면이 나오고, 서버가 `APP_PASSWORD`와 비교합니다. 맞으면 12시간 유효한 로그인 토큰을 받습니다.
- 비밀번호를 아는 사람은 모두 보고 입력할 수 있습니다. 비밀번호를 바꾸면 모두 로그아웃됩니다.
- 선택: `APP_SECRET`을 따로 넣으면 토큰 서명에 그 값을 씁니다.

## 데이터

- 첫 요청 때 `netlify/functions/api/seed.mjs`의 데이터(마스킹: Project A~Q, 담당자 1~7)가 저장소에 들어갑니다. 이후에는 화면에서 입력한 내용이 저장됩니다.
- 실명 데이터로 시작하려면 첫 배포 전에 `seed.mjs`를 바꾸세요. 회사의 외부 클라우드 저장 기준을 먼저 확인하세요.
- 저장 위치: Netlify Blobs의 `milestone-board` 저장소. 키는 `projects/<id>`, `tasks/<id>`, `milestones/<id>`.

## API

| 요청 | 설명 |
|---|---|
| `POST /api/login` `{password}` | 로그인 토큰 발급 |
| `GET /api/data` | 전체 데이터 |
| `POST /api/doc/:collection` | 문서 추가 |
| `PUT /api/doc/:collection/:id` | 문서 교체 |
| `PATCH /api/doc/:collection/:id` | 문서 부분 수정(중첩 객체 병합) |
| `DELETE /api/doc/:collection/:id` | 문서 삭제 |

`collection`은 `projects`, `tasks`, `milestones` 중 하나이며, `/api/login` 외에는 `Authorization: Bearer <token>`이 필요합니다.
