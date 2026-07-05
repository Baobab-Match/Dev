import { useState, useEffect } from "react";
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
const TABS = [
  { id: "intro", label: "신념" },
  { id: "why",   label: "핵심 기능" },
  { id: "how",   label: "이용 방법" },
];
const TAB_LABEL = Object.fromEntries(TABS.map((t) => [t.id, t.label]));

// 신념(미션) 본문 문단
const MISSION = [
  "기후위기 대응은 한 나라만의 과제가 아닙니다. 바오밥매치는 물 부족, 가뭄, 재생에너지 등 다양한 분야에서 한국이 보유한 기술과, 이를 필요로 하는 아프리카 국가를 연결합니다. 외교부·KOICA의 공공데이터로 아프리카 54개국의 기후·경제·ODA·외교 지표를 분석하고, AI가 각 국가의 기후 특성에 맞는 녹색기술 수요를 분석해 가장 적합한 협력 대상을 추천합니다.",
  "우리는 단순한 기술 거래를 넘어, 지속가능한 동반 성장을 지향합니다. 기후 취약 국가의 적응 역량을 키우고 청정에너지로의 전환을 앞당기는 환경적 가치(E), 지역사회의 삶의 질과 일자리를 개선하는 사회적 가치(S), 그리고 공공데이터에 기반한 투명하고 설명 가능한 추천으로 신뢰를 쌓는 거버넌스(G)까지—ESG의 세 축을 매칭의 기준으로 삼습니다.",
  "기술은 국경을 넘을 때 비로소 가치를 발합니다. 한국이 수십 년간 축적한 물 관리, 재생에너지, 기후 적응 기술은 지금 이 순간에도 누군가에게 가장 절실한 해법이 될 수 있습니다. 바오밥매치는 그 기술이 가장 필요한 곳으로, 가장 정확하게 닿도록 데이터와 AI로 다리를 놓습니다.",
  "바오밥나무가 깊은 뿌리로 메마른 땅에서도 생명을 잇듯, 우리는 기술과 사람을, 그리고 오늘의 필요와 내일의 가능성을 연결합니다. 그 연결이 더 푸른 지구를 향한 작은 시작이 되기를 바랍니다.",
];

// 핵심 기능 — 사진 없이 아이콘 + 텍스트로만 구성
const WHY = [
  { title: "흩어진 데이터를 한곳에", desc: "여기저기 흩어진 아프리카 54개국의 기후·경제·ODA 데이터를 한곳에 모아, 찾아 헤맬 필요 없이 한눈에 확인합니다. 외교부·KOICA 등 공공기관의 데이터를 직접 가공해, 비교하기 어려웠던 정보를 하나의 기준으로 정리했습니다." },
  { title: "숫자로 한눈에 비교", desc: "기후 취약도부터 외교 친밀도까지, 복잡한 지표를 점수로 환산해 54개국을 같은 기준으로 비교합니다. 국가 간 차이를 수치로 확인하고, 관심 있는 나라들을 나란히 놓고 살펴볼 수 있습니다." },
  { title: "AI가 적합한 국가 추천", desc: "보유 기술이나 관심 분야만 입력하면, 협력하기 좋은 나라를 이유와 함께 추천받습니다. 단순히 순위만 보여주는 것이 아니라, 왜 그 국가가 적합한지 근거를 문장으로 풀어줘서 판단하기 쉬워집니다." },
  { title: "한 번에 정리되는 보고서", desc: "매칭 순위와 국가별 추천 근거를 PDF 보고서로 정리해, 다운로드하고 필요한 곳에 바로 공유할 수 있습니다. 협력 제안 자료로 그대로 활용할 수 있도록, 별도 편집 없이도 바로 쓸 수 있는 형태로 만들어 드립니다." },
];

const FEATURE_PHOTOS = [aboutFeature1, aboutFeature2, aboutFeature3, aboutFeature4];

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
                데이터가 만드는<br />
                새로운 협력의 시작.
              </h1>
              <button className="about-landing-hero-btn" onClick={() => setTab("intro")}>
                신념 더보기 <span className="arrow">→</span>
              </button>
            </div>
          </section>

          {/* 핵심 기능 — 사진 4장, 세로 1장씩 좌우 지그재그 배치 */}
          <section className="about-landing-feature">
            <div className="about-landing-feature-list">
              {WHY.map((w, i) => (
                <div className={`about-landing-feature-item${i % 2 === 1 ? " reverse" : ""}`} key={w.title}>
                  <div className="about-landing-feature-photo">
                    <img src={FEATURE_PHOTOS[i]} alt={w.title} />
                  </div>
                  <div className="about-landing-feature-text">
                    <p className="about-landing-feature-num">{String(i + 1).padStart(2, "0")}</p>
                    <p className="about-landing-feature-cap">{w.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-landing-feature-btn-row">
              <button className="about-next-link" onClick={() => setTab("why")}>
                핵심 기능 더보기 <span className="arrow">→</span>
              </button>
            </div>
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
          </section>
        )}

        {tab === "why" && (
          <section className="about-fade">
            <div className="about-why">
              {WHY.map((w) => (
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
      </div>
    </main>
  );
}