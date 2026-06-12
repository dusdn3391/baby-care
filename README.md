# 🍼 AllergySafe Baby - Backend

아기의 수유·이유식 기록과 알레르기 케어를 위한 NestJS 기반 REST API 서버입니다.

---

## 기술 스택

- **Framework**: NestJS 11
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma 7
- **Auth**: JWT (Passport)
- **Push Notification**: Web Push (VAPID)
- **Scheduler**: @nestjs/schedule (Cron)
- **API Docs**: Swagger

---

## 폴더 구조

```
src/
├── auth/                 # 회원가입 / 로그인 (JWT)
├── users/                # 유저 조회
├── babies/               # 아기 프로필
├── feeding/              # 수유 기록
├── meal/                 # 이유식 기록
├── food-guide/           # 개월수별 식품 가이드
├── notification/         # 푸시 알림 (구독, 설정, 스케줄)
├── prisma/               # Prisma 클라이언트 서비스
└── generated/prisma/     # Prisma Client 자동 생성 폴더

prisma/
├── schema.prisma         # DB 스키마
└── migrations/
```

---

## 환경 변수 (.env)

```dotenv
# Supabase PostgreSQL (Connection Pooling)
DATABASE_URL="postgresql://postgres.[project-ref]:[password]@aws-x-xx-xxxx-x.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[project-ref]:[password]@aws-x-xx-xxxx-x.pooler.supabase.com:5432/postgres"

# JWT
JWT_SECRET=your_super_secret_key_here
JWT_EXPIRES_IN=7d

# Web Push (VAPID)
VAPID_PUBLIC_KEY=...
VAPID_PRIVATE_KEY=...
VAPID_MAILTO=mailto:your@email.com
```

> VAPID 키는 `npx web-push generate-vapid-keys`로 생성합니다.

---

## 설치 및 실행

```bash
npm install
npx prisma generate
npx prisma db push

npm run start:dev
```

- 서버: http://localhost:3000
- Swagger 문서: http://localhost:3000/api

---

## 데이터 모델 (ERD 요약)

```
User
 ├─ Baby (1:N)
 │   ├─ Feeding (1:N)
 │   ├─ Meal (1:N)
 │   ├─ NotificationSetting (1:N)
 │   └─ NotificationLog (1:N)
 └─ PushSubscription (1:N)
```

| 모델 | 설명 |
|------|------|
| `User` | 사용자 계정 (이메일, 비밀번호 해시, 이름) |
| `Baby` | 아기 프로필 (이름, 생년월일, 성별 → 개월수 계산) |
| `Feeding` | 수유 기록 (타입, 양/시간, 시각) |
| `Meal` | 이유식 기록 (메뉴, 양, 반응, 시각) |
| `PushSubscription` | 브라우저 푸시 구독 정보 |
| `NotificationSetting` | 알림 설정 (주기형 / 지정시간형) |
| `NotificationLog` | 발송된 알림 기록 + 응답 상태 |

---

## 기능별 API

### 1. 인증 (Auth)

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/auth/register` | 회원가입 | ❌ |
| POST | `/auth/login` | 로그인 (JWT 발급) | ❌ |

비밀번호는 `bcrypt`로 해싱하여 저장합니다. 로그인 성공 시 `access_token`과 사용자 정보를 반환합니다.

---

### 2. 아기 프로필 (Babies)

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/babies` | 아기 등록 | ✅ |
| GET | `/babies` | 내 아기 목록 | ✅ |
| GET | `/babies/:id` | 아기 상세 + 현재 개월수(`ageMonths`) | ✅ |

`birthDate` 기준으로 현재 개월수를 자동 계산하여 응답에 포함합니다.

---

### 3. 수유 기록 (Feeding)

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/feeding` | 수유 기록 등록 (`breast`/`formula`/`mixed`) | ✅ |
| GET | `/feeding/today/:babyId` | 오늘 수유 목록 | ✅ |
| GET | `/feeding/stats/:babyId` | 오늘 수유 통계 (횟수, 총량, 타입별) | ✅ |
| GET | `/feeding/:babyId` | 전체 수유 기록 | ✅ |

존재하지 않는 `babyId`로 기록 시 `400 Bad Request`로 안내합니다.

---

### 4. 이유식 기록 (Meal)

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/meal` | 이유식 기록 등록 (메뉴, 양, 반응) | ✅ |
| GET | `/meal/today/:babyId` | 오늘 이유식 목록 | ✅ |
| GET | `/meal/stats/:babyId` | 오늘 이유식 통계 (횟수, 총량, 메뉴 목록) | ✅ |
| GET | `/meal/:babyId` | 전체 이유식 기록 | ✅ |

`reaction`은 `good`(잘 먹음) / `normal`(보통) / `bad`(안 먹음) 중 하나입니다.

---

### 5. 개월수별 식품 가이드 (Food Guide)

| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| GET | `/food-guide/:ageMonths` | 개월수에 맞는 허용/주의 식품 목록 | ❌ |

4 / 6 / 9 / 12개월 단계별로 `allowed`(먹어도 되는 음식), `notAllowed`(주의 음식), `notes`(이유식 전환 팁)를 정적 데이터로 제공합니다.

---

### 6. 푸시 알림 (Notification)

#### 구독 관리
| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| GET | `/notification/vapid-public-key` | VAPID 공개키 조회 | ✅ |
| POST | `/notification/subscribe` | 푸시 구독 등록 | ✅ |
| DELETE | `/notification/unsubscribe?endpoint=...` | 구독 취소 | ✅ |

#### 알림 설정
| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| POST | `/notification/settings` | 알림 설정 생성/수정 (`feeding`/`meal`, `interval`/`fixed`) | ✅ |
| GET | `/notification/settings/:babyId` | 알림 설정 목록 조회 | ✅ |
| DELETE | `/notification/settings/:id` | 알림 설정 삭제 | ✅ |

- `mode: 'interval'` → `intervalMin`분마다 (마지막 기록 시각 기준)
- `mode: 'fixed'` → `fixedTimes`에 지정한 여러 시각 (`"09:00,13:00,17:00"`)

#### 알림 응답 로그
| Method | Endpoint | 설명 | 인증 |
|--------|----------|------|------|
| GET | `/notification/logs/pending/:babyId` | 응답 대기중인 알림 조회 | ✅ |
| POST | `/notification/logs/respond` | 알림 응답 처리 (`done`/`skipped`) | ❌ (Service Worker 호출용) |

#### 자동 알림 스케줄 (Cron)
- 매 1분마다 실행되어 다음을 체크합니다:
  - `interval` 모드: 마지막 수유/이유식 시각 + `intervalMin` ± 5분
  - `fixed` 모드: 현재 시각이 지정 시각 ± 5분 이내
- 조건 충족 시 `NotificationLog`를 생성하고, 등록된 모든 구독에 푸시 알림(액션 버튼: "했어요" / "아직요")을 발송합니다.
- 동일 시간대(10분 이내) 중복 발송은 방지됩니다.

---

## 인증 방식

```
Authorization: Bearer {access_token}
```

`/auth/login` 또는 `/auth/register` 응답의 `access_token`을 사용합니다.
