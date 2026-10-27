// Starting data, written to the store on the first request only (masked: Project A-Q, 담당자 1-7).
// To start from other data, replace this object before the first deploy, or clear the store's "meta" key.
export default {
 "milestones": [
  {
   "id": "ind_submit",
   "data": {
    "name": "IND 제출",
    "order": 1
   }
  },
  {
   "id": "ind_approval",
   "data": {
    "name": "IND 승인",
    "order": 2
   }
  },
  {
   "id": "fpi",
   "data": {
    "name": "FPI",
    "order": 3
   }
  },
  {
   "id": "lpi",
   "data": {
    "name": "LPI",
    "order": 4
   }
  }
 ],
 "projects": [
  {
   "id": "p001",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "2023-05-31",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 1",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 1,
    "note": "",
    "plan": {
     "fpi": "2024-01-26",
     "ind_approval": "2023-11-03",
     "ind_submit": "",
     "lpi": "2024-09-25"
    },
    "product": "Product 1",
    "protocol": "Project A",
    "registry": "(마스킹)",
    "status": "진행중"
   }
  },
  {
   "id": "p002",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 2",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 2,
    "note": "IND 제출일 논의중, 기안일 TBD / IND 제출 목표는 월 단위(2026-12) / IND 승인 목표는 월 단위(2027-03) / FPI 목표는 월 단위(2027-07) / LPI 목표는 월 단위(2027-12)",
    "plan": {
     "fpi": "2027-07-31",
     "ind_approval": "2027-03-31",
     "ind_submit": "2026-12-31",
     "lpi": "2027-12-31"
    },
    "product": "Product 1",
    "protocol": "Project B",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p003",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 2, 담당자 3",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 3,
    "note": "IND 제출일 논의중, 기안일 TBD / IND 제출 목표는 월 단위(2027-01) / IND 승인 목표는 월 단위(2027-02) / FPI 목표는 월 단위(2027-04) / LPI 목표는 월 단위(2027-05)",
    "plan": {
     "fpi": "2027-04-30",
     "ind_approval": "2027-02-28",
     "ind_submit": "2027-01-31",
     "lpi": "2027-05-31"
    },
    "product": "Product 1",
    "protocol": "Project C",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p004",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 2, 담당자 3",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 4,
    "note": "IND 제출일 논의중, 기안일 TBD / IND 제출 목표는 월 단위(2027-01) / IND 승인 목표는 월 단위(2027-02) / FPI 목표는 월 단위(2027-04) / LPI 목표는 월 단위(2027-05)",
    "plan": {
     "fpi": "2027-04-30",
     "ind_approval": "2027-02-28",
     "ind_submit": "2027-01-31",
     "lpi": "2027-05-31"
    },
    "product": "Product 1",
    "protocol": "Project D",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p005",
   "data": {
    "actual": {
     "fpi": "2025-11-03",
     "ind_approval": "2025-07-01",
     "ind_submit": "2025-03-14",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 4, 담당자 5",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 5,
    "note": "",
    "plan": {
     "fpi": "2025-08-01",
     "ind_approval": "2025-06-01",
     "ind_submit": "2026-03-31",
     "lpi": "2026-12-01"
    },
    "product": "Product 2",
    "protocol": "Project E",
    "registry": "(마스킹)",
    "status": "진행중"
   }
  },
  {
   "id": "p006",
   "data": {
    "actual": {
     "fpi": "2026-09-16",
     "ind_approval": "2026-07-01",
     "ind_submit": "2026-03-31",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 6, 담당자 1",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 6,
    "note": "",
    "plan": {
     "fpi": "2026-11-30",
     "ind_approval": "2026-07-31",
     "ind_submit": "2026-03-31",
     "lpi": "2028-03-31"
    },
    "product": "Product 2",
    "protocol": "Project F",
    "registry": "(마스킹)",
    "status": "진행중"
   }
  },
  {
   "id": "p007",
   "data": {
    "actual": {
     "fpi": "2025-11-17",
     "ind_approval": "2025-09-12",
     "ind_submit": "2025-08-01",
     "lpi": "2026-02-28"
    },
    "category": "신약",
    "manager": "담당자 6",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 7,
    "note": "",
    "plan": {
     "fpi": "2025-11-17",
     "ind_approval": "2025-09-12",
     "ind_submit": "2025-08-01",
     "lpi": "2026-02-28"
    },
    "product": "Product 2",
    "protocol": "Project G",
    "registry": "(마스킹)",
    "status": "진행중"
   }
  },
  {
   "id": "p008",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 6",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 8,
    "note": "IND·FPI·LPI 일정 TBD",
    "plan": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "product": "Product 3",
    "protocol": "Project H",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p009",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "2026-09-02",
     "ind_submit": "2026-06-01",
     "lpi": ""
    },
    "category": "신약",
    "manager": "담당자 4, 담당자 7",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 9,
    "note": "",
    "plan": {
     "fpi": "2026-11-13",
     "ind_approval": "2026-09-23",
     "ind_submit": "2026-06-01",
     "lpi": "2027-09-30"
    },
    "product": "Product 2",
    "protocol": "Project I",
    "registry": "",
    "status": "진행중"
   }
  },
  {
   "id": "p010",
   "data": {
    "actual": {
     "fpi": "2026-08-04",
     "ind_approval": "2026-06-02",
     "ind_submit": "2026-05-13",
     "lpi": "2026-08-14"
    },
    "category": "개량신약",
    "manager": "담당자 5",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 10,
    "note": "등록번호 TBD, 계획일은 예상일",
    "plan": {
     "fpi": "2026-09-30",
     "ind_approval": "2026-06-25",
     "ind_submit": "2026-05-13",
     "lpi": "2026-09-30"
    },
    "product": "Product 2",
    "protocol": "Project J",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p011",
   "data": {
    "actual": {
     "fpi": "2026-10-19",
     "ind_approval": "2026-05-22",
     "ind_submit": "2026-05-04",
     "lpi": ""
    },
    "category": "제네릭",
    "manager": "담당자 7",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 11,
    "note": "",
    "plan": {
     "fpi": "2026-10-19",
     "ind_approval": "2026-05-30",
     "ind_submit": "2026-04-30",
     "lpi": "2026-11-09"
    },
    "product": "Product 4",
    "protocol": "Project K",
    "registry": "N/A",
    "status": "진행중"
   }
  },
  {
   "id": "p012",
   "data": {
    "actual": {
     "fpi": "2026-10-14",
     "ind_approval": "2026-05-22",
     "ind_submit": "2026-05-04",
     "lpi": ""
    },
    "category": "제네릭",
    "manager": "담당자 7",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 12,
    "note": "",
    "plan": {
     "fpi": "2026-10-14",
     "ind_approval": "2026-05-30",
     "ind_submit": "2026-04-30",
     "lpi": "2026-11-11"
    },
    "product": "Product 4",
    "protocol": "Project L",
    "registry": "N/A",
    "status": "진행중"
   }
  },
  {
   "id": "p013",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "2026-07-30",
     "lpi": ""
    },
    "category": "제네릭",
    "manager": "담당자 3",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 13,
    "note": "IND 제출 계획 2026-08~2026-10 / IND 제출 목표는 월 단위(2026-10)",
    "plan": {
     "fpi": "2027-01-15",
     "ind_approval": "2026-10-30",
     "ind_submit": "2026-10-31",
     "lpi": "2027-01-31"
    },
    "product": "Product 5",
    "protocol": "Project M",
    "registry": "",
    "status": "예정"
   }
  },
  {
   "id": "p014",
   "data": {
    "actual": {
     "fpi": "2024-10-14",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": "2025-09-30"
    },
    "category": "IIT",
    "manager": "담당자 5",
    "na": {
     "fpi": false,
     "ind_approval": true,
     "ind_submit": true,
     "lpi": false
    },
    "no": 14,
    "note": "",
    "plan": {
     "fpi": "2024-10-30",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": "2025-08-30"
    },
    "product": "Product 6",
    "protocol": "Project N",
    "registry": "",
    "status": "진행중"
   }
  },
  {
   "id": "p015",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "category": "IIT",
    "manager": "담당자 7",
    "na": {
     "fpi": true,
     "ind_approval": true,
     "ind_submit": true,
     "lpi": true
    },
    "no": 15,
    "note": "",
    "plan": {
     "fpi": "",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": ""
    },
    "product": "Product 7",
    "protocol": "Project O",
    "registry": "",
    "status": "진행중"
   }
  },
  {
   "id": "p016",
   "data": {
    "actual": {
     "fpi": "2025-07-07",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": "2026-07-15"
    },
    "category": "IIT",
    "manager": "담당자 7",
    "na": {
     "fpi": false,
     "ind_approval": true,
     "ind_submit": true,
     "lpi": false
    },
    "no": 16,
    "note": "",
    "plan": {
     "fpi": "2025-05-29",
     "ind_approval": "",
     "ind_submit": "",
     "lpi": "2026-07-20"
    },
    "product": "Product 8",
    "protocol": "Project P",
    "registry": "(마스킹)",
    "status": "진행중"
   }
  },
  {
   "id": "p017",
   "data": {
    "actual": {
     "fpi": "",
     "ind_approval": "2026-09-04",
     "ind_submit": "2026-06-01",
     "lpi": ""
    },
    "category": "IT",
    "manager": "담당자 6",
    "na": {
     "fpi": false,
     "ind_approval": false,
     "ind_submit": false,
     "lpi": false
    },
    "no": 17,
    "note": "IND 취하 2026-07-03",
    "plan": {
     "fpi": "2026-10-30",
     "ind_approval": "2026-08-31",
     "ind_submit": "2026-06-30",
     "lpi": "2027-07-31"
    },
    "product": "Product 8",
    "protocol": "Project Q",
    "registry": "",
    "status": "진행중"
   }
  }
 ],
 "tasks": []
};
