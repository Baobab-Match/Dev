import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer"; // 공통 하단 푸터 — 모든 페이지에 고정
import HomePage from "./pages/HomePage"; // 첫 화면 — 즉시 필요하므로 일반 import 유지
import { useFavorites } from "./useFavorites";
import { useAuth } from "./useAuth";
import { COUNTRIES } from "./data";
import { useRecentCountries } from "./useRecentCountries";

// ── 코드 스플리팅 ──────────────────────────────────────────────
// 아래 페이지·모달은 해당 화면에 들어갈 때 비로소 내려받습니다(lazy).
// 덕분에 첫 화면(홈) 로딩에 필요한 용량이 크게 줄어듭니다.
const CountrySearch    = lazy(() => import("./pages/CountrySearch"));
const CountryDetail    = lazy(() => import("./pages/CountryDetail"));
const MatchResults     = lazy(() => import("./pages/MatchResults"));
// NoticePage·AboutPage는 named export라 default 형태로 변환해서 lazy 처리
const NoticePage       = lazy(() => import("./pages/NoticePage").then(m => ({ default: m.NoticePage })));
const AboutPage        = lazy(() => import("./pages/AboutPage").then(m => ({ default: m.AboutPage })));
const MyPage           = lazy(() => import("./pages/MyPage"));
const SignupModal      = lazy(() => import("./modals/SignupModal"));
const MatchConfirm     = lazy(() => import("./modals/MatchConfirm"));
const FieldSelectModal = lazy(() => import("./modals/FieldSelectModal"));

// nameEn(영문 슬러그) ↔ 한국어 id 양방향 변환
const ID_TO_SLUG = Object.fromEntries(Object.entries(COUNTRIES).map(([id, c]) => [id, c.nameEn]));
const SLUG_TO_ID = Object.fromEntries(Object.entries(COUNTRIES).map(([id, c]) => [c.nameEn, id]));

// page 이름 ↔ URL 경로 매핑
const PATHS = { home: "/", search: "/search", match: "/match", notice: "/notice", about: "/about", mypage: "/mypage" };

// 회원 유형 → 한글 라벨
const TYPE_LABEL = { company: "기업", public: "공공기관" };

// CountryDetail은 URL의 영문 슬러그를 한국어 id로 역변환해서 넘김
function CountryDetailRoute({ go, isFavorite, toggleFavorite }) {
  const { slug } = useParams();
  const location = useLocation();
  const id = SLUG_TO_ID[slug] || slug;
  const from = location.state?.from || "search";
  return <CountryDetail id={id} go={go} from={from} isFavorite={isFavorite} toggleFavorite={toggleFavorite} />;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [signup, setSignup] = useState(false);
  const [matchConfirm, setMatchConfirm] = useState(false);
  const [fieldSelect, setFieldSelect] = useState(false);
  const [matchField, setMatchField] = useState([]); 
  const [toast, setToast] = useState(null);
  const { user, profile, logOut, updateProfile } = useAuth();
  const { favorites, isFavorite, toggleFavorite } = useFavorites(user);
  const { recent, pushRecent } = useRecentCountries();

  // nav는 항상 흰 배경 고정. 대신 아래로 스크롤하면 숨고, 위로 스크롤하면 바로 다시 나타난다
  // (SK하이닉스 사이트와 동일한 패턴). 페이지 맨 위 근처에서는 숨기지 않는다.
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastScrollY.current;
      const pastNav = y > 88; // nav 높이 정도는 지나야 숨김 동작 시작
      setNavHidden(goingDown && pastNav);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setNavHidden(false); }, [location.pathname]);

  // 비로그인이면 로그인 모달, 로그인이면 즐겨찾기 토글
  const handleToggleFavorite = (id) => {
    if (!user) { setSignup(true); return; }
    toggleFavorite(id);
  };

  // 로그인 프로필에서 매칭 기본 분야 뽑기 (기업=field, 공공기관/일반=interest)
  const myField = (profile?.type === "company" ? profile?.field : profile?.interest) || "";

  // 기존 go(p) 시그니처 유지 — 내부에서 navigate로 이동. state는 About 페이지 탭 지정 등에 사용
  const go = (p, direct = false, state) => {
    if ((p === "mypage" || p === "match") && !user) { setSignup(true); return; } // 로그인 필요
    if (p === "match" && !direct) { setMatchConfirm(true); return; }
    window.scrollTo(0, 0);
    navigate(PATHS[p] || "/", state ? { state } : undefined);
  };

  // 국가 상세로 이동 — URL에 id를 넣음 (/country/ETH)
  const openCountry = (id, from = "search") => {
    window.scrollTo(0, 0);
    pushRecent(id);
    navigate("/country/" + (ID_TO_SLUG[id] || id), { state: { from } });
  };

  const runMatch = (field) => {
    setMatchField(field);
    setMatchConfirm(false);
    setFieldSelect(false);
    window.scrollTo(0, 0);
    navigate("/match");
  };

  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2800); };

  // 로그인 필요한 라우트용 가드: 비로그인이면 홈으로
  const guard = (el) => (user ? el : <Navigate to="/" replace />);

  return (
    <div className="app">
      <Nav
        hidden={navHidden}
        go={go}
        openCountry={(id) => openCountry(id, "nav-search")}
        user={user}
        onLogin={() => setSignup(true)}
        onLogout={async () => { await logOut(); navigate("/"); }}
      />

      {/* lazy 페이지 로딩 중 잠깐 보일 폴백 */}
      <Suspense fallback={<div className="route-loading">불러오는 중…</div>}>
        <Routes>
          <Route path="/" element={<HomePage go={go} />} />
          <Route path="/search" element={<CountrySearch openCountry={openCountry} user={user} profile={profile} />} />
          <Route
            path="/country/:slug"
            element={<CountryDetailRoute go={go} isFavorite={isFavorite} toggleFavorite={handleToggleFavorite} />}
          />
          <Route
            path="/match"
            element={guard(
              <MatchResults openCountry={(id) => openCountry(id, "match")} field={matchField} profile={profile} user={user} favorites={favorites} />
            )}
          />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/about" element={<AboutPage go={go} />} />
          <Route
            path="/mypage"
            element={guard(
              <MyPage
                profile={profile}
                favorites={favorites}
                isFavorite={isFavorite}
                toggleFavorite={handleToggleFavorite}
                openCountry={(id) => openCountry(id, "mypage")}
                updateProfile={updateProfile}
                recent={recent}
              />
            )}
          />
          {/* 없는 주소는 홈으로 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      {/* 모달도 lazy — 열릴 때만 내려받음. Suspense로 감싸 로딩 중 깨짐 방지 */}
      <Suspense fallback={null}>
        {signup && (
          <SignupModal
            onClose={() => setSignup(false)}
            onDone={() => { setSignup(false); }}
          />
        )}
        {matchConfirm && (
          <MatchConfirm
            profile={profile}
            onClose={() => setMatchConfirm(false)}
            onYes={() => { if (profile) runMatch(myField ? [myField] : []); }}
            onNo={() => { setMatchConfirm(false); setFieldSelect(true); }}
          />
        )}
        {fieldSelect && (
          <FieldSelectModal
            onClose={() => setFieldSelect(false)}
            onMatch={runMatch}
            type={TYPE_LABEL[profile?.type] || "개인"}
          />
        )}
      </Suspense>

      {toast && <div className="toast">{toast}</div>}

      {/* 공통 푸터 — 라우터 바깥이라 모든 페이지 맨 아래에 고정 */}
      <Footer />
    </div>
  );
}