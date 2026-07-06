import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import introBanner from "../assets/about-intro-banner.jpg";
import landingBanner from "../assets/about-landing-banner.jpg";
import howBanner from "../assets/about-how-banner.jpg"
import aboutFeature1 from "../assets/about-feature1.jpg";
import aboutFeature2 from "../assets/about-feature2.jpg";
import aboutFeature3 from "../assets/about-feature3.jpg";
import aboutFeature4 from "../assets/about-feature4.jpg";

const INDENT = { textIndent: "1em" };
const INDENT_TOP = { textIndent: "1em", marginTop: "1.2em" };

// 작동 방식 — 4단계 흐름 (실제 서비스 플로우 기준)
const STEPS = [
  { step: "01", title: "회원가입·로그인", desc: "간단한 정보 입력으로 시작하세요.\n이미 회원이라면 바로 로그인합니다." },
  { step: "02", title: "탐색 또는 추천 선택", desc: "직접 나라를 찾아봐도 좋고,\n추천을 받아도 좋습니다." },
  { step: "03", title: "국가 상세 확인", desc: "기후·경제·ODA까지,\n국가 상세 정보를 살펴봅니다." },
  { step: "04", title: "보고서 다운로드", desc: "매칭 순위와 국가별 추천 근거를\nPDF 보고서로 저장해 공유합니다." },
];

// 탭 메뉴 정의 — 연락처는 제거 (Nav 드롭다운의 서브메뉴와 동일한 목록)
// ※ Nav.jsx의 ABOUT_ITEMS 배열도 반드시 동일하게 맞춰줄 것
const TABS = [
  { id: "intro", label: "신념" },
  { id: "for-whom", label: "이런 분들께" },
  { id: "why", label: "핵심 기능" },
  { id: "how", label: "이용 방법" },
  { id: "faq", label: "자주 묻는 질문" },
];
const TAB_LABEL = Object.fromEntries(TABS.map((t) => [t.id, t.label]));

// 신념(미션) 본문 문단
const MISSION = [
  "기후위기 대응은 한 나라만의 과제가 아닙니다. 바오밥매치는 물 부족, 가뭄, 재생에너지 등 다양한 분야에서 한국이 보유한 기술과, 이를 필요로 하는 아프리카 국가를 연결합니다. 외교부·KOICA의 공공데이터로 아프리카 54개국의 기후·경제·ODA·외교 지표를 분석하고, AI가 각 국가의 기후 특성에 맞는 녹색기술 수요를 분석해 가장 적합한 협력 대상을 추천합니다.",
  "우리는 단순한 기술 거래를 넘어, 지속가능한 동반 성장을 지향합니다. 기후 취약 국가의 적응 역량을 키우고 청정에너지로의 전환을 앞당기는 환경적 가치(E), 지역사회의 삶의 질과 일자리를 개선하는 사회적 가치(S), 그리고 공공데이터에 기반한 투명하고 설명 가능한 추천으로 신뢰를 쌓는 거버넌스(G)까지—ESG의 세 축을 매칭의 기준으로 삼습니다.",
  "기술은 국경을 넘을 때 비로소 가치를 발합니다. 한국이 수십 년간 축적한 물 관리, 재생에너지, 기후 적응 기술은 지금 이 순간에도 누군가에게 가장 절실한 해법이 될 수 있습니다. 바오밥매치는 그 기술이 가장 필요한 곳으로, 가장 정확하게 닿도록 데이터와 AI로 다리를 놓습니다.",
  "바오밥나무가 깊은 뿌리로 메마른 땅에서도 생명을 잇듯, 우리는 기술과 사람을, 그리고 오늘의 필요와 내일의 가능성을 연결합니다. 그 연결이 더 푸른 지구를 향한 작은 시작이 되기를 바랍니다.",
];

// 왜 아프리카인가 — 다크 섹션 2x2 카드용 데이터
// 출처: IEA(Africa Energy Outlook 2022, 온실가스·태양광), IMF F&D 2023(인구, UN 인구전망 기반), World Bank(노동가능인구)
const WHY_AFRICA = [
  { title: "온실가스 배출량", val: "4%↓", desc: "아프리카는 전 세계 온실가스 배출량의 4%도 채 되지 않지만, 기후변화로 매년 GDP의 최대 15%까지 손실을 입고 있습니다." },
  { title: "태양광 잠재력", val: "60%↑", desc: "전 세계 최고 수준 태양광 자원의 60%를 아프리카가 보유하고 있습니다." },
  { title: "인구 비중", val: "25%↑", desc: "2050년, 전 세계 인구 중 아프리카가 차지할 것으로 전망되는 비중입니다." },
  { title: "노동가능인구", val: "70%↑", desc: "2035년까지 아프리카 노동가능인구가 이만큼 증가할 것으로 전망됩니다." },
];

// 화면에 들어올 때마다(스크롤을 위로 올렸다가 다시 내려도) 매번 0부터 재생됨
function CountUpStat({ value, className = "stat-val" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(null);
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let rafId = null;

    const play = () => {
      if (rafId) cancelAnimationFrame(rafId);
      const duration = 900;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(eased * target) + suffix);
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play();
        } else {
          if (rafId) cancelAnimationFrame(rafId);
          setDisplay("0" + suffix);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [value, target, suffix]);

  return (
    <div className={className} ref={ref}>
      {display ?? (target !== null ? "0" + suffix : value)}
    </div>
  );
}

// 핵심 기능 — 랜딩 스크롤 섹션용 짧은 티저 (한 줄 요약)
const WHY_TEASER = [
  { title: "흩어진 아프리카 54개국 데이터를 한곳에", desc: "외교부·KOICA 등 공공데이터를 가공해, 54개국을 하나의 기준으로 정리했습니다." },
  { title: "복잡한 지표를 점수로 한눈에 확인", desc: "기후·경제·외교 지표를 점수로 환산해, 국가 간 차이를 한눈에 비교합니다." },
  { title: "AI가 협력하기 적합한 국가 추천", desc: "관심 분야와 보유 기술만 입력하면, AI가 근거와 함께 협력 국가를 추천합니다." },
  { title: "한 번에 정리되는 보고서", desc: "매칭 결과를 PDF 보고서로 정리해, 다운로드해서 바로 공유할 수 있습니다." },
];

// 핵심 기능(why) 탭 — 상세 설명 (탭 페이지 전용, 티저보다 자세하고 다른 문구)
const WHY_DETAIL = [
  {
    title: "흩어진 아프리카 54개국 데이터를 한곳에",
    desc: "외교부 일반현황·경제현황, KOICA 통합개발지표·지원실적처럼 여러 기관에 흩어져 있던 아프리카 54개국의 공공데이터를 직접 수집하고 가공해 하나의 기준으로 정리했습니다. 국가마다 발표 형식과 단위가 제각각이라 비교 자체가 어려웠던 정보를, 검색 한 번으로 확인할 수 있도록 만들었습니다. 아프리카 대륙 전체를 다루기 때문에 특정 국가에 관심이 없어도 새로운 협력 대상을 발견할 수 있습니다.",
  },
  {
    title: "복잡한 지표를 점수로 한눈에 확인",
    desc: "기후 취약도, 외교 친밀도, 개발 필요성 등 성격이 전혀 다른 지표들을 동일한 점수 체계로 환산해 54개국을 같은 기준으로 나란히 비교할 수 있게 만들었습니다. 숫자만 나열하는 대신, 국가 간 차이가 어느 정도인지 직관적으로 파악할 수 있도록 시각화했습니다. 관심 있는 국가 여러 곳을 동시에 놓고 비교하며 우선순위를 정하는 데 활용할 수 있습니다.",
  },
  {
    title: "AI가 협력하기 적합한 국가 추천",
    desc: "보유 기술이나 관심 분야, 회원 유형(공공기관·기업·개인)을 입력하면 분야 적합도부터 외교 기반까지 여러 축을 종합적으로 계산해 협력하기 좋은 국가를 추천합니다. 단순히 순위만 보여주는 것이 아니라, 왜 그 국가가 적합한지 근거를 구체적인 문장으로 풀어서 제시하기 때문에 추천 결과를 그대로 신뢰하기보다 스스로 판단하는 데 참고 자료로 활용할 수 있습니다.",
  },
  {
    title: "한 번에 정리되는 보고서",
    desc: "매칭 순위와 국가별 추천 근거, 핵심 지표를 하나의 PDF 보고서로 정리해 다운로드할 수 있습니다. 별도로 편집하거나 자료를 재구성할 필요 없이, 협력 제안서나 내부 보고 자료에 바로 첨부해 활용할 수 있는 형태로 제공합니다. 여러 국가를 검토했다면 국가별로 각각 보고서를 받아 비교 자료로 쌓아둘 수도 있습니다.",
  },
];

const FEATURE_PHOTOS = [aboutFeature1, aboutFeature2, aboutFeature3, aboutFeature4];

function ScrollFeatureList({ items, photos, onMore }) {
  const SLOT_VH = 140;
  const HOLD = 0.34;
  const FOLD = 0.28;
  const ROW_H = 68; // 접힌 헤더 한 줄 높이 — 더 존재감 있게 키움
  const LERP = 0.08; // 값이 작을수록 더 묵직하고 부드럽게 쫓아감 (0.05~0.15 권장)

  const wrapRef = useRef(null);
  const panelRefs = useRef([]);
  const headerRefs = useRef([]);
  const total = items.length + 1;
  const smoothedP = useRef(0);
  const running = useRef(false);

  useEffect(() => {
    // 모바일에선 CSS가 세로 목록으로 강제 표시하므로(스크롤 연출 없음),
    // 이 애니메이션 루프를 아예 돌리지 않는다 — 안 그러면 inline pointer-events/opacity가
    // 모바일 레이아웃과 충돌해서 CTA 버튼이 눌리지 않는 문제가 생김.
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const applyFrame = (p) => {
      panelRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = p - i;
        let opacity, translateY, scaleY, origin;

        if (t <= -(HOLD + FOLD)) {
          opacity = 0; translateY = 40; scaleY = 1; origin = "center";
        } else if (t <= -HOLD) {
          const k = (t + HOLD + FOLD) / FOLD;
          opacity = k; translateY = (1 - k) * 40; scaleY = 1; origin = "center";
        } else if (t <= HOLD) {
          opacity = 1; translateY = 0; scaleY = 1; origin = "center";
        } else if (t <= HOLD + FOLD) {
          const k = (t - HOLD) / FOLD;
          opacity = 1 - k; translateY = -k * 30; scaleY = 1 - k; origin = "top center";
        } else {
          opacity = 0; translateY = -30; scaleY = 0; origin = "top center";
        }

        el.style.opacity = String(opacity);
        el.style.transform = `translateY(${translateY}px) scaleY(${scaleY})`;
        el.style.transformOrigin = origin;
        el.style.pointerEvents = opacity > 0.5 ? "auto" : "none";
      });

      headerRefs.current.forEach((el, i) => {
        if (!el) return;
        const t = p - i;
        let raw;
        if (t <= HOLD) raw = 0;
        else if (t <= HOLD + FOLD) raw = (t - HOLD) / FOLD;
        else raw = 1;
        const foldT = 1 - Math.pow(1 - raw, 2);

        el.style.height = `${foldT * ROW_H}px`;
        el.style.opacity = String(foldT);
        el.classList.toggle("is-current", t > -HOLD && t <= HOLD + FOLD);
      });
    };

    const loop = () => {
      const wrap = wrapRef.current;
      if (!wrap) { running.current = false; return; }
      const vh = window.innerHeight;
      const slotPx = (SLOT_VH / 100) * vh;
      const rect = wrap.getBoundingClientRect();
      const scrolled = Math.min(Math.max(-rect.top, 0), slotPx * (total - 1));
      const targetP = scrolled / slotPx;

      // lerp — 실제 스크롤값을 즉시 반영하지 않고, 매 프레임 목표치를 조금씩 쫓아가게 해서
      // 뚝뚝 끊기는 휠 스크롤도 부드럽게 흐르는 느낌으로 바뀜
      smoothedP.current += (targetP - smoothedP.current) * LERP;

      applyFrame(smoothedP.current);

      // 목표값에 충분히 가까워지면 루프를 멈춰 불필요한 렌더링을 줄임
      if (Math.abs(targetP - smoothedP.current) > 0.0008) {
        requestAnimationFrame(loop);
      } else {
        smoothedP.current = targetP;
        applyFrame(targetP);
        running.current = false;
      }
    };

    const onScroll = () => {
      if (!running.current) {
        running.current = true;
        requestAnimationFrame(loop);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [total]);

  return (
    <div className="ftl-wrap" ref={wrapRef} style={{ height: `${total * SLOT_VH}vh` }}>
      <div className="ftl-stage">
        <div className="ftl-headers">
          {items.map((it, i) => (
            <div className="ftl-header-row" key={it.title} ref={(el) => (headerRefs.current[i] = el)}>
              <span className="ftl-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ftl-title">{it.title}</span>
            </div>
          ))}
        </div>

        <div className="ftl-panels">
          {items.map((it, i) => (
            <div className="ftl-panel" key={it.title} ref={(el) => (panelRefs.current[i] = el)}>
              <div className="ftl-photo">
                <img src={photos[i]} alt={it.title} />
              </div>
              <div className="ftl-text">
                <h3>{it.title}</h3>
                <p style={INDENT}>{it.desc}</p>
              </div>
            </div>
          ))}

          <div className="ftl-panel ftl-panel--cta" ref={(el) => (panelRefs.current[items.length] = el)}>
            <button className="about-next-link" onClick={onMore}>
              핵심 기능 자세히 보기 <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 이런 분들께 추천합니다 — 정부·공공기관 / 기업이 메인 타겟, 개인은 부가 설명
const AUDIENCE = [
  {
    tag: "공공기관 · 정부",
    title: "ODA 정책·사업을 발굴하는 담당자",
    desc: "협력국가를 검토할 때마다 여러 기관 자료를 일일이 찾아보는 대신, 기후·경제·외교·ODA 지표를 국가별로 정리된 형태로 비교하고 우선순위 후보를 데이터로 뒷받침할 수 있습니다.",
  },
  {
    tag: "기업",
    title: "해외 진출·수출선을 찾는 기업",
    desc: "보유 기술이나 사업 분야를 입력하면, 어떤 국가의 어떤 수요와 맞는지 근거와 함께 추천받습니다. ESG 이행 실적이나 사업 제안서에 바로 활용할 수 있는 PDF 리포트도 제공합니다.",
  },
  {
    tag: "개인",
    title: "국제개발 분야를 조사·연구하는 개인",
    desc: "소속 기관이 없어도 동일한 방식으로 국가 정보를 열람하고 매칭 결과를 받아볼 수 있습니다. 아프리카 협력 분야를 공부하거나 자료를 준비하는 데 참고용으로 활용하기 좋습니다.",
  },
];

// 자주 묻는 질문
// ⚠️ 이용료·업데이트 주기 등은 실제 정책 확정 후 문구 다시 확인할 것
const FAQ = [
  { q: "이용료가 있나요?", a: "현재는 무료로 이용하실 수 있습니다. (추후 정책 변경 시 별도 공지 예정)" },
  { q: "국가 데이터는 어디서 가져오나요?", a: "외교부 일반현황·경제현황, KOICA 통합개발지표·지원실적 등 공공데이터를 기반으로 구성했습니다." },
  { q: "추천(매칭)은 어떤 기준으로 이뤄지나요?", a: "분야 적합도, 기후기술 적합도, 기후위기 긴급도, 외교 기반, 개발 필요성, 수출 연계성 6가지 축을 회원 유형별 가중치로 계산해 산출합니다." },
  { q: "개인 회원도 매칭 리포트를 받을 수 있나요?", a: "네, 회원 유형과 관계없이 관심 분야를 입력하면 동일한 방식으로 추천받고 PDF 보고서로 저장할 수 있습니다." },
  { q: "사업자등록번호는 어떻게 확인하나요?", a: "현재는 형식(10자리) 검증만 이뤄지며, 추후 국세청 API 연동을 통해 실제 등록 여부 검증을 제공할 예정입니다." },
  { q: "국가 데이터는 얼마나 자주 업데이트되나요?", a: "공공데이터 갱신 주기에 맞춰 정기적으로 업데이트할 예정입니다." },
];

export function AboutPage({ go }) {
  const location = useLocation();
  const [tab, setTab] = useState(location.state?.tab || "landing");

  // nav 드롭다운에서 다른 서브메뉴를 골라 다시 /about으로 들어오면(같은 라우트라 리마운트되지 않음) 탭을 맞춰준다
  useEffect(() => {
    if (location.state?.tab) setTab(location.state.tab);
  }, [location.state]);

  return (
    <main className="page about-page">
      {tab === "landing" ? (
        <>
          {/* 신념 — 기존 그대로 */}
          <section className="about-landing-hero">
            <img src={landingBanner} className="about-landing-hero-img" alt="사무실 건물 외관" />
            <div className="about-landing-hero-overlay">
              <nav className="breadcrumb breadcrumb--on-photo" aria-label="이동 경로">
                <button onClick={() => go && go("home")}>Home</button>
                <span className="breadcrumb-sep">›</span>
                <span className="breadcrumb-current">사이트 소개</span>
              </nav>
              <h1 className="about-landing-hero-title">
                당신의 필요를 이해하는 데이터로,<br />
                협력을 더 가깝게 만듭니다
              </h1>
              <button className="about-landing-hero-btn" onClick={() => setTab("intro")}>
                신념 더보기 <span className="arrow">→</span>
              </button>
            </div>
          </section>

          {/* 이런 분들께 — 사진 없이 가운데 정렬 텍스트 섹션 (네이버 하이퍼클로바X 스타일 참고) */}
          <section className="about-landing-audience">
            <h2 className="about-landing-audience-title">
              누구에게 필요한 서비스일까요?
            </h2>
            <p className="about-landing-audience-sub">
              정책을 만드는 공공기관부터, 해외 진출을 준비하는 기업,<br />
              그리고 자료를 찾는 개인까지.
            </p>
            <button className="about-next-link" onClick={() => setTab("for-whom")}>
              자세히 보기 <span className="arrow">→</span>
            </button>
          </section>

          {/* 핵심 기능 — 스크롤 스토리텔링 (지나간 항목은 목록으로 접힘) */}
          <section className="about-landing-feature">
            <ScrollFeatureList items={WHY_TEASER} photos={FEATURE_PHOTOS} onMore={() => setTab("why")} />
          </section>

          {/* 이용 방법 — SK하이닉스 배너 참고, 버튼 호버 시 사진에 초록 틴트 */}
          <section className="about-landing-hero about-landing-hero--how">
            <img src={howBanner} className="about-landing-hero-img" alt="데이터를 분석하는 모습" />
            <div className="about-landing-hero-tint" />
            <div className="about-landing-hero-overlay">
              <h1 className="about-landing-hero-title">
                나라를 찾고, 비교하고, 추천받고,<br />
                지금 시작해보세요.
              </h1>
              <button className="about-landing-hero-btn" onClick={() => setTab("how")}>
                이용 방법 더보기 <span className="arrow">→</span>
              </button>
            </div>
          </section>
        </>
      ) : (
        <nav className="breadcrumb" aria-label="이동 경로">
          <button onClick={() => go && go("home")}>Home</button>
          <span className="breadcrumb-sep">›</span>
          <button onClick={() => setTab("landing")}>사이트 소개</button>
          <span className="breadcrumb-sep">›</span>
          <span className="breadcrumb-current">{TAB_LABEL[tab]}</span>
        </nav>
      )}

      {/* 탭별 내용 — 선택된 것만 표시 */}
      <div className="about-panel">
        {tab === "intro" && (
          <section className="about-fade">
            <div className="about-banner">
              <img src={introBanner} alt="함께 손을 모아 심는 나무" />
            </div>

            <section className="about-mission-split">
              <div className="about-mission-col">
                <p className="about-mission-eyebrow">OUR MISSION</p>
                <p className="about-mission-text">
                  가장 필요한 곳에,<br />
                  가장 알맞은 기술을.
                </p>
              </div>

              <div className="about-intro">
                {MISSION.map((para, i) => (
                  <p key={i} style={INDENT_TOP}>{para}</p>
                ))}
                <p className="about-signature">Team BAOBAB</p>
              </div>
            </section>

            {/* 왜 아프리카인가 — 왼쪽 타이틀 + 오른쪽 2x2 카드 */}
            <section className="about-why-africa-dark">
              <div className="awa-inner">
                <div className="about-mission-col">
                  <p className="about-mission-eyebrow">WHY AFRICA</p>
                  <p className="about-mission-text">
                    왜 지금,<br />
                    아프리카인가
                  </p>
                </div>
                <div className="awa-grid">
                  {WHY_AFRICA.map((s, i) => (
                    <div className="awa-card" key={i}>
                      <p className="awa-card-label">{s.title}</p>
                      <CountUpStat value={s.val} className="awa-num" />
                      <p className="awa-card-desc">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="eco-foot" style={{ marginTop: "20px" }}>
                출처: IEA 「Africa Energy Outlook 2022」 · IMF 「Finance & Development」(2023) · World Bank · 아프리카개발은행(AfDB, 2022)
              </p>
            </section>
          </section>
        )}

        {tab === "for-whom" && (
          <section className="about-fade">
            <div className="about-audience-grid">
              {AUDIENCE.map((a) => (
                <div className="about-audience-card" key={a.tag}>
                  <span className="block-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p style={INDENT}>{a.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "why" && (
          <section className="about-fade">
            <div className="about-why">
              {WHY_DETAIL.map((w) => (
                <div className="why-row" key={w.title}>
                  <h3>{w.title}</h3>
                  <p style={INDENT}>{w.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 이용 방법 — 작동 흐름 4단계(타임라인) */}
        {tab === "how" && (
          <section className="about-fade">
            <ol className="how-timeline">
              {STEPS.map((s) => (
                <li className="how-stage" key={s.step}>
                  <span className="how-stage-num">{s.step}</span>
                  <div className="how-stage-body">
                    <h3>{s.title}</h3>
                    <p>
                      {s.desc.split("\n").map((line, i) => (
                        <span key={i} style={{ display: "block" }}>{line}</span>
                      ))}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {tab === "faq" && (
          <section className="about-fade">
            <div className="about-faq">
              {FAQ.map((f, i) => (
                <div className="faq-item" key={i}>
                  <p className="faq-q">Q. {f.q}</p>
                  <p className="faq-a" style={INDENT}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}