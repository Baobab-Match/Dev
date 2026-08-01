// ============================================================
// 바오밥매치 — 국가 상세 정보 PDF (A4 세로, 국가 1개 단독 리포트)
// ------------------------------------------------------------
// CountryDetail.jsx(국가 상세 페이지)의 "PDF로 저장" 버튼에서 사용.
// MatchReportPDF.jsx의 CountryDetailPage와 톤·구성을 맞추되,
// 매칭 점수/순위 없이 국가 자체 정보(기초·경제/ODA·인프라·보건 세부·
// KOICA·협력 문의처)만 담은 단독 문서로 재구성했습니다.
// ============================================================

import {
  Document, Page, Text, View, StyleSheet, Font, Svg, Path, Circle,
} from "@react-pdf/renderer";

// ── 한글 폰트 (로컬 .ttf 번들, MatchReportPDF.jsx와 동일) ──
import PretendardRegular from "../assets/fonts/Pretendard-Regular.ttf";
import PretendardSemiBold from "../assets/fonts/Pretendard-SemiBold.ttf";
import PretendardBold from "../assets/fonts/Pretendard-Bold.ttf";
import PretendardExtraBold from "../assets/fonts/Pretendard-ExtraBold.ttf";

Font.register({
  family: "Pretendard",
  fonts: [
    { src: PretendardRegular, fontWeight: 400 },
    { src: PretendardSemiBold, fontWeight: 600 },
    { src: PretendardBold, fontWeight: 700 },
    { src: PretendardExtraBold, fontWeight: 800 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

// ── 색상 토큰 (index.css :root 팔레트와 동일) ──
const C = {
  green900: "#1f3324", green800: "#2d4a32", green700: "#3a5a40",
  green600: "#3a7a40", green500: "#5a7d5a", green300: "#9cb39c",
  sage100: "#f7f8fa", bone: "#ffffff", boneDark: "#e1e4e8",
  paper: "#f7f8fa", ink: "#1b1f23", inkSoft: "#57606a",
  danger: "#a8503a",
};
const DONUT_COLORS = [C.green900, C.green800, C.green700, C.green600, C.green500, C.green300];

const EMPTY_TEXT = "아직 정보가 없습니다";
const CONTENT_W = 495; // A4(595.28) - 좌우 패딩(50*2)

// 인프라 지표별 아프리카 54개국 평균 계산
const INFRA_FIELDS = [
  "hospitalBeds", "physicians", "nursesMidwives",
  "electricityAccess", "renewableEnergyShare", "cleanCookingAccess",
  "internetPenetration", "mobileSubscriptions",
  "basicWater", "basicSanitation", "renewableWaterPerCapita",
];
function computeInfraAvg(countries) {
  const sums = {}, counts = {};
  INFRA_FIELDS.forEach((f) => { sums[f] = 0; counts[f] = 0; });
  Object.values(countries || {}).forEach((c) => {
    const infra = c.infrastructure || {};
    INFRA_FIELDS.forEach((f) => {
      const raw = infra[f] && infra[f].value;
      const num = raw != null ? parseFloat(raw) : null;
      if (num != null && !isNaN(num)) { sums[f] += num; counts[f] += 1; }
    });
  });
  const avg = {};
  INFRA_FIELDS.forEach((f) => { avg[f] = counts[f] ? sums[f] / counts[f] : null; });
  return avg;
}

// climateScore/diplomacyScore 상대 순위 (54개국 중 순위) — CountryDetail.jsx 웹 화면과 동일 로직
function buildRankMap(countries, scoreKey) {
  const entries = Object.values(countries || {})
    .filter((c) => c[scoreKey] != null)
    .map((c) => ({ id: c.id, score: c[scoreKey] }))
    .sort((a, b) => b.score - a.score);
  const map = {};
  entries.forEach((e, i) => { map[e.id] = { rank: i + 1, total: entries.length }; });
  return map;
}

function infraCompareText(infraAvg, fieldKey, valueStr) {
  const avg = infraAvg[fieldKey];
  const val = valueStr != null ? parseFloat(valueStr) : null;
  if (avg == null || val == null || isNaN(val)) return null;
  const diff = (val - avg) / avg;
  const avgLabel = `아프리카 평균 ${avg.toFixed(1)}`;
  if (Math.abs(diff) < 0.05) return `${avgLabel} · 평균 수준`;
  return diff > 0 ? `${avgLabel} · 평균보다 높음` : `${avgLabel} · 평균보다 낮음`;
}

// 보건 세부 지원 현황 — 상위 N개만 개별 막대, 나머지는 "기타"로 합산 (CountryDetail.jsx와 동일 로직)
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

function todayKo() {
  const d = new Date();
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}

const styles = StyleSheet.create({
  page: {
    fontFamily: "Pretendard", fontSize: 12, color: C.ink,
    backgroundColor: "#ffffff", paddingTop: 44, paddingBottom: 52,
    paddingHorizontal: 50, lineHeight: 1.6,
  },

  cover: {
    fontFamily: "Pretendard", paddingTop: 156, paddingHorizontal: 56,
    backgroundColor: C.green900, color: "#ffffff", height: "100%",
  },
  coverBrand: { fontSize: 13, fontWeight: 700, letterSpacing: 3, color: C.green300, marginBottom: 22 },
  coverTitle: { fontSize: 40, fontWeight: 800, letterSpacing: -1, lineHeight: 1.25, marginBottom: 20 },
  coverSub: { fontSize: 14, color: C.sage100, lineHeight: 1.7, marginBottom: 64 },
  coverMetaBox: { borderTopWidth: 1.5, borderTopColor: C.bone, paddingTop: 24 },
  coverMetaRow: { flexDirection: "row", marginBottom: 10 },
  coverMetaKey: { width: 100, fontSize: 12.5, color: C.green300, fontWeight: 600 },
  coverMetaVal: { fontSize: 12.5, color: "#ffffff", fontWeight: 600 },

  runHeader: {
    position: "absolute", top: 24, left: 50, right: 50,
    flexDirection: "row", justifyContent: "space-between", fontSize: 8.5, color: C.green300, lineHeight: 1,
  },

  // 국가 헤더 카드
  countryHeadCard: { backgroundColor: C.green900, paddingVertical: 20, paddingHorizontal: 22, marginBottom: 18 },
  countryHeadMainRow: { flexDirection: "row", alignItems: "baseline", flexWrap: "wrap" },
  countryNameCard: { fontSize: 26, fontWeight: 800, color: "#ffffff", lineHeight: 1.15 },
  countryNameEnCard: { fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.72)", marginLeft: 8, lineHeight: 1.15 },

  // 스탯 5칸
  statStrip: { flexDirection: "row", marginBottom: 14 },
  statCell: { width: CONTENT_W / 5, alignItems: "center" },
  statVal: { fontSize: 20, fontWeight: 800, color: C.green700, lineHeight: 1 },
  statValYes: { color: C.green600 },
  statSuffix: { fontSize: 9, fontWeight: 600, color: C.green500 },
  statLabel: { fontSize: 10, fontWeight: 600, color: C.inkSoft, marginTop: 4, lineHeight: 1 },
  statRank: { fontSize: 8.5, fontWeight: 600, color: C.green500, marginTop: 3, lineHeight: 1 },
  thinRule: { borderBottomWidth: 0.5, borderBottomColor: C.boneDark, marginBottom: 18 },

  // 요약 문단
  summaryBox: { backgroundColor: C.paper, padding: 18, marginBottom: 24 },
  summaryTag: { fontSize: 10.5, fontWeight: 700, letterSpacing: 2, color: C.green500, marginBottom: 8 },
  summaryText: { fontSize: 12, color: C.inkSoft, lineHeight: 1.75 },

  // 섹션 제목
  secHead: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  secBar: { width: 3.5, height: 15, backgroundColor: C.green700, marginRight: 10 },
  secTitle: { fontSize: 14, fontWeight: 800, color: C.green900 },
  secSrc: { fontSize: 8.5, color: C.inkSoft, marginLeft: 8 },

  // 기초 정보
  basicBox: {
    flexDirection: "column", backgroundColor: C.paper,
    borderWidth: 0.5, borderColor: C.boneDark, paddingVertical: 6, paddingHorizontal: 16, marginBottom: 22,
  },
  basicCell: { paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: C.boneDark },
  basicCellLast: { borderBottomWidth: 0 },
  basicKey: { fontSize: 11, fontWeight: 700, color: C.green700, marginBottom: 3 },
  basicVal: { fontSize: 11.5, color: C.inkSoft },

  // 경제·ODA / 인프라 풀와이드 표
  ecoRow: { position: "relative", height: 48 },
  ecoLabel: { position: "absolute", left: 0, top: 8, fontSize: 12, fontWeight: 600, color: C.green800, lineHeight: 1 },
  ecoSrc: { position: "absolute", top: 9, fontSize: 8, color: C.inkSoft, lineHeight: 1 },
  ecoKrw: { position: "absolute", right: 0, top: 5, fontSize: 13.5, fontWeight: 700, color: C.ink, lineHeight: 1 },
  ecoUsd: { position: "absolute", right: 0, top: 23, fontSize: 9.5, color: C.inkSoft, lineHeight: 1 },
  ecoEmpty: { position: "absolute", right: 0, top: 8, fontSize: 10, color: C.inkSoft, lineHeight: 1 },
  ecoLine: { position: "absolute", left: 0, right: 0, bottom: 0, borderBottomWidth: 0.5, borderBottomColor: C.boneDark },
  ecoGroup: { marginBottom: 22 },

  // 섹션 뒤 메모칸 — 이번엔 섹션마다 별도 페이지(break)라 그 페이지에 남는 여백 전체를 혼자 채운다
  memoGroup: { flexGrow: 1, flexDirection: "column", marginTop: 4, marginBottom: 14 },
  memoGroupLabel: { fontSize: 10.5, fontWeight: 700, letterSpacing: 2, color: C.green500, marginBottom: 6 },
  memoGroupBox: { flexGrow: 1, minHeight: 26, borderWidth: 1, borderColor: C.green700, borderRadius: 0 },
  infraSubhead: { fontSize: 11, fontWeight: 800, color: C.green700, letterSpacing: 0.2, marginTop: 16, marginBottom: 5 },
  infraSubheadFirst: { marginTop: 0 },

  // 보건 세부 지원 현황
  healthDesc: { fontSize: 10.5, color: C.inkSoft, marginBottom: 12, lineHeight: 1.6 },
  healthRow: { position: "relative", height: 30, marginBottom: 10 },
  healthLabel: { position: "absolute", left: 0, top: 0, width: 130, fontSize: 10.5, fontWeight: 600, color: C.green800, lineHeight: 1.3 },
  healthTrack: { position: "absolute", left: 134, right: 90, top: 5, height: 12, backgroundColor: C.boneDark },
  healthFill: { height: 12, backgroundColor: C.green600 },
  healthPct: { position: "absolute", right: 0, top: 2, width: 80, textAlign: "right", fontSize: 10.5, fontWeight: 700, color: C.green700, lineHeight: 1 },

  // KOICA 누적
  koicaCumRow: { position: "relative", height: 24, marginBottom: 8 },
  koicaCumLabel: { position: "absolute", left: 0, top: 5, fontSize: 11, fontWeight: 700, color: C.green700, lineHeight: 1 },
  koicaCumBig: { position: "absolute", left: 66, top: 0, fontSize: 16, fontWeight: 800, color: C.green700, lineHeight: 1 },
  koicaCumMeta: { position: "absolute", right: 0, top: 5, fontSize: 9.5, color: C.inkSoft, lineHeight: 1 },
  donutWrap: { alignItems: "center", marginTop: 10, marginBottom: 4 },
  donutCenterWrap: { width: 190, height: 190, position: "relative", alignItems: "center", justifyContent: "center" },
  donutCenterLabel: { position: "absolute", top: 82, left: 0, right: 0, alignItems: "center" },
  donutCenterBrand: { fontSize: 15, fontWeight: 800, color: C.green900 },
  donutCenterSub: { fontSize: 10, fontWeight: 600, color: C.inkSoft, marginTop: 3 },
  legendGrid: { flexDirection: "row", flexWrap: "wrap", marginTop: 18 },
  legendGridItem: {
    width: "50%", flexDirection: "row", alignItems: "center",
    paddingVertical: 9, paddingRight: 14, borderBottomWidth: 0.5, borderBottomColor: C.boneDark,
  },
  legendSw: { width: 11, height: 11 },
  legendGridName: { flex: 1, fontSize: 12.5, color: C.inkSoft, marginLeft: 9, lineHeight: 1.2 },
  legendGridPct: { fontSize: 13.5, fontWeight: 800, color: C.green800, lineHeight: 1 },

  // 협력 문의처 — 좌우 2단이 아니라 위아래로 쌓아 공간을 넓게 씀
  diploBox: {
    flexDirection: "column", backgroundColor: C.paper,
    borderWidth: 0.5, borderColor: C.boneDark, paddingVertical: 16, paddingHorizontal: 18, marginTop: 4,
  },
  diploCol: { paddingBottom: 16, marginBottom: 16, borderBottomWidth: 0.5, borderBottomColor: C.boneDark },
  diploColLast: { paddingBottom: 0, marginBottom: 0, borderBottomWidth: 0 },
  diploVal: { fontSize: 11.5, color: C.inkSoft, marginTop: 2, lineHeight: 1.5 },

  // 출처 페이지
  h2: { fontSize: 19, fontWeight: 800, color: C.green900, marginBottom: 14 },
  sourceBox: { backgroundColor: C.paper, padding: 18 },
  sourceText: { fontSize: 10.5, color: C.inkSoft, lineHeight: 1.7 },
  sourceParagraph: { marginBottom: 14 },

  footer: {
    position: "absolute", bottom: 40, left: 50, right: 50,
    borderTopWidth: 1, borderTopColor: C.green800, paddingTop: 10,
    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  },
  footerBrand: { fontSize: 8.5, color: C.green800, fontWeight: 700, letterSpacing: 0.5 },
  footerPage: { fontSize: 8.5, color: C.green800, fontWeight: 700 },
});

// 도넛 부채꼴 path (폴리곤 근사)
function wedgePath(cx, cy, r, startDeg, endDeg) {
  const pts = [`M ${cx} ${cy}`];
  const span = startDeg - endDeg;
  const n = Math.max(2, Math.ceil(span / 4));
  for (let k = 0; k <= n; k++) {
    const a = ((startDeg - span * k / n) * Math.PI) / 180;
    pts.push(`L ${(cx + r * Math.cos(a)).toFixed(2)} ${(cy - r * Math.sin(a)).toFixed(2)}`);
  }
  pts.push("Z");
  return pts.join(" ");
}

function Donut({ sectors, size = 120, hole = 0.52 }) {
  const cx = size / 2, cy = size / 2, r = size / 2;
  const total = sectors.reduce((s, x) => s + (x.percent || 0), 0) || 100;
  let start = 90;
  const wedges = sectors.map((s, i) => {
    const end = start - (s.percent || 0) / total * 360;
    const d = wedgePath(cx, cy, r, start, end);
    start = end;
    return <Path key={i} d={d} fill={DONUT_COLORS[i % DONUT_COLORS.length]} />;
  });
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {wedges}
      <Circle cx={cx} cy={cy} r={r * hole} fill="#ffffff" />
    </Svg>
  );
}

function PageFooter() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerBrand}>{"BAOBAB MATCH \u00B7 \uBC14\uC624\uBC25\uB9E4\uCE58"}</Text>
      <Text style={styles.footerPage} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function SecHead({ title, src }) {
  return (
    <View style={styles.secHead}>
      <View style={styles.secBar} />
      <Text style={styles.secTitle}>{title}</Text>
      {src ? <Text style={styles.secSrc}>{src}</Text> : null}
    </View>
  );
}

function EcoRow({ label, v, defaultSrc, isLast }) {
  let src = null;
  if (v) {
    const source = v.source || defaultSrc;
    const yr = v.year;
    src = yr && source ? `(${yr} · ${source})` : yr ? `(${yr})` : source ? `(${source})` : null;
  }
  const labelW = label.length * 12 + 4;
  return (
    <View style={styles.ecoRow}>
      <Text style={styles.ecoLabel}>{label}</Text>
      {src ? <Text style={[styles.ecoSrc, { left: labelW }]}>{src}</Text> : null}
      {v && (v.krw || v.usd) ? (
        <>
          <Text style={styles.ecoKrw}>{v.krw || "—"}</Text>
          {v.usd ? <Text style={styles.ecoUsd}>{v.usd}</Text> : null}
        </>
      ) : (
        <Text style={styles.ecoEmpty}>{EMPTY_TEXT}</Text>
      )}
      {!isLast ? <View style={styles.ecoLine} /> : null}
    </View>
  );
}

// 섹션 뒤에 붙는 메모칸 — 라벨 + 초록 테두리 박스 (flexGrow로 남는 공간만큼 자동 확장)
function SectionMemo() {
  return (
    <View style={styles.memoGroup}>
      <Text style={styles.memoGroupLabel}>NOTES</Text>
      <View style={styles.memoGroupBox} />
    </View>
  );
}

function InfraRow({ label, v, compare, isLast }) {
  let src = null;
  if (v) src = v.year && v.source ? `(${v.year} · ${v.source})` : v.year ? `(${v.year})` : v.source ? `(${v.source})` : null;
  const labelW = label.length * 12 + 4;
  const valueLine = v && v.value ? (v.unit === "%" ? `${v.value}%` : `${v.value}${v.unit ? ` ${v.unit}` : ""}`) : null;
  return (
    <View style={styles.ecoRow}>
      <Text style={styles.ecoLabel}>{label}</Text>
      {src ? <Text style={[styles.ecoSrc, { left: labelW }]}>{src}</Text> : null}
      {valueLine ? (
        <>
          <Text style={styles.ecoKrw}>{valueLine}</Text>
          {compare ? <Text style={styles.ecoUsd}>{compare}</Text> : null}
        </>
      ) : (
        <Text style={styles.ecoEmpty}>{EMPTY_TEXT}</Text>
      )}
      {!isLast ? <View style={styles.ecoLine} /> : null}
    </View>
  );
}

function HealthRow({ name, percent, amount, count, isOther }) {
  return (
    <View style={styles.healthRow}>
      <Text style={styles.healthLabel}>{name}</Text>
      <View style={styles.healthTrack}>
        <View style={[styles.healthFill, { width: `${Math.min(100, percent || 0)}%` }]} />
      </View>
      <Text style={styles.healthPct}>
        {(percent || 0).toFixed(1)}%{"  "}{isOther ? `(${count}개)` : ""}
      </Text>
    </View>
  );
}

// ============================================================
// 메인 문서
// ============================================================
export default function CountryInfoPDF({ country, countries, summary }) {
  const c = country;
  const eco = c.economy || {};
  const infra = c.infrastructure || {};
  const cum = c.koicaCumulative || {};
  const sectors = ((c.koica && c.koica.sectors) || []).slice().sort((a, b) => b.percent - a.percent);

  const infraAvg = computeInfraAvg(countries);
  const climateRank = buildRankMap(countries, "climateScore")[c.id];
  const diplomacyRank = buildRankMap(countries, "diplomacyScore")[c.id];

  const healthDetail = c.koicaHealthDetail || null;
  const healthDetailRows = buildHealthDetailRows(healthDetail);

  const stats = [
    { value: c.climateScore, label: "기후 취약도", suffix: "/100", rank: climateRank },
    { value: c.mainClimateIssue, label: "주요 기후문제" },
    { value: c.priorityPartner ? "Yes" : "No", label: "중점협력국", yes: c.priorityPartner },
    { value: c.koreaOdaHistory ? "Yes" : "No", label: "한국 ODA 이력", yes: c.koreaOdaHistory },
    { value: c.diplomacyScore, label: "외교 친밀도", suffix: "/100", rank: diplomacyRank },
  ];
  const basics = [
    ["수도", c.capital || "—"],
    ["인구", c.population || "—"],
    ["언어", c.language || "—"],
  ];
  const ODA = "KOICA";
  const ecoRows = [
    ["1인당 GDP", eco.gdpPerCapita, null],
    ["GDP 총액", eco.gdpTotal, null],
    ["ODA 순수원액", eco.odaNetReceived, ODA],
    ["수원국 ODA 규모", eco.recipientOda, ODA],
    ["양자 지원 규모", eco.bilateral, ODA],
    ["한국 ODA 규모", eco.koreaOda, ODA],
  ];
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

  return (
    <Document
      title={`바오밥매치 국가 상세 정보 - ${c.name}`}
      author="바오밥매치"
      subject="아프리카 국가 상세 정보"
    >
      {/* 표지 */}
      <Page size="A4" style={styles.cover}>
        <Text style={styles.coverBrand}>BAOBAB MATCH · 국가 상세 정보</Text>
        <Text style={styles.coverTitle}>{c.name}{"\n"}{c.nameEn || ""}</Text>
        <Text style={styles.coverSub}>
          바오밥매치가 제공하는 공공데이터 기반 아프리카 국가 정보{"\n"}
          기후·경제·ODA·인프라·협력 현황을 한눈에 정리했습니다.
        </Text>
        <View style={styles.coverMetaBox}>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaKey}>국가</Text>
            <Text style={styles.coverMetaVal}>{c.name} ({c.nameEn || "—"})</Text>
          </View>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaKey}>발행일</Text>
            <Text style={styles.coverMetaVal}>{todayKo()}</Text>
          </View>
        </View>
        <View style={{
          position: "absolute", bottom: 40, left: 56, right: 56,
          borderTopWidth: 1, borderTopColor: C.bone, paddingTop: 10,
        }}>
          <Text style={{ fontSize: 8.5, color: C.green300, fontWeight: 600, letterSpacing: 0.5 }}>
            BAOBAB MATCH · 바오밥매치
          </Text>
        </View>
      </Page>

      {/* 국가 상세 정보 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.runHeader} fixed>
          <Text>바오밥매치 국가 상세 정보</Text>
          <Text>{c.name}</Text>
        </View>

        <View style={styles.countryHeadCard}>
          <View style={styles.countryHeadMainRow}>
            <Text style={styles.countryNameCard}>{c.name}</Text>
            <Text style={styles.countryNameEnCard}>{c.nameEn || ""}</Text>
          </View>
        </View>

        <View style={styles.statStrip}>
          {stats.map((s) => (
            <View key={s.label} style={styles.statCell}>
              <Text style={[styles.statVal, s.yes && styles.statValYes]}>
                {s.value == null ? "—" : s.value}
                {s.suffix && s.value != null ? <Text style={styles.statSuffix}>{s.suffix}</Text> : null}
              </Text>
              <Text style={styles.statLabel}>{s.label}</Text>
              {s.rank ? <Text style={styles.statRank}>{s.rank.total}개국 중 {s.rank.rank}위</Text> : null}
            </View>
          ))}
        </View>
        <View style={styles.thinRule} />

        {summary ? (
          <View wrap={false} style={styles.summaryBox}>
            <Text style={styles.summaryTag}>국가 정보 요약</Text>
            <Text style={styles.summaryText}>{"\u3000"}{summary}</Text>
          </View>
        ) : null}

        {/* 기초 국가 정보 */}
        <View wrap={false}>
          <SecHead title="기초 국가 정보" />
          <View style={styles.basicBox}>
            {basics.map(([k, v], i) => (
              <View key={k} style={[styles.basicCell, i === basics.length - 1 && styles.basicCellLast]}>
                <Text style={styles.basicKey}>{k}</Text>
                <Text style={styles.basicVal}>{v}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 경제 및 ODA 규모 — 새 페이지에서 시작 (이전 섹션에 붙어서 페이지 하단이 비는 문제 방지) */}
        <View wrap={false} break>
          <SecHead title="경제 및 ODA 규모" />
          <View style={styles.ecoGroup}>
            {ecoRows.map(([label, v, ds], i) => (
              <EcoRow key={label} label={label} v={v} defaultSrc={ds} isLast={i === ecoRows.length - 1} />
            ))}
          </View>
        </View>
        <SectionMemo />

        {/* 인프라 현황 — 새 페이지에서 시작. 12개 지표로 페이지가 이미 꽉 차서 메모칸은 안 붙임 */}
        <View wrap={false} break>
          <SecHead title="인프라 현황" />
          <View style={styles.ecoGroup}>
            {infraGroups.map((g, gi) => (
              <View key={g.label}>
                <Text style={[styles.infraSubhead, gi === 0 && styles.infraSubheadFirst]}>{g.label}</Text>
                {g.rows.map(([label, v, fieldKey], i) => (
                  <InfraRow
                    key={label}
                    label={label}
                    v={v}
                    compare={v ? infraCompareText(infraAvg, fieldKey, v.value) : null}
                    isLast={i === g.rows.length - 1}
                  />
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* 보건 세부 지원 현황 — 데이터 있는 국가만, 새 페이지에서 시작 */}
        {healthDetailRows ? (
          <>
            <View wrap={false} break style={{ marginBottom: 22 }}>
              <SecHead title="보건 세부 지원 현황" src={healthDetail.year ? `(${healthDetail.year} · KOICA ODA)` : null} />
              <Text style={styles.healthDesc}>
                KOICA ODA 세부 사업분야 데이터를 기준으로, 보건 분야 지원이 실제로 어디에 쓰였는지 보여줍니다.
              </Text>
              {healthDetailRows.map((row) => <HealthRow key={row.name} {...row} />)}
            </View>
            <SectionMemo />
          </>
        ) : null}

        {/* KOICA 지원 규모 — 새 페이지에서 시작 */}
        <View wrap={false} break>
          <SecHead title="한국국제협력단(KOICA) 지원 규모" />
          {cum.total ? (
            <View style={styles.koicaCumRow}>
              <Text style={styles.koicaCumLabel}>누적 지원</Text>
              <Text style={styles.koicaCumBig}>{cum.total}</Text>
              <Text style={styles.koicaCumMeta}>
                {cum.startYear}~{cum.latestYear} 누적금액 · {cum.latestYear}년 한 해 지원액은 {cum.latest}
              </Text>
            </View>
          ) : null}
          {sectors.length > 0 ? (
            <>
              <Text style={{ fontSize: 10.5, fontWeight: 700, color: C.green800, marginTop: 4 }}>
                분야별 지원 비중
                <Text style={{ fontSize: 8, color: C.danger, fontWeight: 400 }}>  (2023 · KOICA · 누적 총액과 출처 다름)</Text>
              </Text>
              <View style={styles.donutWrap}>
                <View style={styles.donutCenterWrap}>
                  <Donut sectors={sectors} size={190} />
                  <View style={styles.donutCenterLabel}>
                    <Text style={styles.donutCenterBrand}>KOICA</Text>
                    <Text style={styles.donutCenterSub}>분야별 지원</Text>
                  </View>
                </View>
              </View>
              <View style={styles.legendGrid}>
                {sectors.slice(0, 6).map((s, i) => (
                  <View key={s.name} style={styles.legendGridItem}>
                    <View style={[styles.legendSw, { backgroundColor: DONUT_COLORS[i % DONUT_COLORS.length] }]} />
                    <Text style={styles.legendGridName}>{s.name}</Text>
                    <Text style={styles.legendGridPct}>{s.percent}%</Text>
                  </View>
                ))}
              </View>
            </>
          ) : (
            !cum.total && <Text style={styles.ecoEmpty}>{EMPTY_TEXT}</Text>
          )}
        </View>
        <SectionMemo />

        {/* 협력 문의처 — 새 페이지에서 시작 */}
        {c.diplomaticContact ? (
          <>
            <View wrap={false} break>
              <SecHead title="협력 문의처" />
              <View style={styles.diploBox}>
                <View style={styles.diploCol}>
                  <Text style={styles.basicKey}>현지 대한민국 대사관</Text>
                  <Text style={styles.basicVal}>{c.diplomaticContact.overseas.missionName}</Text>
                  <Text style={styles.diploVal}>{c.diplomaticContact.overseas.phone}</Text>
                  <Text style={styles.diploVal}>{c.diplomaticContact.overseas.address}</Text>
                </View>
                {c.diplomaticContact.domestic ? (
                  <View style={[styles.diploCol, styles.diploColLast]}>
                    <Text style={styles.basicKey}>주한 {c.name} 대사관 (서울)</Text>
                    <Text style={styles.basicVal}>{c.diplomaticContact.domestic.ambassador}</Text>
                    <Text style={styles.diploVal}>{c.diplomaticContact.domestic.phone}</Text>
                    {c.diplomaticContact.domestic.email ? (
                      <Text style={styles.diploVal}>{c.diplomaticContact.domestic.email}</Text>
                    ) : null}
                    <Text style={styles.diploVal}>{c.diplomaticContact.domestic.address}</Text>
                  </View>
                ) : null}
              </View>
            </View>
            <SectionMemo />
          </>
        ) : null}

        <PageFooter />
      </Page>

      {/* 데이터 출처 */}
      <Page size="A4" style={styles.page} break>
        <View style={styles.runHeader} fixed>
          <Text>바오밥매치 국가 상세 정보</Text>
          <Text>{c.name}</Text>
        </View>
        <Text style={styles.h2}>데이터 출처 및 유의사항</Text>
        <View style={styles.sourceBox}>
          <Text style={[styles.sourceText, styles.sourceParagraph]}>
            {"\u3000"}인구·언어·수도 외교부 「국가(지역)별 일반현황」(2025.12 갱신) · GDP·1인당 GDP 외교부
            「국가(지역)별 경제현황」(2025.09 갱신) · ODA 규모(순수원액·수원국·양자·한국) KOICA
            「협력국 통합개발지표」(2025.07 갱신) · KOICA 분야별·누적 지원 KOICA 「국가별 지원실적」
            (2025.11 갱신) · 보건 세부 지원 현황 KOICA 「ODA 실적보고 로데이터」(2025.11 갱신) ·
            인프라 지표 11종(병상 수·의사 수·간호사·조산사 수·전력 접근률·재생에너지 발전 비중·청정 취사연료 접근률·인터넷 이용률·이동통신 가입자 수·식수 접근률·위생시설 접근률·1인당 재생가능 담수자원량) World Bank Open Data ·
            재외공관·주한공관 연락처 외교부 「국가·지역별 재외공관 정보」·「재외공관 홈페이지 관련 정보」·「주한공관정보」.
            모든 데이터는 공공데이터포털(data.go.kr) 또는 World Bank 공개 자료이며, 갱신일은
            각 포털 기준입니다. 데이터 기준연도는 각 항목에 별도 표기되어 있습니다.
          </Text>
          <Text style={[styles.sourceText, styles.sourceParagraph]}>
            {"\u3000"}기후 취약도는 World Bank 기후 API(SSP3-7.0 시나리오, 2040~2059년 전망)의 기온 상승폭(40%)
            ·강수 변화율(30%)·극한강수 지표(30%)를 가중합해 30~100점으로 환산한 값입니다.
            외교 친밀도는 외교부 기관 진출현황(40%)·외교관계(30%)·무역관계(30%)를 가중합하고, KOICA 중점협력국은 +20점을 가산한 값입니다.
            두 점수 모두 아프리카 54개국 안에서의 상대 순위를 정규화한 값으로, 절대적인 수준이 아니라 이 54개국 사이에서의 상대적 위치를 나타냅니다.
            인프라 지표의 평균 비교는 데이터가 확인된 아프리카 국가들의 산술 평균 대비 ±5% 이내를 "평균 수준"으로 판정한 값입니다.
          </Text>
          <Text style={[styles.sourceText, styles.sourceParagraph, { marginBottom: 0 }]}>
            궁금한 점이 있으시면 아래 사이트로 문의해 주세요.
          </Text>
          <Text style={[styles.sourceText, { marginTop: 6, fontWeight: 700, color: C.green700 }]}>
            https://baobab-match.web.app/
          </Text>
        </View>
        <PageFooter />
      </Page>
    </Document>
  );
}