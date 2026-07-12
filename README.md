# 🌳 바오밥매치 (Baobab Match)

한국 녹색기술과 아프리카 국가를 잇는 외교·공공데이터 매칭 플랫폼.

공공데이터(외교부·KOICA 등)에 기반한 객관적 지표와 AI 추천을 통해, 한국의 공공기관·기업·개인에게 가장 잘 맞는 아프리카 협력 국가를 찾아줍니다.

> ※ 일부 수치는 공개 데이터(World Bank 등) 실값이며, 아직 채워지지 않은 항목은 `null`로 비워져 있습니다. (아래 [데이터](#-데이터) 참고)

## 기술 스택
- **프론트엔드** — Vite + React (컴포넌트 기반 구조), CSS 변수 디자인 토큰
- **인증·데이터** — Firebase Authentication / Firestore
- **호스팅** — Firebase Hosting (보안 헤더·정적 자산 장기 캐싱 적용, 아래 [배포](#배포-firebase-hosting) 참고)
- **AI 추천** — scikit-learn K-Means + 코사인 유사도 모델(`baobab_matcher.pkl`) → FastAPI(`baobab-api`) 서빙, Render 배포
- **데이터 파이프라인** — Google Colab 4단계 노트북으로 공공데이터 12종 수집·가공 ([baobab-match-data-pipeline](레포링크) 참고)

## 사전 준비
로컬에서 처음 실행하기 전에 아래가 준비돼 있어야 합니다.

### 1. Node 버전
`package.json`의 `vite@^8`, `eslint@^10`이 요구하는 버전:
```
Node ^20.19.0 또는 >=22.12.0
```
이보다 낮으면 `npm install` 단계부터 실패하거나 예기치 않게 동작할 수 있습니다.

### 2. `.env` 파일
`.env`는 `.gitignore`에 포함되어 저장소에 올라가지 않으므로, 새로 클론한 경우 프로젝트 루트에 직접 만들어야 합니다.
```bash
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# reCAPTCHA (Firebase App Check용)
VITE_RECAPTCHA_SITE_KEY=
```
값은 Firebase 콘솔의 프로젝트 설정(baobab-match) 및 App Check → reCAPTCHA v3 등록 화면에서 확인할 수 있습니다. 값이 비어있거나 잘못되면 `config.js`의 `initializeApp`/`initializeAppCheck` 단계에서 바로 에러가 납니다.

### 3. Firebase 콘솔 설정
`.env` 값이 맞아도, 연결된 Firebase 프로젝트에서 아래가 활성화되어 있어야 앱이 정상 동작합니다.
- **Authentication** — 이메일/비밀번호 로그인 방식 활성화
- **Firestore** — 데이터베이스 생성 및 `firestore.rules` 배포
- **App Check** — reCAPTCHA v3 site key 등록 (위 `.env`와 동일한 키)

### 4. Firebase CLI (`firebase-tools`)
배포(`firebase deploy`)에 필요한 CLI 도구입니다. **주의:** 이건 `package.json`에 있는 `firebase`(앱 코드용 SDK)와는 별개의 패키지라 별도로 설치해야 합니다.
```bash
# 방법 A — 전역 설치 (한 번만 설치하면 다른 프로젝트에서도 재사용)
npm install -g firebase-tools

# 방법 B — devDependency로 설치 (팀원 간 CLI 버전 통일에 유리)
npm install -D firebase-tools
```
설치 후 최초 1회 인증 및 프로젝트 연결이 필요합니다.
```bash
firebase login        # Google 계정으로 로그인
firebase use --add    # 로컬 폴더 ↔ Firebase 프로젝트(baobab-match) 연결 확인/설정
```

## 실행 방법
```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 검사 (eslint.config.js 기준)
```

### 배포 (Firebase Hosting)
Firebase Hosting은 `dist/`만 서빙하므로, 코드 변경 후에는 **빌드 → 배포**를 함께 실행해야 합니다. (`firebase-tools` 설치 및 로그인은 [사전 준비](#4-firebase-cli-firebase-tools) 참고)
```bash
npm run build && firebase deploy
# 또는 package.json에 다음 스크립트를 추가해두면 한 번에:
#   "deploy": "npm run build && firebase deploy"
npm run deploy
```
> 브라우저 캐싱 때문에 배포가 반영 안 된 것처럼 보일 수 있습니다. 시크릿 창으로 확인하는 것이 가장 빠릅니다.

#### 보안 헤더 & 캐싱 정책 (`firebase.json`)
Firebase Hosting 설정에 아래 헤더/캐싱 규칙이 적용되어 있습니다.

**보안 헤더** — 전 경로(`**`) 공통 적용
| 헤더 | 값 | 목적 |
|---|---|---|
| `X-Content-Type-Options` | `nosniff` | MIME 타입 스니핑 방지 |
| `X-Frame-Options` | `SAMEORIGIN` | 클릭재킹 방지 (동일 출처 iframe만 허용) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | 교차 출처로 넘어갈 때 리퍼러 최소 공개 |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | HTTPS 강제(HSTS), 1년 |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` | 위치·마이크·카메라 권한 전면 차단 |

**캐싱 정책** — 경로별로 다르게 적용
| 경로 | Cache-Control | 이유 |
|---|---|---|
| `/index.html` | `no-cache, no-store, must-revalidate` | 항상 최신 빌드를 참조하도록 캐싱 금지 (SPA 진입점) |
| `**/*.@(js\|css)` | `public, max-age=31536000, immutable` | 파일명에 해시가 포함되므로 1년 장기 캐싱 |
| `**/*.@(woff2\|woff\|ttf\|png\|jpg\|jpeg\|svg\|webp\|ico)` | `public, max-age=31536000, immutable` | 폰트·이미지 등 정적 자산 1년 장기 캐싱 |

> ⚠️ `index.html`은 절대 캐싱하면 안 됩니다 — 캐싱될 경우 새 배포 후에도 사용자가 이전 버전의 JS/CSS 번들을 계속 참조하게 됩니다. 반면 `js`/`css`/이미지 등은 Vite 빌드 시 파일명에 해시가 붙으므로(예: `index-BHAmb8D4.js`) 안전하게 영구 캐싱할 수 있습니다.

## 구현된 기능

### ✅ 인증 (Firebase Auth)
- 이메일/비밀번호 회원가입·로그인
- **회원 타입 3종** — 공공기관 / 기업 / 일반
- 가입 시 Firestore `users/{uid}`에 프로필 저장
- 로그인 상태 관리 (`useAuth.js`)

### ✅ 즐겨찾기 (Firestore 연동)
- 관심 국가 즐겨찾기 추가/삭제 (`useFavorites.js`)
- 기존 localStorage 방식에서 **Firestore 기반으로 마이그레이션 완료** → 기기 간 동기화

### ✅ 화면
- **랜딩(Hero)** — 바오밥 모티프 자동 슬라이드 배너 + 진입 CTA
- **회원가입 모달** — 공공기관 / 기업 / 일반 타입 선택 → 폼 입력
- **국가 정보 검색** — 아프리카 지도(추천국 하이라이트) + 국가 검색 리스트
- **국가 상세** — 기후/외교 지표, KOICA 도넛차트, 경제·ODA 규모
- **기술 매칭 결과** — 분야 기반 추천국 순위 + 선정 요소
- **마이페이지** — 즐겨찾기 국가 관리 (로그인 필요)

### 🚧 진행 중 — AI 추천 매칭
관심 분야·기술 기반으로 협력 국가를 추천하는 AI 파이프라인을 구축하고 있습니다.
- **모델** — Google Colab에서 학습한 scikit-learn K-Means 클러스터링 (`.pkl`)
- **서빙** — FastAPI 백엔드 `baobab-api`를 별도 API로 분리, Render 배포
- 현재 모델 서빙 연동 및 국가 데이터 Firestore 이관 작업 진행 중

> ⚠️ 모델 로딩 시 `scikit-learn` 버전은 학습 환경(Colab)과 동일하게 **`1.6.1`로 고정**해야 합니다. 버전 불일치 시 모델 로드가 실패합니다.

## 파일 구조
```
src/
├─ App.jsx              # 라우팅 + 페이지/모달 조합
├─ pages/               # HomePage, CountrySearch, CountryDetail,
│                       #   MatchResults, NoticePage, AboutPage, MyPage
├─ modals/              # SignupModal, MatchConfirm, FieldSelectModal
├─ components/          # Nav 등 공통 컴포넌트
├─ useAuth.js           # 인증 상태 (Firebase Auth 연동)
├─ useFavorites.js      # 즐겨찾기 상태 (Firestore 연동)
├─ auth.js / firestore.js / config.js  # Firebase 설정·연동
├─ ui.jsx               # 로고, 아이콘, 국가 실루엣, KOICA 도넛차트
├─ AfricaMap.jsx        # 아프리카 지도 SVG (← 실서비스 시 GeoJSON으로 교체 권장)
├─ data.js              # 국가/카테고리 데이터
└─ index.css            # 디자인 시스템 (CSS 변수 토큰)
```

## 📊 데이터

`data.js`의 `COUNTRIES`는 아프리카 54개국을 담으며, 값의 출처는 두 갈래입니다.

| 키 | 출처 | 상태 |
|---|---|---|
| `nameEn`, `flag`, `population`, `economy.gdpPerCapita` | **World Bank Open Data API** | 실값 (자동 수집) |
| `language`, `climateScore`, `mainClimateIssue`, `diplomacyScore`, `matchScore`, `koica.sectors`, ODA 4종 | KOICA / OECD / 수동 | `null` 또는 빈 배열 (채워나가는 중) |

화면 컴포넌트는 `null`·빈 배열을 만나도 깨지지 않도록 되어 있어, 데이터를 점진적으로 채울 수 있습니다.

> 향후 국가 데이터는 Colab/AI 파이프라인이 준비되는 대로 Firestore로 일괄 이관할 예정입니다. (현재는 `data.js` 정적 파일 사용)

### 데이터 갱신 워크플로우 (Colab)
실데이터는 Colab 노트북(`baobab_match_data.ipynb`)에서 생성합니다.
1. `baobab_match_data.ipynb`를 [Google Colab](https://colab.research.google.com)에서 엽니다. (`파일 → 노트 업로드`)
2. 셀을 순서대로 실행합니다. (World Bank API 호출 — API 키 불필요)
3. 마지막 셀에서 생성된 `data.js`를 `src/data.js`에 붙여넣습니다.

### 데이터 출처
- **경제 (인구·1인당 GDP)** — World Bank Open Data API
- **기후 취약성** — ND-GAIN Country Index (직접 다운로드 후 가공 예정)
- **ODA (한국→해당국)** — OECD CRS / KOICA 통계 (직접 다운로드 후 가공 예정)
- **활용 데이터 기관** — IMF · KOICA · World Bank CCKP · 외교부 · 한국산업기술진흥원 · 한아프리카재단

## 확장 포인트
1. **AI 매칭 완성** — `baobab-api` Render 배포 마무리 및 프론트엔드 연동.
2. **데이터 이관** — 국가 데이터를 Firestore로 일괄 이관 (Colab/AI 파이프라인 연계).
3. **데이터 보강** — `koica.sectors`, ODA, 외교/기후 점수를 KOICA·OECD 자료로 채워 `null` 제거.
4. **실제 지도** — `AfricaMap.jsx`를 `react-simple-maps` + 아프리카 GeoJSON으로 교체.

## 디자인 토큰
- 딥 바오밥그린 `#2d4a32` · 세이지 `#5a7d5a` · 본 화이트 `#f4f1e9` · 에티오피아 골드 `#c9a227`
- 디스플레이: Noto Serif KR / 본문: Gothic A1 / 데이터: JetBrains Mono

## 팀 BAOBAB
- **강채연** — 기획 & PM · 서비스 비즈니스 모델 설계
- **오하민** — Developer · 시스템 개발
<<<<<<< HEAD
- **이연화** — Data Analyst · 공공데이터 분석
=======
- **이연화** — Data Analyst · 공공데이터 분석
>>>>>>> 1031d4d (검색창 수정)
