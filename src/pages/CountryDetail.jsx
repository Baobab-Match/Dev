import { COUNTRIES } from "../data";
import { CountrySilhouette, DonutChart, DONUT_COLORS, Icons } from "../components/ui";

const EMPTY = "아직 정보가 없습니다";
const isNil = (v) => v === null || v === undefined;

// 인프라 지표별 아프리카 54개국 평균·최댓값 계산 (모듈 로드 시 1회만 계산)
// 최댓값은 막대그래프 폭(0~100%) 산출에, 평균은 비교 문구·평균선 표시에 쓴다.
const INFRA_FIELDS = ["hospitalBeds", "physicians", "electricityAccess", "internetPenetration"];
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

// 보건 세부 지원 현황 — KOICA ODA 로데이터(144개 세부 사업분야) 기반.
// 국가 데이터에 c.koicaHealthDetail = { year, sectors: [{ name, percent, amount }] } 형태로
// 들어온다고 가정(콜랩 파이프라인 반영 전까지는 없는 국가가 많음 → 26/54개국만 존재).
// 상위 HEALTH_DETAIL_TOP_N개만 개별 막대로, 나머지는 "기타"로 합산.
const HEALTH_DETAIL_TOP_N = 6;
function buildHealthDetailRows(healthDetail) {
  if (!healthDetail || !healthDetail.sectors || healthDetail.sectors.length === 0) return null;
  const sorted = healthDetail.sectors.slice().sort((a, b) => (b.percent || 0) - (a.percent || 0));
  if (sorted.length <= HEALTH_DETAIL_TOP_N) return sorted;

  const top = sorted.slice(0, HEALTH_DETAIL_TOP_N);
  const rest = sorted.slice(HEALTH_DETAIL_TOP_N);
  const restPercent = rest.reduce((sum, s) => sum + (s.percent || 0), 0);
  top.push({ name: "기타", percent: restPercent, amount: null, count: rest.length, isOther: true });
  return top;
}

// 보건 세부 지원 현황 — 막대 한 줄
function HealthDetailBar({ name, percent, amount, count, isOther }) {
  return (
    <div className="health-bar-row">
      <div className="health-bar-label">{name}</div>
      <div className="health-bar-track">
        <div className="health-bar-fill" style={{ width: `${Math.min(100, percent || 0)}%` }} />
      </div>
      <div className="health-bar-pct">{(percent || 0).toFixed(1)}%</div>
      <div className="health-bar-amt">
        {isOther ? `세부사업 ${count}개` : (amount || "—")}
      </div>
    </div>
  );
}

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

  // 인프라 항목 목록 (라벨 ↔ 데이터 ↔ 평균 비교용 필드키) — 경제/ODA와 성격이 달라 별도 블록으로 분리
  const infraRows = [
    ["병상 수", infra.hospitalBeds, "hospitalBeds"],
    ["의사 수", infra.physicians, "physicians"],
    ["전력 접근률", infra.electricityAccess, "electricityAccess"],
    ["인터넷 이용률", infra.internetPenetration, "internetPenetration"],
  ];

  // 기초 정보 행 (라벨 ↔ 값) — GDP는 우측 '경제 및 ODA'에서 다루므로 제외
  const infoRows = [
    ["수도", c.capital || "—"],
    ["인구", c.population || "—"],
    ["언어", c.language || "—"],
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

  // KOICA 분기 판정
  const sectors = ((c.koica && c.koica.sectors) || []).slice().sort((a, b) => b.percent - a.percent);
  const hasDonut = sectors.length > 0;
  const cum = c.koicaCumulative || null;
  const hasCum = !!(cum && cum.total);
  
  // 보건 세부 지원 현황 — 데이터 없는 국가(26/54개국만 커버)는 블록 자체를 숨김
  const healthDetail = c.koicaHealthDetail || null;
  const healthDetailRows = buildHealthDetailRows(healthDetail);
  const hasHealthDetail = !!healthDetailRows;

  const backLabel = from === "match" ? "추천 결과로" : from === "mypage" ? "내 정보로" : "국가 목록으로";

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
          </h1>
          <div className="stat-strip">
            {stats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </div>
      </div>

      <div className="detail-grid">
        <div>
          {/* 1. 기초 국가 정보 */}
          <div className="info-block">
            <div className="block-tag">기초 국가 정보</div>
            {infoRows.map(([k, val]) => (
              <div className="info-row" key={k}><b>{k}</b><span>{val}</span></div>
            ))}
          </div>

          {/* 2. KOICA 지원 규모 — 도넛(위) + 범례(아래) */}
          <div className="info-block">
            <div className="block-tag">한국국제협력단(KOICA) 지원 규모</div>

            {!hasDonut && !hasCum ? (
              <div className="eco-empty">{EMPTY}</div>
            ) : (
              <>
                {hasCum && (
                  <div className="koica-cum">
                    <div className="koica-cum-big">{cum.total}</div>
                    <div className="koica-cum-meta">
                      {cum.startYear}년 이후 누적 금액
                      <span className="koica-cum-dot">·</span>
                      {cum.latestYear}년 기준 한 해 {cum.latest} 지원
                      <span className="eco-src">({cum.startYear}~{cum.latestYear} · KOICA)</span>
                    </div>
                  </div>
                )}

                {hasDonut ? (
                  <>
                    <div className="koica-sub-title">
                      분야별 지원 비중
                      <span className="eco-src">(2023 · KOICA)</span>
                      <span className="koica-sub-desc">통합개발지표 분야별 지원금을 비율로 환산 · 위 누적 총액과는 출처가 다릅니다.</span>
                    </div>
                    <div className="koica-wrap">
                      <DonutChart sectors={sectors} total={c.koica.total} />
                      <div className="koica-legend">
                        {sectors.map((s, i) => (
                          <div className="koica-li" key={s.name}>
                            <span className="koica-sw" style={{ background: DONUT_COLORS[i % DONUT_COLORS.length] }} />
                            <span className="koica-nm">{s.name}</span>
                            <span className="pc">{s.percent}%</span>
                            <span className="amt">{s.amount}</span>
                          </div>
                        ))}
                        <div className="koica-total"><span>전체</span><span>{c.koica.total}</span></div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="koica-nodonut">분야별 데이터 없음</div>
                )}
              </>
            )}
          </div>
        </div>

        <div>
          {/* 3. 경제 및 ODA 규모 정보 */}
          <div className="info-block">
            <div className="block-tag">경제 및 ODA 규모 정보</div>
            {ecoRows.map(([label, v, defaultSource]) => <EcoItem key={label} label={label} v={v} defaultSource={defaultSource} />)}

            <div className="eco-foot">
              {hasNet && <div>※ 상환액이 신규 원조를 초과해 음수로 표시될 수 있습니다.</div>}
              <div>※ 금액은 소수점 반올림 처리된 값입니다.</div>
            </div>
          </div>

          {/* 4. 인프라 정보 — 경제/ODA와 성격이 달라 별도 블록으로 분리 */}
          <div className="info-block">
            <div className="block-tag">인프라 정보</div>
            {infraRows.map(([label, v, fieldKey]) => (
              <InfraItem
                key={label}
                label={label}
                v={v}
                fieldKey={fieldKey}
                compare={v ? infraCompareText(fieldKey, v.value) : null}
              />
            ))}
            <div className="eco-foot"><div>※ 막대의 주황선은 아프리카 54개국 평균 위치입니다.</div></div>
          </div>
        </div>
      </div>

      {/* 5. 보건 세부 지원 현황 — KOICA ODA 로데이터, 기존 KOICA 도넛과 독립된 전체 폭 블록 */}
      {hasHealthDetail && (
        <div className="info-block info-block--wide">
          <div className="block-tag">보건 세부 지원 현황</div>
          <p className="health-detail-desc">
            KOICA ODA 세부 사업분야 데이터를 기준으로, 보건 분야 지원이 실제로 어디에 쓰였는지 보여줍니다.
            {healthDetail.year && <span className="eco-src">({healthDetail.year} · KOICA ODA)</span>}
          </p>
          {healthDetailRows.map((row) => <HealthDetailBar key={row.name} {...row} />)}
        </div>
      )}

      {/* 6. 실제 협력 창구 — 재외공관(현지 한국 대사관)은 54개국 전체 존재,
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

      {/* 데이터 출처 안내 — 전 국가 공통 (각주형) */}
      <p className="source-footnote">
        <span className="source-footnote-mark">출처</span>
        인구·언어·수도 외교부 「국가(지역)별 일반현황」(2025.12 갱신) · GDP·1인당 GDP 외교부 「국가(지역)별 경제현황」(2025.09 갱신) · ODA 규모(순수원액·수원국·양자·한국) KOICA 「협력국 통합개발지표」(2025.07 갱신) · KOICA 분야별·누적 지원 KOICA 「국가별 지원실적」(2025.11 갱신) · 보건 세부 지원 현황 KOICA 「ODA 실적보고 로데이터」(2025.11 갱신) · 병상 수·의사 수·전력 접근률·인터넷 이용률 World Bank Open Data · 재외공관·주한공관 연락처 외교부 「국가·지역별 재외공관 정보」·「재외공관 홈페이지 관련 정보」·「주한공관정보」. 모든 데이터는 공공데이터포털(data.go.kr) 또는 World Bank 공개 자료이며, 갱신일은 각 포털 기준입니다. 데이터 기준연도는 각 항목에 별도 표기되어 있습니다.
      </p>
      <p className="source-footnote" style={{ marginTop: 10 }}>
        <span className="source-footnote-mark">산정기준</span>
        기후 취약도는 World Bank 기후 API(SSP3-7.0 시나리오, 2040~2059년 전망)의 기온 상승폭(40%)·강수 변화율(30%)·극한강수 지표(30%)를 가중합해 30~100점으로 환산한 값입니다. 외교 친밀도는 외교부 기관 진출현황(40%)·외교관계(30%)·무역관계(30%)를 가중합하고, KOICA 중점협력국은 +20점을 가산한 값입니다. 두 점수 모두 아프리카 54개국 안에서의 상대 순위를 정규화한 값으로, 절대적인 수준이 아니라 이 54개국 사이에서의 상대적 위치를 나타냅니다. 인프라 지표의 평균 비교는 데이터가 확인된 아프리카 국가들의 산술 평균 대비 ±5% 이내를 "평균 수준"으로 판정한 값입니다.
      </p>
    </main>
  );
}