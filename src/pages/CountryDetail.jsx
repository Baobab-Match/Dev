import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { COUNTRIES } from "../data";
import { CountrySilhouette, Icons } from "../components/ui";
import CountryInfoPDF from "../components/CountryInfoPDF";
import CountryNews from "../components/CountryNews";

// PDF Document를 그 자리에서 새로 빌드해 blob으로 만들고 바로 다운로드.
// MatchResults.jsx의 downloadPdf와 동일한 방식 — 매 클릭마다 완전히 새로 렌더링해
// PDFDownloadLink의 캐싱 버그를 피한다.
async function downloadPdf(documentElement, fileName) {
  const blob = await pdf(documentElement).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

const EMPTY = "아직 정보가 없습니다";
const isNil = (v) => v === null || v === undefined;

// 인프라 지표별 아프리카 54개국 평균·최댓값 계산 (모듈 로드 시 1회만 계산)
// 최댓값은 막대그래프 폭(0~100%) 산출에, 평균은 비교 문구·평균선 표시에 쓴다.
const INFRA_FIELDS = [
  "hospitalBeds", "physicians", "nursesMidwives",
  "electricityAccess", "renewableEnergyShare", "cleanCookingAccess",
  "internetPenetration", "mobileSubscriptions",
  "basicWater", "basicSanitation", "renewableWaterPerCapita",
];
const AFRICA_INFRA_STATS = (() => {
  const vals = {};
  INFRA_FIELDS.forEach((f) => { vals[f] = []; });

  Object.values(COUNTRIES).forEach((c) => {
    const infra = c.infrastructure || {};
    INFRA_FIELDS.forEach((f) => {
      const raw = infra[f] && infra[f].value;
      const num = raw != null ? parseFloat(raw) : null;
      if (num != null && !isNaN(num)) vals[f].push(num);
    });
  });

  const stats = {};
  INFRA_FIELDS.forEach((f) => {
    const arr = vals[f];
    stats[f] = {
      avg: arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null,
      max: arr.length ? Math.max(...arr) : null,
    };
  });
  return stats;
})();
const AFRICA_INFRA_AVG = Object.fromEntries(Object.entries(AFRICA_INFRA_STATS).map(([k, v]) => [k, v.avg]));

// 인프라 값 vs 아프리카 평균 비교 문구 생성 (±5% 이내는 "평균 수준"으로 처리)
function infraCompareText(fieldKey, valueStr) {
  const avg = AFRICA_INFRA_AVG[fieldKey];
  const val = valueStr != null ? parseFloat(valueStr) : null;
  if (avg == null || val == null || isNaN(val)) return null;

  const diff = (val - avg) / avg;
  const avgLabel = `아프리카 평균 ${avg.toFixed(1)}`;
  if (Math.abs(diff) < 0.05) return `${avgLabel} · 평균 수준입니다`;
  return diff > 0 ? `${avgLabel} · 평균보다 높습니다` : `${avgLabel} · 평균보다 낮습니다`;
}

// 인프라 막대 폭(0~100%)과 평균선 위치 계산 — 54개국 중 최댓값을 100%로 두고 상대 비교
function infraBarStats(fieldKey, valueStr) {
  const { avg, max } = AFRICA_INFRA_STATS[fieldKey] || {};
  const val = valueStr != null ? parseFloat(valueStr) : null;
  if (max == null || val == null || isNaN(val)) return null;
  return {
    pct: Math.max(0, Math.min(100, (val / max) * 100)),
    avgPct: avg != null ? Math.max(0, Math.min(100, (avg / max) * 100)) : null,
  };
}

// climateScore/diplomacyScore 상대 순위 계산 (모듈 로드 시 1회만) — 점수 높은 국가가 1위
// 두 점수 모두 54개국 안에서의 상대 순위를 정규화한 값이라, 순위를 같이 보여주면
// "63점"이라는 절대 숫자보다 훨씬 직관적으로 위치를 파악할 수 있다.
function buildRankMap(scoreKey) {
  const entries = Object.values(COUNTRIES)
    .filter((c) => c[scoreKey] != null)
    .map((c) => ({ id: c.id, score: c[scoreKey] }))
    .sort((a, b) => b.score - a.score);
  const map = {};
  entries.forEach((e, i) => { map[e.id] = { rank: i + 1, total: entries.length }; });
  return map;
}
const CLIMATE_RANK = buildRankMap("climateScore");
const DIPLOMACY_RANK = buildRankMap("diplomacyScore");

// 국가 정보 요약 — 아래 세부 항목을 다 읽기 전에, 이미 계산해둔 순위·비교 데이터로 핵심만 먼저 전달
// 인프라 라벨 — 요약 문장에서 "아프리카 평균보다 부족한 항목"을 짚을 때 재사용
const INFRA_LABEL = {
  hospitalBeds: "병상 수", physicians: "의사 수", nursesMidwives: "간호사·조산사 수",
  electricityAccess: "전력 접근률", renewableEnergyShare: "재생에너지 발전 비중", cleanCookingAccess: "청정 취사연료 접근률",
  internetPenetration: "인터넷 이용률", mobileSubscriptions: "이동통신 가입자 수",
  basicWater: "식수 접근률", basicSanitation: "위생시설 접근률", renewableWaterPerCapita: "1인당 재생가능 담수자원량",
};

// 한글 단어의 마지막 글자 받침 유무에 따라 조사를 골라줌 (예: "의사 수" → 가, "접근률" → 이)
function josa(word, withBatchim, withoutBatchim) {
  const lastChar = (word || "").trim().slice(-1);
  const code = lastChar.charCodeAt(0);
  if (code < 0xac00 || code > 0xd7a3) return withoutBatchim; // 한글 음절이 아니면 기본값
  return (code - 0xac00) % 28 !== 0 ? withBatchim : withoutBatchim;
}

// 아프리카 평균보다 가장 많이 부족한 인프라 항목 하나를 찾음 (5% 이상 낮은 것 중 가장 큰 격차)
function biggestInfraGap(c) {
  let worst = null;
  INFRA_FIELDS.forEach((f) => {
    const raw = c.infrastructure && c.infrastructure[f] && c.infrastructure[f].value;
    const val = raw != null ? parseFloat(raw) : null;
    const avg = AFRICA_INFRA_STATS[f] && AFRICA_INFRA_STATS[f].avg;
    if (val == null || avg == null || isNaN(val)) return;
    const diff = (val - avg) / avg; // 음수 = 평균보다 낮음
    if (diff < -0.05 && (!worst || diff < worst.diff)) worst = { field: f, diff };
  });
  return worst;
}

// 국가에 인프라 데이터 자체가 있는지 (격차가 없는 것과 데이터가 아예 없는 것을 구분하기 위함)
function hasInfraData(c) {
  return INFRA_FIELDS.some((f) => c.infrastructure && c.infrastructure[f] && c.infrastructure[f].value != null);
}

function buildSummary(c) {
  const sentences = [];

  const climateRank = CLIMATE_RANK[c.id];
  const diploRank = DIPLOMACY_RANK[c.id];

  // 1. 기후 취약도 + World Bank 전망을 진짜 한 문장으로 연결 ("-며"로 이어서 마침표가 중간에 끊기지 않게)
  if (c.climateScore != null && climateRank) {
    const level = climateRank.rank <= climateRank.total * 0.3 ? "기후 위험이 큰 편"
      : climateRank.rank <= climateRank.total * 0.6 ? "중간 수준"
      : "비교적 안정적인 편";
    const lead = `${c.name}${josa(c.name, "은", "는")} 기후 변화에 취약한 정도가 54개국 중 ${climateRank.rank}위(${c.climateScore}점)로 ${level}에 속`;
    if (c.climateReason) {
      sentences.push(`${lead}하며, World Bank 기후 전망에 따르면 ${c.climateReason}`);
    } else if (c.mainClimateIssue) {
      sentences.push(`${lead}하며, 가장 두드러진 기후 문제는 ${c.mainClimateIssue}입니다.`);
    } else {
      sentences.push(`${lead}합니다.`);
    }
  }

  // 2. 외교 친밀도 — "한편"으로 앞 문장과 자연스럽게 연결
  if (c.diplomacyScore != null && diploRank) {
    const tier = diploRank.rank <= diploRank.total * 0.3 ? "높은 편" : diploRank.rank <= diploRank.total * 0.6 ? "중간 수준" : "낮은 편";
    const implication = diploRank.rank <= diploRank.total * 0.3
      ? "정부 간 협력 채널이 비교적 잘 갖춰져 있는 편입니다"
      : diploRank.rank <= diploRank.total * 0.6
      ? "협력을 시작하기에 무난한 여건입니다"
      : "협력 관계를 새로 다져나가야 하는 단계일 수 있습니다";
    sentences.push(`한편 외교 친밀도는 54개국 중 ${diploRank.rank}위(${c.diplomacyScore}점)로 ${tier}이며, ${implication}.`);
  }

  // 3. 협력 이력 — KOICA 누적 지원액이 있으면 가장 구체적으로, 없으면 중점협력국·ODA 이력 여부로,
  //    그마저 없으면 "아직 이력이 없다"는 것도 하나의 정보로 명시 (문장이 통째로 사라지지 않게)
  const track = [];
  if (c.priorityPartner) track.push("KOICA 중점협력국");
  if (c.koreaOdaHistory) track.push("한국 ODA 지원 이력");
  if (c.koicaCumulative && c.koicaCumulative.total) {
    sentences.push(`KOICA는 ${c.koicaCumulative.startYear}년 이후 이 나라에 누적 ${c.koicaCumulative.total}을 지원해 왔습니다.`);
  } else if (track.length) {
    sentences.push(`${track.join(" · ")}이 있어, 실무 차원의 협력 경험과 신뢰 기반이 이미 어느 정도 마련되어 있는 국가입니다.`);
  } else {
    sentences.push("다만 아직 한국과의 공식적인 협력 이력은 확인되지 않아, 앞으로 새롭게 관계를 쌓아나갈 수 있는 국가입니다.");
  }

  // 4. 인프라 — 눈에 띄는 격차가 있으면 구체적으로, 데이터는 있는데 격차가 없으면 "평균 수준"이라는 것도 정보로 제공
  const gap = biggestInfraGap(c);
  if (gap) {
    sentences.push(`인프라 면에서는 ${INFRA_LABEL[gap.field]}${josa(INFRA_LABEL[gap.field], "이", "가")} 아프리카 평균보다 낮은 수준으로, 이 분야에서 한국이 실질적으로 기여할 수 있는 협력 여지가 있는 것으로 보입니다.`);
  } else if (hasInfraData(c)) {
    sentences.push("인프라 지표는 아프리카 평균과 비슷한 수준으로 확인됩니다.");
  }

  return sentences.join(" ") || null;
}

// 상세 페이지 전용 — 히어로 스탯 한 칸
// rankHint: "1위=가장 취약"처럼 순위 방향을 직접 명시하는 문구.
// "순위가 낮을수록/높을수록"은 사람마다 반대로 해석하기 쉬워 일부러 쓰지 않음.
function StatItem({ value, label, suffix, yes, rank, rankHint }) {
  return (
    <div className="stat">
      <div className={"stat-val" + (yes ? " yes" : "")}>
        {isNil(value) ? "—" : value}
        {suffix && !isNil(value) && <small>{suffix}</small>}
      </div>
      <div className="stat-label">{label}</div>
      {rank && (
        <div className="stat-rank">
          {rank.total}개국 중 {rank.rank}위
          {rankHint && <span className="stat-rank-hint"> ({rankHint})</span>}
        </div>
      )}
    </div>
  );
}

// 보건 세부 지원 현황·KOICA 분야별 도넛은 정보량이 많아 PDF 보고서 전용으로 옮기고
// 웹 페이지에서는 더 이상 렌더링하지 않는다 (관련 헬퍼는 CountryInfoPDF.jsx에 독립적으로 존재).

// 표시단계 KRW 정규화: 상위 2개 단위까지만 (예: "약 2,143억 3,500만 원" → "약 2,143억 원")
function tidyKrw(krw) {
  if (!krw) return krw;
  if (/약?\s*0\s*원/.test(krw)) return krw; // 0원/소액은 그대로

  const units = ["조", "억", "만"];
  const parts = [];
  for (const u of units) {
    const m = krw.match(new RegExp(`([\\d,]+)\\s*${u}`));
    if (m) parts.push({ n: m[1], u });
  }
  if (parts.length === 0) return krw; // "원" 단위만 있는 소액은 원본 유지

  const prefix = krw.trim().startsWith("약") ? "약 " : "";
  const top = parts[0];
  const second = parts[1];
  let out = `${top.n}${top.u}`;
  if (second && second.n.replace(/,/g, "") !== "0") {
    out += ` ${second.n}${second.u}`;
  }
  return `${prefix}${out} 원`;
}

// 표시단계 USD 정규화: "백만 USD"·raw 숫자를 한국식으로 (조/억/만 USD)
function tidyUsd(usd) {
  if (!usd) return usd;
  const prefix = usd.trim().startsWith("약") ? "약 " : "";

  // 1) "1,158백만 USD" 형태
  const mMillion = usd.match(/([\d,.]+)\s*백만\s*USD/);
  if (mMillion) {
    const million = parseFloat(mMillion[1].replace(/,/g, ""));
    return fmtUsdEok(million / 100, prefix); // 백만 → 억 환산
  }

  // 2) raw 숫자 "12,650,000,000 USD" 형태
  const mRaw = usd.match(/([\d,]+)\s*USD/);
  if (mRaw && /,\d{3}/.test(mRaw[1])) {
    const dollars = parseFloat(mRaw[1].replace(/,/g, ""));
    if (!isNaN(dollars) && dollars >= 10000) {
      return fmtUsdEok(dollars / 1e8, prefix); // 달러 → 억 환산
    }
  }

  return usd; // 이미 "억 USD" 등은 그대로
}

// 억 단위 USD 포맷 (1억↑ 억, 미만 만)
function fmtUsdEok(eok, prefix) {
  if (eok === 0) return `${prefix}0 USD`;
  if (eok >= 1) {
    const num = eok >= 10 ? Math.round(eok) : Math.round(eok * 10) / 10;
    return `${prefix}${num.toLocaleString()}억 USD`;
  }
  const man = Math.round(eok * 10000);
  return `${prefix}${man.toLocaleString()}만 USD`;
}

// 경제/ODA 항목 한 줄 — v: { usd, krw, year?, source?, isNet? }, defaultSource: 데이터에 source가 없을 때 쓸 기본 출처
function EcoItem({ label, v, defaultSource }) {
  if (!v) return (
    <div className="eco-item">
      <div className="eco-label">{label}</div>
      <div className="eco-empty">{EMPTY}</div>
    </div>
  );

  // 출처: 데이터 source 우선, 없으면 항목별 기본 출처(defaultSource) 사용
  const source = v.source || defaultSource || null;
  // 출처/연도 인라인: "(2019 · KOICA 통합개발지표)" / "(2019)" / "(KOICA)"
  const src = v.year && source ? `(${v.year} · ${source})` : v.year ? `(${v.year})` : source ? `(${source})` : null;

  const krw = tidyKrw(v.krw);
  const usd = tidyUsd(v.usd);

  return (
    <div className="eco-item">
      <div className="eco-label">
        {label}
        {v.isNet && <span className="eco-mark" title="순(net) 기준">*</span>}
        {src && <span className="eco-src">{src}</span>}
      </div>
      {v.usd || v.krw ? (
        <div className="eco-val">
          <span className="krw-main">{krw || "—"}</span>
          {v.usd && <span className="usd-sub">{usd}</span>}
        </div>
      ) : (
        <div className="eco-empty">{EMPTY}</div>
      )}
    </div>
  );
}

// 인프라 항목 한 줄 — v: { value, unit, year?, source? }, compare: 아프리카 평균 비교 문구
// 홈페이지 주소에 프로토콜이 빠진 경우(www.xxx.com, xxx.com 등) https:// 붙여서 링크가 실제로 동작하게 함
function normalizeUrl(url) {
  if (!url) return null;
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// 진출 기업 카드 — 개인 연락처(대표자명·이메일·전화번호·상세주소)는 담지 않고
// 공개된 기업 정보(업종·소재지·재무 수치·홈페이지·소개)만 표시
function CompanyCard({ c }) {
  return (
    <div className="market-card">
      <div className="market-card-head">
        <div>
          <div className="market-card-name">{c.nameKo || c.nameEn || "—"}</div>
          {c.nameEn && c.nameKo && <div className="market-card-name-en">{c.nameEn}</div>}
        </div>
        {c.website && (
          <a className="market-card-link" href={normalizeUrl(c.website)} target="_blank" rel="noreferrer">홈페이지 ↗</a>
        )}
      </div>
      <div className="market-card-meta">
        {[c.industry, c.subIndustry].filter(Boolean).join(" · ")}
        {(c.hq || c.foundedYear) && ` | ${[c.hq, c.foundedYear && `${c.foundedYear}년 설립`].filter(Boolean).join(" · ")}`}
      </div>
      {(c.marketCap || c.netProfit || c.employees) && (
        <div className="market-card-stats">
          {c.marketCap && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">시가총액{c.marketCap.year ? ` (${c.marketCap.year})` : ""}</div>
              <div className="market-card-stat-val">{c.marketCap.krw}</div>
            </div>
          )}
          {c.netProfit && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">순이익{c.netProfit.year ? ` (${c.netProfit.year})` : ""}</div>
              <div className="market-card-stat-val">{c.netProfit.krw}</div>
            </div>
          )}
          {c.employees && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">직원 수</div>
              <div className="market-card-stat-val">{c.employees}명</div>
            </div>
          )}
        </div>
      )}
      {c.highlights && c.highlights.length > 0 && <div className="market-card-desc">{c.highlights[0]}</div>}
    </div>
  );
}

// 진출 스타트업 카드
function StartupCard({ s }) {
  return (
    <div className="market-card">
      <div className="market-card-head">
        <div className="market-card-name">{s.nameKo || "—"}</div>
        {s.website && (
          <a className="market-card-link" href={normalizeUrl(s.website)} target="_blank" rel="noreferrer">홈페이지 ↗</a>
        )}
      </div>
      <div className="market-card-meta">
        {s.field}
        {(s.hq || s.foundedYear) && ` | ${[s.hq, s.foundedYear && `${s.foundedYear}년 창업`].filter(Boolean).join(" · ")}`}
      </div>
      {(s.funding || s.fundingStage || s.employees) && (
        <div className="market-card-stats">
          {s.funding && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">투자유치액</div>
              <div className="market-card-stat-val">{s.funding.krw}</div>
            </div>
          )}
          {s.fundingStage && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">투자 단계</div>
              <div className="market-card-stat-val">{s.fundingStage}</div>
            </div>
          )}
          {s.employees && (
            <div className="market-card-stat">
              <div className="market-card-stat-label">직원 수</div>
              <div className="market-card-stat-val">{s.employees}</div>
            </div>
          )}
        </div>
      )}
      {s.topInvestor && <div className="market-card-desc">최대 투자자: {s.topInvestor}</div>}
    </div>
  );
}

function InfraItem({ label, v, compare, fieldKey }) {
  if (!v) return (
    <div className="eco-item">
      <div className="eco-label">{label}</div>
      <div className="eco-empty">{EMPTY}</div>
    </div>
  );

  const src = v.year && v.source ? `(${v.year} · ${v.source})` : v.year ? `(${v.year})` : v.source ? `(${v.source})` : null;
  // %는 붙여서, 그 외 단위(병상 / 1,000명 등)는 띄어서 값과 한 줄에 표시
  const valueLine = v.value ? (v.unit === "%" ? `${v.value}%` : `${v.value}${v.unit ? ` ${v.unit}` : ""}`) : null;
  const bar = fieldKey && v.value ? infraBarStats(fieldKey, v.value) : null;

  return (
    <div className={"eco-item" + (bar ? " eco-item--bar" : "")}>
      <div className="eco-item-top">
        <div className="eco-label">
          {label}
          {src && <span className="eco-src">{src}</span>}
        </div>
        {valueLine ? (
          <div className="eco-val">
            <span className="krw-main">{valueLine}</span>
            {compare && <span className="usd-sub">{compare}</span>}
          </div>
        ) : (
          <div className="eco-empty">{EMPTY}</div>
        )}
      </div>
      {bar && (
        <div className="eco-bar" title="아프리카 54개국 중 최댓값 대비 상대 규모 · 주황선 = 평균">
          <span className="eco-bar-fill" style={{ width: `${bar.pct}%` }} />
          {bar.avgPct != null && <span className="eco-bar-avg" style={{ left: `${bar.avgPct}%` }} />}
        </div>
      )}
    </div>
  );
}

export default function CountryDetail({ id, go, from = "search", isFavorite, toggleFavorite }) {
  // Hooks 규칙상 아래 "c 없으면 return null"보다 먼저 호출되어야 함
  const [pdfLoading, setPdfLoading] = useState(false);
  const [companyFilter, setCompanyFilter] = useState(null);
  const [companyExpanded, setCompanyExpanded] = useState(false);
  const [startupFilter, setStartupFilter] = useState(null);
  const [startupExpanded, setStartupExpanded] = useState(false);

  const c = COUNTRIES[id];
  if (!c) return null;

  const fav = isFavorite ? isFavorite(id) : false;
  const eco = c.economy || {};
  const infra = c.infrastructure || {};

  // 경제 항목 목록 (라벨 ↔ 데이터 ↔ 기본 출처)
  // GDP는 데이터에 source(IMF) 포함 / ODA 4종은 출처 미포함이라 KOICA 통합개발지표를 기본값으로 보충
  const ODA_SRC = "KOICA 통합개발지표";
  const ecoRows = [
    ["1인당 국내총생산 (GDP)", eco.gdpPerCapita],
    ["국내총생산 총액 (GDP)", eco.gdpTotal],
    ["공적개발원조(ODA) 순 수원액", eco.odaNetReceived, ODA_SRC],
    ["수원국 ODA 규모", eco.recipientOda, ODA_SRC],
    ["양자 지원 규모", eco.bilateral, ODA_SRC],
    ["한국 ODA 규모", eco.koreaOda, ODA_SRC],
  ];
  const hasNet = ecoRows.some(([, v]) => v && v.isNet);

  // 인프라 항목 목록 — 경제/ODA와 성격이 달라 별도 블록으로 분리, 12개로 늘어나 4개 카테고리로 서브그룹화
  // (교통 2종(포장도로·철도)은 결측이 많아 이번엔 화면에서 제외 — 데이터 자체는 infrastructure에 그대로 있음)
  const infraGroups = [
    { label: "보건", rows: [
      ["병상 수", infra.hospitalBeds, "hospitalBeds"],
      ["의사 수", infra.physicians, "physicians"],
      ["간호사·조산사 수", infra.nursesMidwives, "nursesMidwives"],
    ] },
    { label: "전력·에너지", rows: [
      ["전력 접근률", infra.electricityAccess, "electricityAccess"],
      ["재생에너지 발전 비중", infra.renewableEnergyShare, "renewableEnergyShare"],
      ["청정 취사연료 접근률", infra.cleanCookingAccess, "cleanCookingAccess"],
    ] },
    { label: "통신·디지털", rows: [
      ["인터넷 이용률", infra.internetPenetration, "internetPenetration"],
      ["이동통신 가입자 수", infra.mobileSubscriptions, "mobileSubscriptions"],
    ] },
    { label: "수자원·위생", rows: [
      ["식수 접근률", infra.basicWater, "basicWater"],
      ["위생시설 접근률", infra.basicSanitation, "basicSanitation"],
      ["1인당 재생가능 담수자원량", infra.renewableWaterPerCapita, "renewableWaterPerCapita"],
    ] },
  ];

  // 히어로 스탯 (5칸) — 기후 취약도·외교 친밀도는 54개국 내 상대 순위도 함께 표시
  // rankHint로 순위 방향(1위가 좋은 건지 나쁜 건지)을 바로 그 자리에서 명시
  const stats = [
    { value: c.climateScore, suffix: "/100", label: "기후 취약도", rank: CLIMATE_RANK[c.id], rankHint: "1위=가장 취약" },
    { value: c.mainClimateIssue, label: "주요 기후문제" },
    { value: c.priorityPartner ? "Yes" : "No", label: "중점협력국", yes: c.priorityPartner },
    { value: c.koreaOdaHistory ? "Yes" : "No", label: "한국 ODA 이력", yes: c.koreaOdaHistory },
    { value: c.diplomacyScore, suffix: "/100", label: "외교 친밀도", rank: DIPLOMACY_RANK[c.id], rankHint: "1위=가장 친밀" },
  ];

  // 시장 진입 용이도(marketEntry) — 한아프리카재단 250대기업·스타트업 디렉터리 집계 (23/54개국만 존재)
  const me = c.marketEntry || null;
  const hasMarketEntry = !!(me && (me.companyCount > 0 || me.startupCount > 0));

  // 진출 기업/스타트업 — 업종·분야 필터링 후, 접힌 상태면 6개까지만 노출
  const MARKET_VISIBLE = 6;
  const filteredCompanies = me?.companies
    ? (companyFilter ? me.companies.filter((comp) => comp.industry === companyFilter) : me.companies)
    : [];
  const visibleCompanies = companyExpanded ? filteredCompanies : filteredCompanies.slice(0, MARKET_VISIBLE);

  const filteredStartups = me?.startups
    ? (startupFilter ? me.startups.filter((s) => s.field === startupFilter) : me.startups)
    : [];
  const visibleStartups = startupExpanded ? filteredStartups : filteredStartups.slice(0, MARKET_VISIBLE);

  const backLabel = from === "match" ? "추천 결과로" : from === "mypage" ? "내 정보로" : "국가 목록으로";
  const summary = buildSummary(c);

  async function handleDownloadPdf() {
    if (pdfLoading) return;
    setPdfLoading(true);
    try {
      await downloadPdf(
        <CountryInfoPDF country={c} countries={COUNTRIES} summary={summary} />,
        `바오밥매치_${c.name}_국가정보.pdf`
      );
    } catch (err) {
      console.error("국가 상세 정보 PDF 생성 실패:", err);
    } finally {
      setPdfLoading(false);
    }
  }

  return (
    <main className="page">
      <button className="back-btn" onClick={() => go(from, from === "match")}>
        <span className="back-arrow" aria-hidden="true">←</span> {backLabel}
      </button>

      <div className="detail-hero">
        <CountrySilhouette id={id} className="detail-silhouette" />
        <div>
          <h1 className="detail-name">
            {c.name} <span>{c.nameEn} {c.flag}</span>
            {toggleFavorite && (
              <button
                className={"detail-fav" + (fav ? " active" : "")}
                onClick={() => toggleFavorite(id)}
                aria-label={fav ? "즐겨찾기 해제" : "즐겨찾기 추가"}
              >
                <Icons.star filled={fav} /> {fav ? "즐겨찾기됨" : "즐겨찾기"}
              </button>
            )}
            <button
              className="detail-fav"
              onClick={handleDownloadPdf}
              disabled={pdfLoading}
              aria-label="국가 정보 PDF 보고서 다운받기"
            >
              {pdfLoading ? "보고서 준비 중…" : "국가 정보 PDF 보고서 다운받기"}
            </button>
          </h1>
          <div className="stat-strip">
            {stats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>

        {/* 국가 정보 요약 — 히어로 구분선(border-bottom) 위, 실루엣 밑까지 가로로 꽉 차게 (그리드 두 칸 모두 걸침) */}
        {summary && (
          <div className="summary-card">
            <div className="summary-tag">국가 정보 요약</div>
            <p style={{ textIndent: "1em" }}>{summary}</p>
          </div>
        )}
      </div>

      <div className="detail-grid">
        <div>
          {/* 1. 인프라 정보 — 협력 여지를 가장 직접적으로 보여주는 지표라 먼저 배치. 12개로 늘어나 2×2 그리드로 배치 */}
          <div className="info-block">
            <div className="block-tag">인프라 현황</div>
            <div className="info-subgroups-grid">
              {infraGroups.map((g) => (
                <div className="info-subgroup" key={g.label}>
                  <div className="info-subhead">{g.label}</div>
                  {g.rows.map(([label, v, fieldKey]) => (
                    <InfraItem
                      key={label}
                      label={label}
                      v={v}
                      fieldKey={fieldKey}
                      compare={v ? infraCompareText(fieldKey, v.value) : null}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="eco-foot"><div>※ 막대의 주황선은 아프리카 54개국 평균 위치입니다.</div></div>
          </div>
        </div>

        <div>
          {/* 2. 경제 및 ODA 규모 정보 — "이 나라에 필요한 것". 인프라 블록과 나란히 2열 그리드로 배치 */}
          <div className="info-block">
            <div className="block-tag">경제 및 ODA 규모</div>
            <div className="eco-items-grid">
              {ecoRows.map(([label, v, defaultSource]) => <EcoItem key={label} label={label} v={v} defaultSource={defaultSource} />)}
            </div>

            <div className="eco-foot">
              {hasNet && <div>※ 상환액이 신규 원조를 초과해 음수로 표시될 수 있습니다.</div>}
              <div>※ 금액은 소수점 반올림 처리된 값입니다.</div>
            </div>
          </div>
        </div>
      </div>

      {/* 기초 국가 정보(수도·인구·언어)는 국가명 아래 한 줄로, KOICA 지원 규모(누적·분야별 도넛)와
          보건 세부 지원 현황은 세부 데이터라 웹 화면에서는 생략했습니다 — 스탯 카드의
          "한국 ODA 이력"·"중점협력국" Yes/No와 요약 카드 문장으로 핵심은 이미 전달되고,
          전체 내용은 위 "PDF 보고서 다운받기"로 받는 상세 리포트에 그대로 담겨 있습니다. */}

      {/* 3. 진출 현황 — 한아프리카재단 250대기업·스타트업 디렉터리 집계 (데이터 없는 국가는 블록 숨김) */}
      {hasMarketEntry && (
        <div className="info-block info-block--wide">
          <div className="block-tag">
            진출 현황
            <span className="block-tag-field"> · 한아프리카재단 250대기업·스타트업 디렉터리</span>
          </div>

          {me.companyCount > 0 && (
            <div className="market-entry-group">
              <div className="market-entry-label">진출 기업 {me.companyCount}개</div>
              <p className="market-filter-hint">업종을 누르면 해당 기업만 모아볼 수 있어요.</p>
              <div className="market-tag-row">
                {me.industries.map((ind) => (
                  <button
                    type="button"
                    key={ind.name}
                    className={"market-tag market-tag--btn" + (companyFilter === ind.name ? " active" : "")}
                    onClick={() => setCompanyFilter((prev) => (prev === ind.name ? null : ind.name))}
                  >
                    {ind.name} <b>{ind.count}</b>
                  </button>
                ))}
              </div>
              {visibleCompanies.length > 0 && (
                <>
                  <div className="market-card-grid">
                    {visibleCompanies.map((comp, i) => <CompanyCard key={comp.nameKo || i} c={comp} />)}
                  </div>
                  {filteredCompanies.length > MARKET_VISIBLE && (
                    <button type="button" className="market-more-btn" onClick={() => setCompanyExpanded((e) => !e)}>
                      {companyExpanded ? "접기" : `전체 ${filteredCompanies.length}개 더보기`}
                    </button>
                  )}
                </>
              )}
            </div>
          )}

          {me.startupCount > 0 && (
            <div className="market-entry-group" style={{ marginTop: me.companyCount > 0 ? 18 : 0 }}>
              <div className="market-entry-label">스타트업 {me.startupCount}개</div>
              <p className="market-filter-hint">분야를 누르면 해당 분야의 스타트업만 모아볼 수 있어요.</p>
              <div className="market-tag-row">
                {me.startupFields.map((f) => (
                  <button
                    type="button"
                    key={f.name}
                    className={"market-tag market-tag--btn" + (startupFilter === f.name ? " active" : "")}
                    onClick={() => setStartupFilter((prev) => (prev === f.name ? null : f.name))}
                  >
                    {f.name} <b>{f.count}</b>
                  </button>
                ))}
              </div>
              {visibleStartups.length > 0 && (
                <>
                  <div className="market-card-grid">
                    {visibleStartups.map((s, i) => <StartupCard key={s.nameKo || i} s={s} />)}
                  </div>
                  {filteredStartups.length > MARKET_VISIBLE && (
                    <button type="button" className="market-more-btn" onClick={() => setStartupExpanded((e) => !e)}>
                      {startupExpanded ? "접기" : `전체 ${filteredStartups.length}개 더보기`}
                    </button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. 실제 협력 창구 — 재외공관(현지 한국 대사관)은 54개국 전체 존재,
          주한공관(서울)은 19/54개국만 존재 → 없으면 그 칸만 자동으로 숨김 */}
      {c.diplomaticContact && (
        <div className="info-block info-block--wide">
          <div className="block-tag">
            협력 문의처
            <span className="block-tag-field"> · 대사관 및 공관 연락처</span>
          </div>
          <div className="diplo-grid">
            {/* 현지 대한민국 대사관 — 항상 존재 */}
            <div className="diplo-col">
              <div className="diplo-col-label">현지 대한민국 대사관</div>
              <div className="diplo-name">{c.diplomaticContact.overseas.missionName}</div>
              <div className="diplo-detail">
                {c.diplomaticContact.overseas.address}<br />
                {c.diplomaticContact.overseas.phone}
              </div>
              {c.diplomaticContact.overseas.website && (
                <a
                  className="diplo-link"
                  href={c.diplomaticContact.overseas.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  대사관 홈페이지 바로가기
                </a>
              )}
            </div>

            {/* 주한 대사관(서울) — 있는 국가만 렌더링 */}
            {c.diplomaticContact.domestic && (
              <div className="diplo-col">
                <div className="diplo-col-label">주한 {c.name} 대사관 (서울)</div>
                <div className="diplo-name">{c.diplomaticContact.domestic.ambassador}</div>
                <div className="diplo-detail">
                  {c.diplomaticContact.domestic.address}<br />
                  {c.diplomaticContact.domestic.phone}<br />
                  {c.diplomaticContact.domestic.email}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 5. 이 나라의 현재 상황 — 정치·경제·환경·기업 뉴스. 특히 정세가 불안정하거나
          최근 이슈를 파악하기 어려운 국가일수록 참고할 수 있도록, 국가 상세 페이지에 상시 노출 */}
      <CountryNews countryNameEn={c.nameEn} countryNameKo={c.name} />

      {/* 데이터 출처 안내 — 전 국가 공통 (각주형) */}
      <p className="source-footnote">
        <span className="source-footnote-mark">출처</span>
        인구·언어·수도 외교부 「국가(지역)별 일반현황」(2025.12 갱신) · GDP·1인당 GDP 외교부 「국가(지역)별 경제현황」(2025.09 갱신) · ODA 규모(순수원액·수원국·양자·한국) KOICA 「협력국 통합개발지표」(2025.07 갱신) · KOICA 분야별·누적 지원 KOICA 「국가별 지원실적」(2025.11 갱신) · 보건 세부 지원 현황 KOICA 「ODA 실적보고 로데이터」(2025.11 갱신) · 인프라 지표 11종(병상 수·의사 수·간호사·조산사 수·전력 접근률·재생에너지 발전 비중·청정 취사연료 접근률·인터넷 이용률·이동통신 가입자 수·식수 접근률·위생시설 접근률·1인당 재생가능 담수자원량) World Bank Open Data · 재외공관·주한공관 연락처 외교부 「국가·지역별 재외공관 정보」·「재외공관 홈페이지 관련 정보」·「주한공관정보」. 모든 데이터는 공공데이터포털(data.go.kr) 또는 World Bank 공개 자료이며, 갱신일은 각 포털 기준입니다. 데이터 기준연도는 각 항목에 별도 표기되어 있습니다.
      </p>
      <p className="source-footnote" style={{ marginTop: 10 }}>
        <span className="source-footnote-mark">산정기준</span>
        기후 취약도는 World Bank 기후 API(SSP3-7.0 시나리오, 2040~2059년 전망)의 기온 상승폭(40%)·강수 변화율(30%)·극한강수 지표(30%)를 가중합해 30~100점으로 환산한 값입니다. 외교 친밀도는 외교부 기관 진출현황(40%)·외교관계(30%)·무역관계(30%)를 가중합하고, KOICA 중점협력국은 +20점을 가산한 값입니다. 두 점수 모두 아프리카 54개국 안에서의 상대 순위를 정규화한 값으로, 절대적인 수준이 아니라 이 54개국 사이에서의 상대적 위치를 나타냅니다. 인프라 지표의 평균 비교는 데이터가 확인된 아프리카 국가들의 산술 평균 대비 ±5% 이내를 "평균 수준"으로 판정한 값입니다.
      </p>
    </main>
  );
}