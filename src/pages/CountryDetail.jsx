import { COUNTRIES } from "../data";
import { CountrySilhouette, DonutChart, DONUT_COLORS, Icons } from "../components/ui";

const EMPTY = "아직 정보가 없습니다";
const isNil = (v) => v === null || v === undefined;

// 상세 페이지 전용 — 히어로 스탯 한 칸
function StatItem({ value, label, suffix, yes }) {
  return (
    <div className="stat">
      <div className={"stat-val" + (yes ? " yes" : "")}>
        {isNil(value) ? "—" : value}
        {suffix && !isNil(value) && <small>{suffix}</small>}
      </div>
      <div className="stat-label">{label}</div>
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

export default function CountryDetail({ id, go, from = "search", isFavorite, toggleFavorite }) {
  const c = COUNTRIES[id];
  if (!c) return null;

  const fav = isFavorite ? isFavorite(id) : false;
  const eco = c.economy || {};

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

  // 기초 정보 행 (라벨 ↔ 값) — GDP는 우측 '경제 및 ODA'에서 다루므로 제외
  const infoRows = [
    ["수도", c.capital || "—"],
    ["인구", c.population || "—"],
    ["언어", c.language || "—"],
  ];

  // 히어로 스탯 (5칸)
  const stats = [
    { value: c.climateScore, suffix: "/100", label: "기후 취약도" },
    { value: c.mainClimateIssue, label: "주요 기후문제" },
    { value: c.priorityPartner ? "Yes" : "No", label: "중점협력국", yes: c.priorityPartner },
    { value: c.koreaOdaHistory ? "Yes" : "No", label: "한국 ODA 이력", yes: c.koreaOdaHistory },
    { value: c.diplomacyScore, suffix: "/100", label: "외교 친밀도" },
  ];

  // KOICA 분기 판정
  const sectors = (c.koica && c.koica.sectors) || [];
  const hasDonut = sectors.length > 0;
  const cum = c.koicaCumulative || null;
  const hasCum = !!(cum && cum.total);

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

          {/* 2. KOICA 지원 규모 — 누적(위) + 도넛(아래) */}
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
        </div>
      </div>

      {/* 데이터 출처 안내 — 전 국가 공통 (각주형) */}
      <p className="source-footnote">
        <span className="source-footnote-mark">출처</span>
        인구·언어·수도 외교부 「국가(지역)별 일반현황」(2025.12 갱신) · GDP·1인당 GDP 외교부 「국가(지역)별 경제현황」(2025.09 갱신) · ODA 규모(순수원액·수원국·양자·한국) KOICA 「협력국 통합개발지표」(2025.07 갱신) · KOICA 분야별·누적 지원 KOICA 「국가별 지원실적」(2025.11 갱신). 모든 데이터는 공공데이터포털(data.go.kr) 공개 자료이며, 갱신일은 포털 기준입니다. 데이터 기준연도는 각 항목에 별도 표기되어 있습니다.
      </p>
      <p className="source-footnote" style={{ marginTop: 10 }}>
        <span className="source-footnote-mark">산정기준</span>
        기후 취약도는 World Bank 기후 API(SSP3-7.0 시나리오, 2040~2059년 전망)의 기온 상승폭(40%)·강수 변화율(30%)·극한강수 지표(30%)를 가중합해 30~100점으로 환산한 값입니다. 외교 친밀도는 외교부 기관 진출현황(40%)·외교관계(30%)·무역관계(30%)를 가중합하고, KOICA 중점협력국은 +20점을 가산한 값입니다.
      </p>
    </main>
  );
}
