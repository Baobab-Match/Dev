import { useState } from "react";
import logoImg from "../assets/logo.png";

export default function Nav({ onHero, go, user, onLogin, onLogout }) {
  const [open, setOpen] = useState(false);

  // 메뉴 항목 클릭 시 이동하고 메뉴 닫기
  const handleGo = (page) => {
    go(page);
    setOpen(false);
  };

  return (
    <nav className={"nav" + (onHero ? " on-hero" : "") + (open ? " menu-open" : "")}>
      <div className="brand" onClick={() => handleGo("home")}>
        <img src={logoImg} alt="바오밥매치 로고" className="brand-logo" />
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

      <div className={"nav-links" + (open ? " open" : "")}>
        <button onClick={() => handleGo("notice")}>공지사항</button>
        <button onClick={() => handleGo("about")}>사이트 소개</button>
        <button onClick={() => handleGo("mypage")}>내 정보</button>
        {user ? (
          <button className="nav-login" onClick={() => { onLogout(); setOpen(false); }}>로그아웃</button>
        ) : (
          <button className="nav-login" onClick={() => { onLogin(); setOpen(false); }}>로그인</button>
        )}
      </div>
    </nav>
  );
}