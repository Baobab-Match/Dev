import { useState, useEffect, useRef } from "react";
import baobabHero from "../assets/mainbaobab.jpg";
import heroAgriculture from "../assets/hero-agriculture.jpg";
import heroWater from "../assets/hero-water.jpg";
import introImage from "../assets/intro.jpg";
import featureMatch from "../assets/feature1.jpg";
import featureRecommend from "../assets/feature2.jpg";
import teamChaeyeon from "../assets/team-chaeyeon.jpg";
import teamHamin from "../assets/team-hamin.jpg";
import teamYeonhwa from "../assets/team-yeonhwa.jpg";

const INDENT = { textIndent: "1em" };

// 배너 슬라이드 이미지 (가로로 자동 전환)
const HERO_SLIDES = [
  { img: baobabHero, title1: "우리는 바오밥처럼", title2: "뿌리깊게 연결됩니다", sub: "We are deeply rooted like baobabs." },
  { img: heroAgriculture, title1: "함께 일구는", title2: "지속가능한 미래", sub: "Growing a sustainable future together." },
  { img: heroWater, title1: "기후 위기에 맞서", title2: "함께 만드는 변화", sub: "Building change together against the climate crisis." },
];

// 숫자로 보는 바오밥매치 — 숫자 강조 카드
const IMPACT_CARDS = [
  {
    title: "분석 대상 국가",
    num: "54", unit: "개국",
    lead: "아프리카 전 대륙을\n빠짐없이 분석",
    body: "한 나라도 누락 없이\n공정하게 비교",
    source: "KOICA · 외교부",
  },
  {
    title: "가공한 데이터",
    num: "10", unit: "여 개",
    lead: "기온·강수·홍수·ODA 등\n다양한 지표",
    body: "흩어진 공공데이터를 가공해\n비교 가능한 점수로 정리",
    source: "IMF · KOICA · World Bank CCKP · 외교부",
  },
  {
    title: "활용 데이터 기관",
    num: "6", unit: "곳",
    lead: "정부·국제기구가\n공개한 신뢰 데이터",
    body: "공신력 있는 기관의\n공개 데이터만 활용",
    source: (
      <>
        IMF · KOICA · World Bank CCKP<br />
        외교부 · 한국산업기술진흥원 · 한아프리카재단
      </>
    ),
  },
];

// 우리가 하는 일 — 사진 카드
const FEATURES = [
  { img: featureMatch, imgAlt: "국가 정보 살펴보기 일러스트", label: "국가 정보 이미지", title: "국가 정보 살펴보기", desc: "아프리카 54개국의 경제·환경·ODA 지표 가공해 한눈에 볼 수 있게 만듭니다.", page: "search" },
  { img: featureRecommend, imgAlt: "맞춤형 협력 국가 추천 일러스트", label: "맞춤 추천 이미지", title: "맞춤형 협력 국가 추천", desc: "관심 분야와 보유 기술을 바탕으로, 데이터 기반 AI 매칭 엔진이 54개국 데이터를 분석해 가장 적합한 협력 국가를 찾아냅니다.", page: "match" },
];

// 개발자 소개 데이터 — 사진은 추후 /assets 에 추가 후 photo 경로만 채우면 됨
const DEVELOPERS = [
  { name: "강채연", role: "기획 & PM", desc: "서비스 비즈니스 모델 설계", photo: teamChaeyeon },
  { name: "오하민", role: "Full stack Developer", desc: "시스템 개발 및 AI 모델 설계", photo: teamHamin },
  { name: "이연화", role: "Data Analyst", desc: "공공데이터 분석 및 시각화", photo: teamYeonhwa },
];

// "\n"으로 나눈 텍스트를 <span> 줄들로 렌더
const lines = (text) => text.split("\n").map((t, i) => <span key={i}>{t}</span>);

export default function HomePage({ go }) {
  const [slide, setSlide] = useState(0);

  // 터치 스와이프용 좌표 저장 (모바일 좌우 쓸기 대응)
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const SWIPE_THRESHOLD = 50; // 스와이프로 인정할 최소 이동 거리(px)

  // 5초마다 자동으로 다음 배너로 전환
  useEffect(() => {
    const timer = setInterval(() => setSlide((p) => (p + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // 슬라이드 이동 (음수=이전, 양수=다음 / 순환 처리)
  const moveSlide = (dir) => setSlide((p) => (p + dir + HERO_SLIDES.length) % HERO_SLIDES.length);

  // 히어로 아래 스크롤 버튼 — 다음 섹션(서비스 소개)으로 부드럽게 이동
  const introRef = useRef(null);
  const scrollToContent = () => introRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; touchEndX.current = null; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < SWIPE_THRESHOLD) return; // 너무 짧은 이동은 무시
    moveSlide(diff > 0 ? 1 : -1); // 왼쪽으로 쓸면 다음, 오른쪽으로 쓸면 이전
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="home">
      {/* 히어로 — 자동 슬라이드 배너 */}
      <header className="hero">
        <div
          className="hero-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {HERO_SLIDES.map((s, i) => (
            <div
              key={i}
              className={`hero-photo ${i === slide ? "active" : ""}`}
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="hero-inner">
                <h1>
                  <span className="line">{s.title1}</span>
                  <span className="line"><em>{s.title2}</em></span>
                </h1>
                <p className="hero-sub">{s.sub}</p>
              </div>
            </div>
          ))}

          {/* 좌우 호버 넘김 존 — 마우스가 올라가면 그 방향으로 자동 전환, 모바일에선 CSS로 숨김 */}
          <div
            className="hero-nav-zone left"
            onMouseEnter={() => moveSlide(-1)}
            onClick={() => moveSlide(-1)}
            aria-label="이전 배너"
          >
            <span className="hero-nav-arrow">‹</span>
          </div>
          <div
            className="hero-nav-zone right"
            onMouseEnter={() => moveSlide(1)}
            onClick={() => moveSlide(1)}
            aria-label="다음 배너"
          >
            <span className="hero-nav-arrow">›</span>
          </div>

          {/* 배너 전환 점 — 데스크탑에선 숨기고 모바일에서만 보임(CSS) */}
          <div className="hero-dots">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`hero-dot ${i === slide ? "active" : ""}`}
                onClick={() => setSlide(i)}
                aria-label={`${i + 1}번째 배너`}
              />
            ))}
          </div>

          {/* 스크롤 유도 버튼 — 데스크탑 전용(CSS), 모바일에선 점 인디케이터로 대체 */}
          <button className="hero-scroll" onClick={scrollToContent} aria-label="아래로 스크롤">
            <span className="hero-scroll-chevron">⌄</span>
          </button>
        </div>
      </header>

      {/* 서비스 소개 — 바오밥매치란? */}
      <section className="home-section intro-section" ref={introRef}>
        <div className="section-text">
          <span className="section-tag">ABOUT</span>
          <h2>바오밥매치란?</h2>
          <p style={INDENT}>
            바오밥매치는 한국의 공공기관·기업·개인을 아프리카 54개국과
            연결하는 매칭 플랫폼입니다. 공공데이터에 기반한 객관적 지표와
            AI 추천을 통해, 가장 잘 맞는 협력 국가를 찾아드립니다. 매칭
            결과는 PDF 보고서로 정리되어, 다운로드 후 필요한 곳에 바로
            공유할 수 있습니다.
          </p>
          <button className="section-btn" onClick={() => go("about")}>
            더 알아보기
          </button>
        </div>
        {/* 이미지: /assets/intro.jpg 추가 후 아래 src 채우기 */}
        <div className="section-photo intro-photo" aria-label="서비스 소개 이미지">
          <img src={introImage} alt="협업을 상징하는 일러스트" />
        </div>
      </section>

      {/* 우리가 하는 일 — 사진 카드 */}
      <section className="home-section feature-section">
        <div className="section-head">
          <span className="section-tag">WHAT WE DO</span>
          <h2>우리가 하는 일</h2>
        </div>
        <div className="feature-cards">
          {FEATURES.map((f) => (
            <article
              className="feature-card"
              key={f.title}
              onClick={() => go(f.page)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") go(f.page); }}
            >
              <div className="card-photo" aria-label={f.label}>
                <img src={f.img} alt={f.imgAlt} />
              </div>
              <h3>{f.title}</h3>
              <p style={INDENT}>{f.desc}</p>
            </article>
          ))}
        </div>
        <p className="feature-hint">클릭하시면 바로 해당 페이지로 이동합니다.</p>
      </section>

      {/* 숫자로 보는 바오밥매치 — 숫자 강조 카드 */}
      <section className="home-section impact-section">
        <div className="section-head">
          <span className="section-tag">BY THE NUMBERS</span>
          <h2>숫자로 보는 바오밥매치</h2>
          <p className="stats-caption">
            흩어진 공공데이터를 가공해,<br />
            <strong>객관적인 국가 분석</strong>의 토대를 만들었습니다.
          </p>
        </div>

        <div className="impact-cards">
          {IMPACT_CARDS.map((c) => (
            <article className="impact-card" key={c.title}>
              <h3 className="impact-title">{c.title}</h3>
              <p className="impact-num">
                {c.num}<span className="impact-unit">{c.unit}</span>
              </p>
              <p className="impact-lead">{lines(c.lead)}</p>
              <span className="impact-divider" />
              <p className="impact-body">{lines(c.body)}</p>
              <p className="impact-source">{c.source}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 개발자 소개 — 세로 카드, 카드 내 텍스트는 가로 배치 */}
      <section className="home-section team-section">
        <div className="section-head">
          <span className="section-tag">TEAM</span>
          <h2>BAOBAB</h2>
        </div>
        <div className="team-cards">
          {DEVELOPERS.map((dev) => (
            <article className="team-card" key={dev.name}>
              <div className="team-photo" aria-label={`${dev.name} 프로필`}>
                {dev.photo
                  ? <img src={dev.photo} alt={dev.name} />
                  : <span className="photo-placeholder">사진 자리</span>}
              </div>
              <div className="team-info-row">
                <h3>{dev.name}</h3>
                <p className="team-role">{dev.role}</p>
                <p className="team-desc">{dev.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}