// ============================================================
// 바오밥매치 — 국가 분석 PDF 보고서 (A4 세로 전용 풀와이드 레이아웃)
// ------------------------------------------------------------
// @react-pdf/renderer 로 A4 텍스트 기반 PDF 생성.
//  - 한글 폰트(Pretendard) 로컬 번들 → 깨짐/404 없음
//  - 국가당 2면: ① 국가 상세(스탯·기초·경제ODA·KOICA도넛) ② 매칭(막대·근거)
//  - 막대 옆 텍스트는 absolute 배치(누락 방지), 도넛은 SVG 폴리곤
//
// 추천 결과 / 관심 국가 공용:
//   ranked / countries / field / reportTitle / subtitle / showRanking / showMatchedField
// ============================================================

import {
  Document, Page, Text, View, StyleSheet, Font, Svg, Path, Circle,
} from "@react-pdf/renderer";

// ── 한글 폰트 (로컬 .ttf 번들) ──
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

// ── 색상 토큰 (index.css의 :root 팔레트와 동일하게 유지) ──
const C = {
  green900: "#1f3324", green800: "#2d4a32", green700: "#3a5a40",
  green600: "#3a7a40", green500: "#5a7d5a", green300: "#9cb39c",
  sage100: "#f7f8fa", bone: "#ffffff", boneDark: "#e1e4e8",
  paper: "#f7f8fa", ink: "#1b1f23", inkSoft: "#57606a",
  danger: "#a8503a",
};
// 도넛 색상 — 이질적인 골드·베이지 톤 대신 그린 스케일 6단계로 통일 (색 종류 최소화)
const DONUT_COLORS = [C.green900, C.green800, C.green700, C.green600, C.green500, C.green300];

const TIER_COLOR = { strong: C.green800, good: C.green700, fair: C.inkSoft, weak: C.danger };
const TIER_LABEL = { strong: "매우 적합", good: "적합", fair: "부분 적합", weak: "참고" };
const TIER_RANGE = { strong: "75점 이상", good: "60~74점", fair: "45~59점", weak: "45점 미만" };
const TIER_ORDER = ["strong", "good", "fair", "weak"];

// '참고' 등급 문구 — 추천 보고서는 엔진이 전체 국가 중에서 골라온 결과이므로 "후보"라는
// 표현이 맞지만, 관심 국가 보고서는 사용자가 이미 직접 즐겨찾기한 국가이므로 "후보"라고
// 부르면 어색하다. 보고서 종류(reportKind)에 따라 문구를 분리한다.
const WEAK_TIER_NOTE = {
  recommend: "이 분야에 특별히 부합하는 국가가 많지 않아, 종합 점수 기준 상대적으로 가까운 후보입니다.",
  favorite: "즐겨찾기하신 국가입니다. 다만 현재 선택하신 분야 기준으로는 적합도가 높게 나타나지 않았습니다.",
};
const WEAK_REASON_EMPTY = {
  recommend: "종합 점수 기준 상대적으로 가까운 후보입니다.",
  favorite: "즐겨찾기하신 국가지만, 선택하신 분야에서 두드러진 강점은 확인되지 않았습니다.",
};

// DETAILS 안내 문구 — 추천 보고서 vs 관심 국가 보고서
const NOTICE_COPY = {
  recommend: {
    title: "다음 장부터 국가별 상세 분석이 이어집니다.",
    desc: [
      "각 국가는 ① 국가 상세 정보 → ② 매칭 적합도·추천 근거 순으로 3개 면에 걸쳐 정리됩니다.",
      "① 국가 상세 정보에는 기후 취약도·중점협력국 여부·외교 친밀도 등 핵심 지표와 기초 국가 정보, 경제 및 ODA 규모, KOICA 지원 현황이 담겨 있습니다.",
      "② 매칭 페이지에는 7개 지표별 적합도 막대그래프와 이 국가를 추천하는 구체적인 근거가 정리되어 있어, 순위표의 점수가 어떻게 산정됐는지 바로 확인하실 수 있습니다.",
    ],
  },
  favorite: {
    title: "다음 장부터 관심 국가별 상세 설명이 이어집니다.",
    desc: [
      "즐겨찾기하신 각 국가는 ① 국가 상세 정보 → ② 매칭 적합도·추천 근거 순으로 3개 면에 걸쳐 정리됩니다.",
      "① 국가 상세 정보에는 기후 취약도·중점협력국 여부·외교 친밀도 등 핵심 지표와 기초 국가 정보, 경제 및 ODA 규모, KOICA 지원 현황이 담겨 있습니다.",
      "② 매칭 페이지에는 선택하신 분야를 기준으로 한 7개 지표별 적합도와 근거가 정리되어 있어, 즐겨찾기하신 국가가 왜 이 점수·순위로 나왔는지 바로 확인하실 수 있습니다.",
    ],
  },
};
const AXIS_LABEL = {
  field: "분야 적합도", climateFit: "기후-기술 적합도", climateScore: "기후 시급성",
  diplomacy: "외교 친밀도", develop: "개발 필요도", export: "수출 연계성", techMatch: "보유기술 적합도",
};

// 본문 폭: A4(595.28) - 좌우 패딩(50*2) = 495.28
const CONTENT_W = 495;

const styles = StyleSheet.create({
  page: {
    fontFamily: "Pretendard", fontSize: 12, color: C.ink,
    backgroundColor: "#ffffff", paddingTop: 44, paddingBottom: 52,
    paddingHorizontal: 50, lineHeight: 1.6,
  },

  // 표지
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

  // 공통
  sectionTag: { fontSize: 10.5, fontWeight: 700, letterSpacing: 2, color: C.green500, marginBottom: 6 },
  h2: { fontSize: 19, fontWeight: 800, color: C.green900, marginBottom: 14 },
  paragraph: { fontSize: 12.5, color: C.inkSoft, lineHeight: 1.75 },
  bold700: { fontWeight: 700, color: C.green700 },

  runHeader: {
    position: "absolute", top: 24, left: 50, right: 50,
    flexDirection: "row", justifyContent: "space-between", fontSize: 8.5, color: C.green300, lineHeight: 1,
  },
  footer: {
  position: "absolute", bottom: 24, left: 50, right: 50,
  flexDirection: "row", justifyContent: "space-between", alignItems: "center",
  borderTopWidth: 1, borderTopColor: C.green800, paddingTop: 10,
  },
  footerLeft: { flexDirection: "row", alignItems: "center" },
  footerBrand: { fontSize: 8.5, color: C.green800, fontWeight: 700, letterSpacing: 0.5, lineHeight: 1 },
  footerUrl: {
  fontSize: 8.5, color: C.green700, fontWeight: 500, lineHeight: 1,
  marginLeft: 8, paddingLeft: 8, borderLeftWidth: 0.5, borderLeftColor: C.green300,
  },
  footerPage: { fontSize: 8.5, color: C.green800, fontWeight: 700, lineHeight: 1 },

  summaryBox: {
    backgroundColor: C.paper, borderRadius: 0,
    padding: 18, marginBottom: 28,
  },

  // 순위 표
  table: { borderWidth: 0.5, borderColor: C.boneDark, borderRadius: 0, marginBottom: 28, overflow: "hidden" },
  trHead: { flexDirection: "row", backgroundColor: C.green800, alignItems: "center" },
  thCell: { color: "#ffffff", fontSize: 12, fontWeight: 700, paddingVertical: 10, paddingHorizontal: 10 },
  tr: { flexDirection: "row", borderTopWidth: 0.5, borderTopColor: C.boneDark, alignItems: "center" },
  trAlt: { backgroundColor: C.paper },
  tdCell: { fontSize: 12.5, paddingVertical: 11, paddingHorizontal: 10, color: C.ink },
  tdNameCell: { paddingVertical: 9, paddingHorizontal: 10 },
  tdNameText: { fontSize: 12.5, color: C.ink },
  tdFieldNote: { fontSize: 9.5, color: C.green600, fontWeight: 600, marginTop: 2 },
  colRank: { width: "12%" }, colName: { width: "46%" }, colScore: { width: "20%" }, colTier: { width: "22%" },

  // 평가 등급 범례 + 산정 기준 안내
  legendBox: {
    backgroundColor: C.paper, borderWidth: 0.5, borderColor: C.boneDark,
    borderRadius: 0, padding: 18, marginBottom: 28,
  },
  legendBoxTitle: { fontSize: 13, fontWeight: 700, color: C.green800, marginBottom: 11 },
  legendItemsRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  legendItem: { flexDirection: "row", alignItems: "center", width: "50%", marginBottom: 8, paddingRight: 10 },
  legendDot: { width: 8, height: 8, borderRadius: 0, marginRight: 6 },
  legendItemLabel: { fontSize: 12.5, fontWeight: 700 },
  legendItemRange: { fontSize: 11, color: C.inkSoft, marginLeft: 5 },
  legendNote: {
    fontSize: 11.5, color: C.inkSoft, lineHeight: 1.75,
    borderTopWidth: 0.5, borderTopColor: C.boneDark, paddingTop: 10,
  },

  // 목차 안내 박스
  noticeBox: { backgroundColor: C.sage100, borderRadius: 0, padding: 18 },
  noticeTitle: { fontSize: 15, fontWeight: 700, color: C.green800, marginBottom: 7 },
  noticeDesc: { fontSize: 12.5, color: C.inkSoft, lineHeight: 1.65 },

  // 국가 헤더 띠(2면 매칭 페이지용) — 1줄: 순위+국명 / 3줄(선택시): 분야뱃지
  countryHeadRow: { flexDirection: "row", flexWrap: "wrap", alignItems: "flex-end", marginBottom: 6 },
  countrySubRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  rankPill: {
    fontSize: 12, fontWeight: 700, color: "#ffffff", backgroundColor: C.green700, lineHeight: 1,
    paddingTop: 5, paddingBottom: 4, paddingHorizontal: 10, borderRadius: 0, marginRight: 12,
  },
  countryName: { fontSize: 26, fontWeight: 800, color: C.green900, lineHeight: 1.15, flexShrink: 1 },
  countryNameEn: { flex: 1, fontSize: 14, fontWeight: 600, color: C.green500, lineHeight: 1 },
  countryMatch: { flex: "none", textAlign: "right", fontSize: 18, fontWeight: 800, color: C.green700, lineHeight: 1 },
  matchedFieldRow: { flexDirection: "row", flexWrap: "wrap", marginBottom: 12 },
  matchedFieldTag: {
    fontSize: 10, fontWeight: 700, color: C.green700, backgroundColor: C.sage100,
    borderRadius: 0, paddingTop: 4, paddingBottom: 3, paddingHorizontal: 9, lineHeight: 1,
  },
  headRule: { borderBottomWidth: 1.5, borderBottomColor: C.green700, marginBottom: 18 },

  // 국가 상세 페이지(1면) 전용 헤더 카드
  countryHeadCard: {
    backgroundColor: C.green900, paddingVertical: 20, paddingHorizontal: 22, marginBottom: 18,
  },
  countryHeadMainRow: {
    flexDirection: "row", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap",
  },
  countryHeadNameGroup: {
    flexDirection: "row", alignItems: "baseline", flexShrink: 1, flexWrap: "wrap", paddingRight: 14,
  },
  rankPillCard: {
    fontSize: 11.5, fontWeight: 800, color: C.green900, backgroundColor: C.green300, lineHeight: 1,
    paddingTop: 5, paddingBottom: 4, paddingHorizontal: 10, borderRadius: 0, marginRight: 10,
  },
  countryNameCard: { fontSize: 26, fontWeight: 800, color: "#ffffff", lineHeight: 1.15 },
  countryNameEnCard: { fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.72)", marginLeft: 8, lineHeight: 1.15 },
  countryScoreCard: { flexShrink: 0, fontSize: 19, fontWeight: 800, color: "#ffffff", lineHeight: 1 },
  countryScoreCardSuffix: { fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.72)" },
  matchedFieldRowCard: { marginTop: 10 },
  matchedFieldTagCard: {
    fontSize: 10, fontWeight: 700, color: "#ffffff", backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 0, paddingTop: 4, paddingBottom: 3, paddingHorizontal: 9, lineHeight: 1,
  },

  // 스탯 5칸
  statStrip: { flexDirection: "row", marginBottom: 14 },
  statCell: { width: CONTENT_W / 5, alignItems: "center" },
  statVal: { fontSize: 20, fontWeight: 800, color: C.green700, lineHeight: 1 },
  statValYes: { color: C.green600 },
  statSuffix: { fontSize: 9, fontWeight: 600, color: C.green500 },
  statLabel: { fontSize: 10, fontWeight: 600, color: C.inkSoft, marginTop: 4, lineHeight: 1 },
  thinRule: { borderBottomWidth: 0.5, borderBottomColor: C.boneDark, marginBottom: 18 },

  // 풀와이드 섹션 제목 (좌측 바 + 제목)
  secHead: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  secBar: { width: 3.5, height: 15, backgroundColor: C.green700, marginRight: 10 },
  secTitle: { fontSize: 14, fontWeight: 800, color: C.green900 },
  secSrc: { fontSize: 8.5, color: C.inkSoft, marginLeft: 8 },
  secSrcWarn: { fontSize: 8.5, color: C.danger, marginLeft: 8 },

  // 기초 정보 세로 스택 (가독성 · 페이지 분리 방지)
  basicBox: {
    flexDirection: "column", backgroundColor: C.paper, borderRadius: 0,
    borderWidth: 0.5, borderColor: C.boneDark, paddingVertical: 6, paddingHorizontal: 16, marginBottom: 18,
  },
  basicCell: { paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: C.boneDark },
  basicCellLast: { borderBottomWidth: 0 },
  basicKey: { fontSize: 11, fontWeight: 700, color: C.green700, marginBottom: 3 },
  basicVal: { fontSize: 11.5, color: C.inkSoft },

  // 경제·ODA 풀와이드 표
  ecoRow: { position: "relative", height: 48, marginBottom: 0 },
  ecoLabel: { position: "absolute", left: 0, top: 8, fontSize: 12, fontWeight: 600, color: C.green800, lineHeight: 1 },
  ecoSrc: { position: "absolute", top: 9, fontSize: 8, color: C.inkSoft, lineHeight: 1 },
  ecoKrw: { position: "absolute", right: 0, top: 5, fontSize: 13.5, fontWeight: 700, color: C.ink, lineHeight: 1 },
  ecoUsd: { position: "absolute", right: 0, top: 23, fontSize: 9.5, color: C.inkSoft, lineHeight: 1 },
  ecoEmpty: { position: "absolute", right: 0, top: 8, fontSize: 10, color: C.inkSoft, lineHeight: 1 },
  ecoLine: { position: "absolute", left: 0, right: 0, bottom: 0, borderBottomWidth: 0.5, borderBottomColor: C.boneDark },
  ecoGroup: { marginBottom: 18 },

  // KOICA 누적
  koicaCumRow: { position: "relative", height: 24, marginBottom: 8 },
  koicaCumLabel: { position: "absolute", left: 0, top: 5, fontSize: 11, fontWeight: 700, color: C.green700, lineHeight: 1 },
  koicaCumBig: { position: "absolute", left: 66, top: 0, fontSize: 16, fontWeight: 800, color: C.green700, lineHeight: 1 },
  koicaCumMeta: { position: "absolute", right: 0, top: 5, fontSize: 9.5, color: C.inkSoft, lineHeight: 1 },

  // 도넛 영역 — 중앙 대형 배치 + 중앙 라벨 + 하단 2열 범례
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
  legendSw: { width: 11, height: 11, borderRadius: 0 },
  legendGridName: { flex: 1, fontSize: 12.5, color: C.inkSoft, marginLeft: 9, lineHeight: 1.2 },
  legendGridPct: { fontSize: 13.5, fontWeight: 800, color: C.green800, lineHeight: 1 },

  // 섹션별 메모칸 — 기초 국가 정보 / 경제 및 ODA 규모 / KOICA 지원 규모 뒤에 각각 배치.
  // 세 개가 같은 Page의 형제 요소로 flexGrow:1을 나눠 가져서, 페이지에 남는 여백을
  // 세 칸이 똑같이 나눠 가지며 자동으로 늘어난다 (고정 높이 아님).
  memoGroup: { flexGrow: 1, flexDirection: "column", marginTop: 4, marginBottom: 14 },
  memoGroupLabel: { fontSize: 8.5, fontWeight: 700, color: C.green700, marginBottom: 4 },
  memoGroupBox: { flexGrow: 1, minHeight: 26, borderWidth: 1, borderColor: C.green700, borderRadius: 0 },

  // ── 매칭 페이지 (막대 두껍게 + 글자 키움) ──
  matchTierNote: { fontSize: 13.5, fontWeight: 700, marginBottom: 20 },
  axisGroup: { marginBottom: 16 },
  axisRow: { position: "relative", height: 28, marginBottom: 9 },
  axisLabel: { position: "absolute", left: 0, top: 5, fontSize: 13, color: C.inkSoft, fontWeight: 600, lineHeight: 1 },
  axisTrack: { position: "absolute", left: 150, top: 4, height: 17, backgroundColor: C.boneDark, borderRadius: 0 },
  axisFill: { height: 17, borderRadius: 0 },
  axisVal: { position: "absolute", right: 0, top: 4, fontSize: 14, fontWeight: 800, color: C.green700, lineHeight: 1 },

  reasonItem: { flexDirection: "row", marginBottom: 12, paddingLeft: 2 },
  reasonCheck: { width: 20, fontSize: 12, color: C.green700, fontWeight: 700 },
  reasonText: { flex: 1, fontSize: 13, color: C.inkSoft, lineHeight: 1.65 },
  reasonEmpty: { fontSize: 13, color: C.inkSoft, opacity: 0.8 },

  sourceBox: { marginTop: 14, borderTopWidth: 0.5, borderTopColor: C.boneDark, paddingTop: 20 },
  sourceText: { fontSize: 12.5, color: C.inkSoft, lineHeight: 1.9 },
});

function todayKo() {
  const d = new Date();
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}
function barColor(s) {
  if (s >= 70) return C.green700;
  if (s >= 45) return C.green500;
  return C.green300;
}

// 평가 등급 범례 (4단계) + 점수 산정 기준 안내
function TierLegend() {
  return (
    <View style={styles.legendBox}>
      <Text style={styles.legendBoxTitle}>평가 등급 안내 (4단계)</Text>
      <View style={styles.legendItemsRow}>
        {TIER_ORDER.map((t) => (
          <View key={t} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: TIER_COLOR[t] }]} />
            <Text style={[styles.legendItemLabel, { color: TIER_COLOR[t] }]}>{TIER_LABEL[t]}</Text>
            <Text style={styles.legendItemRange}>{TIER_RANGE[t]}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.legendNote}>
        매칭 점수는 분야 적합도·기후-기술 적합도·기후 시급성·외교 친밀도·개발 필요도·수출 연계성·
        보유기술 적합도 7개 지표를 사용자 유형(기업·공공기관·개인)별 가중치로 종합한 결과입니다.
        같은 국가라도 선택한 분야나 사용자 유형에 따라 점수·순위가 달라질 수 있습니다.
      </Text>
    </View>
  );
}

// 도넛 부채꼴 path (arc 대신 폴리곤 근사 → react-pdf에서 안정적)
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

// 도넛 차트 (SVG)
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

// 모든 페이지 공통 하단 푸터 — 표지 하단 브랜드와 동일한 스타일(선+브랜드명), 흰 배경용 진초록 톤
function PageFooter() {
  return (
    <View
      style={{
        position: "absolute", bottom: 40, left: 50, right: 50,
        borderTopWidth: 1, borderTopColor: C.green800, paddingTop: 10,
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
      }}
      fixed
    >
      <Text style={{ fontSize: 8.5, color: C.green800, fontWeight: 700, letterSpacing: 0.5 }}>
        {"BAOBAB MATCH \u00B7 \uBC14\uC624\uBC25\uB9E4\uCE58"}
      </Text>
      <Text
        style={{ fontSize: 8.5, color: C.green800, fontWeight: 700 }}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}
// 풀와이드 섹션 제목
function SecHead({ title, src, warn }) {
  return (
    <View style={styles.secHead}>
      <View style={styles.secBar} />
      <Text style={styles.secTitle}>{title}</Text>
      {src ? <Text style={warn ? styles.secSrcWarn : styles.secSrc}>{src}</Text> : null}
    </View>
  );
}

// 섹션 뒤에 붙는 메모칸 — 라벨 + 초록 테두리 박스 (flexGrow로 남는 공간만큼 자동 확장)
function SectionMemo() {
  return (
    <View style={styles.memoGroup}>
      <Text style={styles.memoGroupLabel}>메모</Text>
      <View style={styles.memoGroupBox} />
    </View>
  );
}

// 경제·ODA 한 줄
function EcoRow({ label, v, defaultSrc, isLast }) {
  let src = null;
  if (v) {
    const source = v.source || defaultSrc;
    const yr = v.year;
    src = yr && source ? `(${yr} · ${source})` : yr ? `(${yr})` : source ? `(${source})` : null;
  }
  const labelW = label.length * 12 + 4; // 출처 x위치용 대략 폭
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
        <Text style={styles.ecoEmpty}>아직 정보가 없습니다</Text>
      )}
      {!isLast ? <View style={styles.ecoLine} /> : null}
    </View>
  );
}

// 매칭 막대 한 줄 (두껍게)
const AXIS_TRACK_W = 270;
function AxisBar({ label, score }) {
  const pct = Math.max(0, Math.min(100, score ?? 0));
  return (
    <View style={styles.axisRow}>
      <View style={[styles.axisTrack, { width: AXIS_TRACK_W }]}>
        <View style={[styles.axisFill, { width: (AXIS_TRACK_W * pct) / 100, backgroundColor: barColor(pct) }]} />
      </View>
      <Text style={styles.axisLabel}>{label}</Text>
      <Text style={styles.axisVal}>{Math.round(pct)}</Text>
    </View>
  );
}

// ── 국가 상세 (페이지 1) ──
function CountryDetailPage({ r, country, rankLabel, field, showMatchedField }) {
  const eco = country?.economy || {};
  const cum = country?.koicaCumulative || {};
  const sectors = ((country?.koica && country.koica.sectors) || []).slice().sort((a, b) => b.percent - a.percent);

  const stats = [
    { value: country?.climateScore, label: "기후 취약도", suffix: "/100" },
    { value: country?.mainClimateIssue, label: "주요 기후문제" },
    { value: country?.priorityPartner ? "Yes" : "No", label: "중점협력국", yes: country?.priorityPartner },
    { value: country?.koreaOdaHistory ? "Yes" : "No", label: "한국 ODA 이력", yes: country?.koreaOdaHistory },
    { value: country?.diplomacyScore, label: "외교 친밀도", suffix: "/100" },
  ];
  const basics = [
    ["수도", country?.capital || "—"],
    ["인구", country?.population || "—"],
    ["언어", country?.language || "—"],
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

  return (
    <Page size="A4" style={styles.page} break>
      <View style={styles.runHeader} fixed>
        <Text>바오밥매치 국가 분석 보고서</Text>
        <Text>{field} 분야</Text>
      </View>

      {/* 헤더 카드 — 순위·국명·영문명·매칭점수를 한 줄에, 분야는 그 아래 줄에 표시 */}
      <View style={styles.countryHeadCard}>
        <View style={styles.countryHeadMainRow}>
          <View style={styles.countryHeadNameGroup}>
            {rankLabel ? <Text style={styles.rankPillCard}>{rankLabel}</Text> : null}
            <Text style={styles.countryNameCard}>{country.name}</Text>
            <Text style={styles.countryNameEnCard}>{country.nameEn || ""}</Text>
          </View>
          <Text style={styles.countryScoreCard}>
            매칭 {r.matchScore.toFixed(1)}
            <Text style={styles.countryScoreCardSuffix}>점</Text>
          </Text>
        </View>
        {showMatchedField && r.matchedField ? (
          <View style={styles.matchedFieldRowCard}>
            <Text style={styles.matchedFieldTagCard}>{r.matchedField} 기준</Text>
          </View>
        ) : null}
      </View>

      {/* 스탯 5칸 */}
      <View style={styles.statStrip}>
        {stats.map((s) => (
          <View key={s.label} style={styles.statCell}>
            <Text style={[styles.statVal, s.yes && styles.statValYes]}>
              {s.value == null ? "—" : s.value}
              {s.suffix && s.value != null ? <Text style={styles.statSuffix}>{s.suffix}</Text> : null}
            </Text>
            <Text style={styles.statLabel}>{s.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.thinRule} />

      {/* 기초 정보 — 세로 스택 (분리 방지) */}
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
      <SectionMemo />

      {/* 경제·ODA — 풀와이드 표 */}
      <View wrap={false}>
        <SecHead title="경제 및 ODA 규모" />
        <View style={styles.ecoGroup}>
          {ecoRows.map(([label, v, ds], i) => (
            <EcoRow key={label} label={label} v={v} defaultSrc={ds} isLast={i === ecoRows.length - 1} />
          ))}
        </View>
      </View>
      <SectionMemo />

      {/* KOICA — 누적 + 도넛 중앙 + 범례 (통째로 다음 페이지로 넘어가도록 wrap=false) */}
      <View wrap={false}>
        <SecHead title="한국국제협력단(KOICA) 지원 규모" />
        {cum.total ? (
          <View style={styles.koicaCumRow}>
            <Text style={styles.koicaCumLabel}>누적 지원</Text>
            <Text style={styles.koicaCumBig}>{cum.total}</Text>
            <Text style={styles.koicaCumMeta}>
              {cum.startYear}~{cum.latestYear} · 최근 약 {cum.latest}
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
        ) : null}
      </View>
      <SectionMemo />

      <PageFooter />
    </Page>
  );
}

// ── 매칭 (페이지 2) ──
function MatchPage({ r, country, rankLabel, field, reportKind = "recommend", showMatchedField }) {
  const axisEntries = Object.entries(r.axes || {}).filter(([, v]) => v && typeof v.score === "number");
  const tierNote = r.tier === "weak" ? WEAK_TIER_NOTE[reportKind] : r.tierNote;
  const reasonEmptyText = WEAK_REASON_EMPTY[reportKind];
  return (
    <Page size="A4" style={styles.page} break>
      <View style={styles.runHeader} fixed>
        <Text>바오밥매치 국가 분석 보고서</Text>
        <Text>{field} 분야</Text>
      </View>

      <View style={styles.countryHeadRow}>
        {rankLabel ? <Text style={styles.rankPill}>{rankLabel}</Text> : null}
        <Text style={[styles.countryName, { fontSize: 21 }]}>{country.name} — 매칭 분석</Text>
      </View>
      {showMatchedField && r.matchedField ? (
        <View style={styles.matchedFieldRow}>
          <Text style={styles.matchedFieldTag}>{r.matchedField} 기준</Text>
        </View>
      ) : null}
      <View style={styles.headRule} />

      <SecHead title="매칭 적합도 분석" />
      <Text style={[styles.matchTierNote, { color: TIER_COLOR[r.tier] }]}>{tierNote}</Text>
      <View style={styles.axisGroup}>
        {axisEntries.map(([key, v]) => (
          <AxisBar key={key} label={AXIS_LABEL[key] || key} score={v.score} />
        ))}
      </View>

      <SecHead title="추천 근거" />
      {r.reasons && r.reasons.length > 0 ? (
        r.reasons.map((reason, idx) => (
          <View key={idx} style={styles.reasonItem}>
            <Text style={styles.reasonCheck}>{String(idx + 1).padStart(2, "0")}</Text>
            <Text style={styles.reasonText}>{reason}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.reasonEmpty}>{reasonEmptyText}</Text>
      )}

      <PageFooter />
    </Page>
  );
}

export default function MatchReportPDF({
  ranked,
  countries,
  field,
  reportTitle = "아프리카 협력국가\n맞춤 추천 결과",
  subtitle = "공공데이터 기반 객관적 지표와 AI 추천 모델을 통해\n가장 적합한 협력 국가를 분석한 결과입니다.",
  showRanking = true,
  rankingTitle = "추천 순위 요약",
  reportKind = "recommend", // "recommend" | "favorite" — 참고 등급 문구 분기용
  showMatchedField = false, // 관심분야를 2개 이상 골랐을 때만 true — 국가별로 어떤 분야 기준인지 표시
}) {
  console.log("🔵 MatchReportPDF 진입!", { ranked: ranked?.length, countries: !!countries });
  const shownField = field || "전체";

  return (
    <Document
      title={`바오밥매치 국가 분석 보고서 - ${shownField}`}
      author="바오밥매치"
      subject="아프리카 협력국가 분석 결과"
    >
      {/* 표지 */}
      <Page size="A4" style={styles.cover}>
        <Text style={styles.coverBrand}>BAOBAB MATCH · 국가 분석 보고서</Text>
        <Text style={styles.coverTitle}>{reportTitle}</Text>
        <Text style={styles.coverSub}>{subtitle}</Text>
        <View style={styles.coverMetaBox}>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaKey}>분석 분야</Text>
            <Text style={styles.coverMetaVal}>{shownField}</Text>
          </View>
          <View style={styles.coverMetaRow}>
            <Text style={styles.coverMetaKey}>발행일</Text>
            <Text style={styles.coverMetaVal}>{todayKo()}</Text>
          </View>
        </View>

        {/* 표지 하단 브랜드 */}
        <View style={{
          position: "absolute", bottom: 40, left: 56, right: 56,
          borderTopWidth: 1, borderTopColor: C.bone, paddingTop: 10,
        }}>
          <Text style={{ fontSize: 8.5, color: C.green300, fontWeight: 600, letterSpacing: 0.5 }}>
            BAOBAB MATCH · 바오밥매치
          </Text>
        </View>
      </Page>

      {/* 목차 */}
      <Page size="A4" style={styles.page}>
        <View style={styles.runHeader} fixed>
          <Text>바오밥매치 국가 분석 보고서</Text>
          <Text>{shownField} 분야</Text>
        </View>

        <Text style={styles.sectionTag}>SUMMARY</Text>
        <Text style={styles.h2}>분석 개요</Text>
        <View style={styles.summaryBox}>
          <Text style={styles.paragraph}>
            <Text style={styles.bold700}>{shownField}</Text> 분야를 기준으로,
            아프리카 각국의 분야 적합도·기후 적합도·기후 취약도·외교 친밀도·
            개발 필요도 등을 종합 분석한 결과입니다. 총 {ranked.length}개 국가를
            담았으며, 각 점수는 IMF·KOICA·World Bank CCKP·외교부 등 공신력 있는
            기관의 공개 데이터를 가공한 객관적 지표에 기반합니다.
            {showMatchedField ? " 여러 분야를 선택하신 경우, 국가마다 가장 잘 맞는 분야를 함께 표시해 드립니다." : ""}
          </Text>
        </View>

        {/* 평가 등급 안내는 랭킹 표보다 먼저 배치 — 표 길이(즐겨찾기 수 등)에 따라
            페이지 하단으로 밀려 큰 여백이 생기는 것을 방지하고, 표를 보기 전에
            등급 기준부터 안내하는 편이 읽는 순서로도 자연스럽습니다. */}
        <View wrap={false}>
          <TierLegend />
        </View>

        {showRanking && (
          <View break>
            <Text style={styles.sectionTag}>RANKING</Text>
            <Text style={styles.h2}>{rankingTitle}</Text>
            <View style={styles.table}>
              <View style={styles.trHead}>
                <Text style={[styles.thCell, styles.colRank]}>순위</Text>
                <Text style={[styles.thCell, styles.colName]}>국가</Text>
                <Text style={[styles.thCell, styles.colScore]}>매칭 점수</Text>
                <Text style={[styles.thCell, styles.colTier]}>평가</Text>
              </View>
              {ranked.map((r, i) => {
                const cc = countries[r.id];
                return (
                  <View key={r.id} wrap={false} style={[styles.tr, i % 2 === 1 && styles.trAlt]}>
                    <Text style={[styles.tdCell, styles.colRank]}>{i + 1}순위</Text>
                    <View style={[styles.tdNameCell, styles.colName]}>
                      <Text style={styles.tdNameText}>
                        {cc.name} {cc.nameEn ? `(${cc.nameEn})` : ""}
                      </Text>
                      {showMatchedField && r.matchedField ? (
                        <Text style={styles.tdFieldNote}>{r.matchedField} 기준</Text>
                      ) : null}
                    </View>
                    <Text style={[styles.tdCell, styles.colScore]}>{r.matchScore.toFixed(1)} / 100</Text>
                    <Text style={[styles.tdCell, styles.colTier, { color: TIER_COLOR[r.tier], fontWeight: 700 }]}>
                      {TIER_LABEL[r.tier] || "참고"}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}

        <View wrap={false}>
          <Text style={styles.sectionTag}>DETAILS</Text>
          <View style={styles.noticeBox}>
            <Text style={styles.noticeTitle}>{NOTICE_COPY[reportKind].title}</Text>
            <Text style={styles.noticeDesc}>
              {NOTICE_COPY[reportKind].desc.map((line, idx) => (
                <Text key={idx}>
                  {line}
                  {idx < NOTICE_COPY[reportKind].desc.length - 1 ? "\n" : ""}
                </Text>
              ))}
            </Text>
          </View>
        </View>

        <PageFooter />
      </Page>

      {/* 국가별 2면 (상세 + 매칭) */}
      {ranked.map((r, i) => {
        const cc = countries[r.id];
        const rankLabel = showRanking ? `${i + 1}순위` : null;
        return [
          <CountryDetailPage key={`${r.id}-d`} r={r} country={cc} rankLabel={rankLabel} field={shownField} showMatchedField={showMatchedField} />,
          <MatchPage key={`${r.id}-m`} r={r} country={cc} rankLabel={rankLabel} field={shownField} reportKind={reportKind} showMatchedField={showMatchedField} />,
        ];
      })}

      {/* 출처 */}
      <Page size="A4" style={styles.page} break>
        <View style={styles.runHeader} fixed>
          <Text>바오밥매치 국가 분석 보고서</Text>
          <Text>{shownField} 분야</Text>
        </View>
        <Text style={styles.h2}>데이터 출처 및 유의사항</Text>
        <View style={styles.sourceBox}>
          <Text style={styles.sourceText}>
            인구·언어·수도 외교부 「국가(지역)별 일반현황」(2025.12 갱신) · GDP·1인당 GDP 외교부
            「국가(지역)별 경제현황」(2025.09 갱신) · ODA 규모(순수원액·수원국·양자·한국) KOICA
            「협력국 통합개발지표」(2025.07 갱신) · KOICA 분야별·누적 지원 KOICA 「국가별 지원실적」
            (2025.11 갱신). 모든 데이터는 공공데이터포털(data.go.kr) 공개 자료이며, 갱신일은
            포털 기준입니다. 데이터 기준연도는 각 항목에 별도 표기되어 있습니다.{"\n\n"}
            본 보고서의 매칭 점수는 공개 데이터를 가공한 규칙 기반 추천 결과로, 실제 협력
            의사결정 시 참고 자료로 활용하시기 바랍니다. 수치는 데이터 갱신 시점에 따라 달라질 수 있습니다.{"\n\n"}
            기후 취약도는 World Bank 기후 API(SSP3-7.0 시나리오, 2040~2059년 전망)의 기온 상승폭(40%)
            ·강수 변화율(30%)·극한강수 지표(30%)를 가중합해 30~100점으로 환산한 값입니다. 
            외교 친밀도는 외교부 기관 진출현황(40%)·외교관계(30%)·무역관계(30%)를 가중합하고, KOICA 중점협력국은 +20점을 가산한 값입니다.{"\n\n"}
            점수 산정 기준이나 데이터에 대해 궁금한 점이 있으시면 아래 사이트로 문의해 주세요.
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