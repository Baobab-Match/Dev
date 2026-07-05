import { useState, useRef, useEffect, useMemo } from "react";
import logoImg from "../assets/logo.png";
import { COUNTRY_LIST } from "../data";
import { Icons } from "./ui";

// 국가명에서 한글명/영문명 추출 (CountrySearch.jsx와 동일한 방식)
const idOf = (label) => label.split(" (")[0];
const enOf = (label) => label.match(/\(([^)]+)\)/)?.[1] || "";

// 한글 초성 검색 (CountrySearch.jsx와 동일한 로직) — "ㅇ"처럼 자음만 입력해도 매칭되게
const CHOSUNG = [
  "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
  "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
];
function getChosung(str) {
  return str
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0) - 0xac00;
      if (code < 0 || code > 11171) return ch;
      return CHOSUNG[Math.floor(code / 588)];
    })
    .join("");
}
const isChosungOnly = (s) => /^[ㄱ-ㅎ]+$/.test(s);
const isLatin = (s) => /^[a-zA-Z]/.test(s);

function matchesQuery(label, q) {
  if (!q) return false;
  const korean = idOf(label);
  const english = enOf(label);
  if (isChosungOnly(q)) return getChosung(korean).startsWith(q);
  if (isLatin(q)) return english.toLowerCase().startsWith(q.toLowerCase());
  return korean.startsWith(q);
}

// 사이트 소개 서브메뉴 — AboutPage.jsx의 TABS와 동일한 목록 (연락처 제외)
const ABOUT_ITEMS = [
  { id: "intro", label: "신념" },
  { id: "why",   label: "핵심 기능" },
  { id: "how",   label: "이용 방법" },
];

export default function Nav({ hidden, go, openCountry, user, onLogin, onLogout }) {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const aboutRef = useRef(null);
  const triggerRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const [triggerX, setTriggerX] = useState(0);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const [navBottom, setNavBottom] = useState(0);
  const navRef = useRef(null);

  // 메뉴 항목 클릭 시 이동하고 메뉴 닫기
  const handleGo = (page) => {
    go(page);
    setOpen(false);
  };

  // 사이트 소개 드롭다운 — 호버로 열고 닫힘. 트리거→패널로 마우스 이동 시 깜빡이지 않게 약간의 지연을 둠
  const aboutCloseTimer = useRef(null);
  const openAboutHover = () => {
    clearTimeout(aboutCloseTimer.current);
    setAboutOpen(true);
  };
  const closeAboutHover = () => {
    aboutCloseTimer.current = setTimeout(() => setAboutOpen(false), 150);
  };

  // 사이트 소개 서브메뉴 선택 — 해당 탭을 지정해서 이동
  const goAbout = (tabId) => {
    go("about", false, { tab: tabId });
    setAboutOpen(false);
    setOpen(false);
  };

  // 드롭다운이 열릴 때마다 트리거의 실제 x좌표를 재서 패널 왼쪽 여백에 그대로 반영
  useEffect(() => {
    const measure = () => {
      if (triggerRef.current) setTriggerX(triggerRef.current.getBoundingClientRect().left);
    };
    if (aboutOpen) measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [aboutOpen]);

  // 사이트 소개 드롭다운 바깥을 클릭하면 닫기 (모바일 등 호버가 없는 환경 대비)
  useEffect(() => {
  const measure = () => {
    if (triggerRef.current) setTriggerX(triggerRef.current.getBoundingClientRect().left);
  };
  if (aboutOpen) measure();
  window.addEventListener("resize", measure);
  return () => window.removeEventListener("resize", measure);
}, [aboutOpen]);

  useEffect(() => {
    const measure = () => {
        if (triggerRef.current) {
          const r = triggerRef.current.getBoundingClientRect();
          setTriggerX(r.left);
          setTriggerWidth(r.width);
        }
        if (navRef.current) setNavBottom(navRef.current.getBoundingClientRect().bottom);
    };
    if (aboutOpen) measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [aboutOpen]);

  // 검색창 열리면 바로 입력 가능하게 포커스, 닫히면 입력값 초기화
  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
    else setQ("");
  }, [searchOpen]);

  // 검색창 바깥을 클릭하면 닫기
  useEffect(() => {
    if (!searchOpen) return;
    const onClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [searchOpen]);

  // Esc 키로 검색 화면 닫기
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setSearchOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  // 모바일 풀스크린 메뉴가 떠 있는 동안 뒤 배경 스크롤 잠그기
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // 초성·영문·한글명 매칭, 최대 8개만 노출
  const results = useMemo(() => {
    if (!q.trim()) return [];
    const query = q.trim();
    return COUNTRY_LIST.filter((label) => matchesQuery(label, query)).slice(0, 8);
  }, [q]);

  const pickCountry = (label) => {
    openCountry(idOf(label));
    setSearchOpen(false);
    setOpen(false);
  };

  return (
    <nav ref={navRef} className={"nav" + (hidden && !open ? " nav-hidden" : "") + (open ? " menu-open" : "")}>
      <div className="brand" onClick={() => handleGo("home")}>
        <img src={logoImg} alt="바오밥매치 로고" className="brand-logo" />
      </div>

      <div className={"nav-links" + (open ? " open" : "")}>
        <button onClick={() => handleGo("notice")}>공지사항</button>

        {/* 사이트 소개 — 마우스를 올리면 서브메뉴가 뜨고, 데스크탑에선 하이닉스처럼 큰 흰 패널로 표시 */}
        <div
          className={"nav-dropdown" + (aboutOpen ? " hover-open" : "")}
          ref={aboutRef}
          onMouseEnter={openAboutHover}
          onMouseLeave={closeAboutHover}
        >
          <button
            className="nav-dropdown-trigger"
            ref={triggerRef}
            aria-expanded={aboutOpen}
            onClick={() => goAbout("landing")}
          >
            사이트 소개
          </button>
          <div
            className={"nav-dropdown-panel" + (aboutOpen ? " open" : "")}
            style={{ paddingLeft: triggerX || undefined, top: navBottom || undefined }}
          >
            {ABOUT_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => goAbout(item.id)}
                style={i === 0 ? { width: triggerWidth || undefined } : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={() => handleGo("mypage")}>내 정보</button>
        <button onClick={() => handleGo("search")}>국가 정보 찾기</button>
        <button onClick={() => handleGo("match")}>맞춤 국가 추천</button>

        {/* 모바일 풀스크린 메뉴 안에서만 보이는 로그인 버튼 */}
        {user ? (
          <button className="nav-login nav-login--mobile" onClick={() => { onLogout(); setOpen(false); }}>
            로그아웃
          </button>
        ) : (
          <button className="nav-login nav-login--mobile" onClick={() => { onLogin(); setOpen(false); }}>
            로그인
          </button>
        )}
      </div>

      {/* 나라 검색 — 화면 위쪽에 전체 폭으로 붙고, 결과 개수만큼만 높이가 늘어남 */}
      <div className="nav-search" ref={searchRef}>
        <button
          className="nav-search-btn"
          aria-label="국가 검색"
          onClick={() => setSearchOpen((o) => !o)}
        >
          <Icons.search />
        </button>

        {searchOpen && (
          <div className="nav-search-overlay">
            <div className="nav-search-overlay-bar">
              <Icons.search />
              <input
                ref={inputRef}
                className="nav-search-overlay-input"
                type="text"
                placeholder="국가명으로 검색 (ex: 에티오피아)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter" && results[0]) pickCountry(results[0]); }}
              />
              <button className="nav-search-overlay-close" aria-label="검색 닫기" onClick={() => setSearchOpen(false)}>✕</button>
            </div>
            {results.length > 0 && (
              <div className="nav-search-overlay-results">
                {results.map((label) => (
                  <button key={label} className="nav-search-overlay-item" onClick={() => pickCountry(label)}>
                    {idOf(label)}
                    <span>{enOf(label)}</span>
                  </button>
                ))}
              </div>
            )}
            {q.trim() && results.length === 0 && (
              <p className="nav-search-empty">검색 결과가 없어요.</p>
            )}
          </div>
        )}
      </div>

      {/* 햄버거 버튼 (모바일에서만 보임) */}
      <button
        className="nav-toggle"
        aria-label="메뉴 열기"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? "✕" : "☰"}
      </button>

      {/* 데스크탑에서만 보이는 로그인 버튼 */}
      {user ? (
        <button className="nav-login nav-login--desktop" onClick={onLogout}>로그아웃</button>
      ) : (
        <button className="nav-login nav-login--desktop" onClick={onLogin}>로그인</button>
      )}
    </nav>
  );
}