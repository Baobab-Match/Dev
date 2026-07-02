import { useState } from "react";

const INDENT = { textIndent: "1em" };
const INDENT_TOP = { textIndent: "1em", marginTop: "1.2em" };

// 작동 방식 — 3단계 흐름 (실제 서비스 플로우 기준)
const STEPS = [
  { step: "01", title: "회원가입·로그인", desc: "간단한 정보 입력으로 시작하세요.\n이미 회원이라면 바로 로그인합니다." },
  { step: "02", title: "탐색 또는 추천 선택", desc: "직접 나라를 찾아봐도 좋고,\n추천을 받아도 좋습니다." },
  { step: "03", title: "국가 상세 확인", desc: "기후·경제·ODA까지,\n국가 상세 정보를 살펴봅니다." },
];

// 탭 메뉴 정의
const TABS = [
  { id: "intro",   label: "신념" },
  { id: "why",     label: "핵심 기능" },
  { id: "how",     label: "이용 방법" },
  { id: "contact", label: "연락처" },
];

// 신념(미션) 본문 문단
const MISSION = [
  "기후위기 대응은 한 나라만의 과제가 아닙니다. 바오밥매치는 물 부족, 가뭄, 재생에너지 등 다양한 분야에서 한국이 보유한 기술과, 이를 필요로 하는 아프리카 국가를 연결합니다. 외교부·KOICA의 공공데이터로 아프리카 54개국의 기후·경제·ODA·외교 지표를 분석하고, AI가 각 국가의 기후 특성에 맞는 녹색기술 수요를 예측해 가장 적합한 협력 대상을 추천합니다.",
  "우리는 단순한 기술 거래를 넘어, 지속가능한 동반 성장을 지향합니다. 기후 취약 국가의 적응 역량을 키우고 청정에너지로의 전환을 앞당기는 환경적 가치(E), 지역사회의 삶의 질과 일자리를 개선하는 사회적 가치(S), 그리고 공공데이터에 기반한 투명하고 설명 가능한 추천으로 신뢰를 쌓는 거버넌스(G)까지—ESG의 세 축을 매칭의 기준으로 삼습니다.",
  "기술은 국경을 넘을 때 비로소 가치를 발합니다. 한국이 수십 년간 축적한 물 관리, 재생에너지, 기후 적응 기술은 지금 이 순간에도 누군가에게 가장 절실한 해법이 될 수 있습니다. 바오밥매치는 그 기술이 가장 필요한 곳으로, 가장 정확하게 닿도록 데이터와 AI로 다리를 놓습니다.",
  "바오밥나무가 깊은 뿌리로 메마른 땅에서도 생명을 잇듯, 우리는 기술과 사람을, 그리고 오늘의 필요와 내일의 가능성을 연결합니다. 그 연결이 더 푸른 지구를 향한 작은 시작이 되기를 바랍니다.",
];

// 핵심 기능 — 카드 3개
const WHY = [
  { title: "흩어진 데이터를 한곳에", desc: "여기저기 흩어진 아프리카 54개국의 기후·경제·ODA 데이터를 한곳에 모아, 찾아 헤맬 필요 없이 한눈에 봅니다." },
  { title: "숫자로 한눈에 비교", desc: "기후 취약도부터 외교 친밀도까지, 복잡한 지표를 점수로 환산해 54개국을 같은 기준으로 비교합니다." },
  { title: "AI가 적합한 국가 추천", desc: "보유 기술이나 관심 분야만 입력하면, 협력하기 좋은 나라를 이유와 함께 추천받습니다." },
];

// 연락처
const CONTACT = [
  ["이메일", "contact@baobabmatch.kr"],
  ["전화", "02-000-0000"],
  ["주소", "서울특별시 강남구 "],
];

export function AboutPage() {
  const [tab, setTab] = useState("intro");

  return (
    <main className="page about-page">
      {/* 큰 제목 + 탭 메뉴 */}
      <div className="about-header">
        <h1 className="about-page-title">사이트 소개</h1>
        <nav className="about-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`about-tab ${tab === t.id ? "active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>

      {/* 탭별 내용 — 선택된 것만 표시 */}
      <div className="about-panel">
        {tab === "intro" && (
          <section className="about-fade">
            <section className="about-mission">
              <p className="about-mission-eyebrow">OUR MISSION</p>
              <p className="about-mission-text">
                가장 필요한 곳에,<br />
                가장 알맞은 기술을.
              </p>
            </section>

            <section className="about-intro">
              {MISSION.map((para, i) => (
                <p key={i} style={INDENT_TOP}>{para}</p>
              ))}
              <p className="about-signature">Team BAOBAB</p>
            </section>
          </section>
        )}

        {tab === "why" && (
          <section className="about-fade">
            <div className="about-why">
              {WHY.map((w) => (
                <div className="why-card" key={w.title}>
                  <h3>{w.title}</h3>
                  <p style={INDENT}>{w.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 이용 방법 — 작동 흐름 3단계(타임라인) */}
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

        {tab === "contact" && (
          <section className="about-fade">
            <div className="contact-box">
              {CONTACT.map(([k, val]) => (
                <div className="contact-row" key={k}><b>{k}</b><span>{val}</span></div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
