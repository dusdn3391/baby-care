# 🍼 AllergySafe Baby - Frontend

아기의 수유·이유식 기록, 알레르기 케어 가이드, 푸시 알림을 제공하는 Next.js 기반 모바일 웹앱(PWA)입니다.

---

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Styling**: CSS Modules + CSS 변수(디자인 토큰)
- **State**: Zustand (persist - localStorage)
- **HTTP**: Axios
- **PWA**: Web Push (VAPID), Service Worker

---

## 폴더 구조

```
src/
├── app/
│   ├── globals.css          # 디자인 토큰 + 공통 클래스 (카드, 버튼, 입력창, 네비 등)
│   ├── page.tsx              # 대시보드
│   ├── dashboard.module.css
│   ├── login/page.tsx        # 로그인
│   ├── register/page.tsx     # 회원가입
│   ├── babies/new/           # 아기 등록
│   ├── feeding/
│   │   ├── page.tsx          # 수유 기록 목록
│   │   └── new/page.tsx      # 수유 기록 작성
│   ├── meal/
│   │   ├── page.tsx          # 이유식 기록 목록
│   │   └── new/page.tsx      # 이유식 기록 작성
│   ├── food-guide/page.tsx   # 식품 가이드
│   ├── notifications/page.tsx# 알림 설정
│   └── mypage/page.tsx       # 마이페이지 (알림 상태/삭제, 로그아웃)
│
├── components/
│   └── common/
│       ├── BottomNav.tsx
│       └── Loading.tsx
│
├── hooks/
│   ├── useBaby.ts             # 아기 등록/조회
│   ├── useFeeding.ts          # 수유 기록 CRUD + 통계
│   └── useMeal.ts             # 이유식 기록 CRUD + 통계
│
├── lib/
│   └── api.ts                 # 백엔드 API 호출 함수 모음 (axios)
│
├── store/
│   └── auth.ts                # 로그인 상태 (zustand + persist)
│
├── styles/                     # 페이지/도메인별 CSS Module
│   ├── auth.module.css         # 로그인/회원가입 탭
│   ├── record-form.module.css  # 수유/이유식 작성 폼
│   ├── record-list.module.css  # 수유/이유식 목록
│   ├── food-guide.module.css
│   ├── notification-setting.module.css
│   └── mypage.module.css
│
└── types/
    ├── index.ts                # 공통 타입 (Baby, Feeding, Meal, Stats 등)
    ├── baby.ts
    └── feeding.ts

public/
├── sw.js                       # 푸시 알림 Service Worker
└── icons/                       # PWA 아이콘
```

---

## 환경 변수 (.env.local)

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## 설치 및 실행

```bash
npm install
npm run dev
```

- 개발 서버: http://localhost:3001 (백엔드 3000과 충돌 방지를 위해 포트 분리 권장)

---

## 디자인 시스템

`src/app/globals.css`에 CSS 변수로 디자인 토큰을 정의하고, 공통 클래스(`.page`, `.card`, `.card-lg`, `.btn-primary`, `.input-box`, `.choice-btn`, `.bottom-nav` 등)로 재사용합니다.

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--color-bg` | `#FDF8EF` | 전체 배경 (크림) |
| `--color-primary` | `#F5A623` | 메인 오렌지 (CTA, 강조) |
| `--color-primary-light` | `#FDF1D9` | 연한 오렌지 (배지, 선택 상태) |
| `--color-text-primary` | `#4A3F35` | 진한 텍스트 |
| `--color-text-secondary` | `#9B8F82` | 보조 텍스트 |
| `--color-text-muted` | `#C9BEAF` | placeholder, 비활성 |
| `--radius-sm` ~ `--radius-2xl` | 12px ~ 24px | 모서리 반경 단계 |

페이지별 고유 스타일(카드 색상, 그리드 등)은 같은 폴더 또는 `src/styles/`의 `*.module.css`로 분리합니다.

---

## 화면별 기능

### 1. 로그인 / 회원가입 (`/login`, `/register`)
- 이메일/비밀번호 로그인 및 회원가입
- 로그인 성공 시 JWT 토큰을 `localStorage`에 저장 (zustand persist) → 새로고침해도 로그인 유지
- 미로그인 시 모든 페이지는 `/login`으로 리다이렉트

### 2. 아기 등록 (`/babies/new`)
- 로그인 후 등록된 아기가 없으면 자동 이동
- 이름, 생년월일, 성별 입력

### 3. 대시보드 (`/`)
- 보호자 인사 + 아기 이름/개월수
- 마지막 수유 시각 기준 "다음 수유 시간" 알림 카드
- 오늘의 수유/이유식 통계 카드
- 알레르기 관찰 카드 (관찰 식품 태그)
- 빠른 기록 바로가기 (수유/이유식/식품가이드)

### 4. 수유 기록 (`/feeding`, `/feeding/new`)
- 모유/분유/혼합 선택, 양(ml) 또는 시간(분) ±버튼 입력
- 오늘 기록 목록 + 오늘 통계(총 횟수, 총량, 타입별 횟수)

### 5. 이유식 기록 (`/meal`, `/meal/new`)
- 메뉴 입력, 양(g) ±버튼, 아이 반응(좋아요/보통/나빠요) 선택
- 오늘 기록 목록 + 오늘 통계(총 횟수, 총량, 메뉴 목록)

### 6. 식품 가이드 (`/food-guide`)
- 아기 개월수 기준(±버튼으로 조정 가능) 안전 식품 가이드
- "먹어도 되는 음식" 카드 그리드, "주의해야 할 음식" 경고 카드, "반고형식 전환 팁"

### 7. 알림 설정 (`/notifications`)
- 푸시 알림 권한 요청 + 구독 등록 (VAPID)
- 수유 알림: 주기(분 단위) 또는 지정 시간(여러 개) 설정
- 이유식 알림: 지정 시간(여러 개) 설정
- 설정은 백엔드 `NotificationSetting`에 저장되어 서버 Cron이 ±5분 윈도우로 발송

### 8. 마이페이지 (`/mypage`)
- 프로필 정보(이름/이메일)
- 푸시 알림 권한 상태 / 서버 구독 상태 표시
- 등록된 알림 설정 목록 조회 및 개별 삭제
- 로그아웃

---

## 푸시 알림 동작 흐름

1. `/notifications` 또는 `/mypage`에서 "활성화" → 브라우저 알림 권한 요청
2. Service Worker(`/sw.js`) 등록 → `PushManager.subscribe()`로 구독 생성
3. 구독 정보(`endpoint`, `keys`)를 백엔드에 전송 (`POST /notification/subscribe`)
4. 백엔드 Cron이 설정된 시간(±5분)에 도달하면 구독된 모든 기기에 푸시 발송
5. 알림에 표시된 "했어요" / "아직요" 액션 클릭 → Service Worker가 `POST /notification/logs/respond` 호출하여 상태 기록

> ⚠️ Web Push는 `localhost`에서는 동작하지만, 실제 배포 시 **HTTPS 필수**입니다.

---

## 라우팅 보호 로직

`src/app/page.tsx` 등 보호된 페이지에서 `zustand`의 `hasHydrated` 플래그로 `localStorage` 복원 완료를 기다린 뒤:

1. `user`가 없으면 → `/login`
2. `user`는 있지만 등록된 `baby`가 없으면 → `/babies/new`
3. 둘 다 있으면 → 정상 렌더링
