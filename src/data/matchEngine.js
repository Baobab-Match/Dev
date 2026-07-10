// ============================================================
// 바오밥매치 — 매칭 엔진 (규칙 기반 가중 매칭)
// ------------------------------------------------------------
// 사용자 프로필(분야/기술/수출경험/관심지역/목적)과 각 국가 데이터를
// 6개 축으로 점수화하여 0~100점 매칭 점수를 계산합니다.
// 모든 점수에는 근거(reasons)가 함께 붙어 "왜 추천됐는지" 설명 가능합니다.
//
// 설계 원칙
//  - 순수 함수: 같은 입력 → 같은 출력 (재현성, 테스트 용이)
//  - 데이터는 이미 프론트에 존재 (countries_base + countries_scores 병합본)
//  - 사용자 유형(기업/공공기관/개인)별로 가중치를 다르게 적용
//  - profile.field 는 문자열 1개 또는 배열(여러 개) 모두 허용.
//    여러 개면 "그 나라와 가장 잘 맞는 분야 1개" 기준으로 점수를 매김(OR 방식).
// ============================================================

// ── 1. 분야(CATEGORIES) → 기후 이슈 적합도 매핑 ──────────────
// 국가의 mainClimateIssue 는 "폭염" 또는 "홍수" 두 종류.
// 사용자가 고른 분야가 어떤 기후 이슈에 잘 맞는지 0~1 로 표현.
const FIELD_CLIMATE_FIT = {
  "가뭄":                       { 폭염: 1.0, 홍수: 0.1 },
  "물 부족 및 정수 기술":        { 폭염: 1.0, 홍수: 0.3 },
  "홍수 및 재해 대응 인프라":     { 폭염: 0.1, 홍수: 1.0 },
  "농업 및 식량안보":            { 폭염: 0.8, 홍수: 0.6 },
  "기후변화 대응 및 탄소감축":    { 폭염: 0.7, 홍수: 0.7 },
  "친환경 교통 및 인프라":        { 폭염: 0.5, 홍수: 0.6 },
  "재생에너지 및 에너지 전환":    { 폭염: 0.9, 홍수: 0.4 },
  "자원순환 및 친환경 소재":      { 폭염: 0.5, 홍수: 0.5 },
  "교육 및 역량 강화":           { 폭염: 0.5, 홍수: 0.5 },
  "사회적 갈등 및 강제이주":      { 폭염: 0.6, 홍수: 0.6 },
};

// ── 2. 분야(CATEGORIES) → KOICA 섹터 매핑 ───────────────────
// 국가의 koica.sectors 는 보건/교육/농림수산/기술환경에너지/공공행정 등.
// 사용자 분야가 어떤 KOICA 섹터와 연관되는지(복수 가능).
const FIELD_KOICA_SECTORS = {
  "가뭄":                       ["기술환경에너지", "농림수산"],
  "물 부족 및 정수 기술":        ["기술환경에너지", "보건"],
  "홍수 및 재해 대응 인프라":     ["기술환경에너지", "공공행정"],
  "농업 및 식량안보":            ["농림수산"],
  "기후변화 대응 및 탄소감축":    ["기술환경에너지"],
  "친환경 교통 및 인프라":        ["기술환경에너지", "공공행정"],
  "재생에너지 및 에너지 전환":    ["기술환경에너지"],
  "자원순환 및 친환경 소재":      ["기술환경에너지"],
  "교육 및 역량 강화":           ["교육"],
  "사회적 갈등 및 강제이주":      ["공공행정", "긴급구호"],
};

// ── 3. 자유서술 텍스트용 키워드 사전 (길 A) ─────────────────
// 보유기술명·가입목적 텍스트에서 키워드를 찾아 기후 이슈로 연결.
const KEYWORD_CLIMATE = [
  { climate: "폭염", words: ["물", "정수", "상수도", "급수", "가뭄", "냉방", "태양광", "태양열", "에너지", "전력", "발전", "관개", "식수"] },
  { climate: "홍수", words: ["홍수", "배수", "치수", "제방", "방재", "우수", "하천", "댐", "범람", "재해", "방수"] },
];

// ── 4. 보유기술 자유텍스트 → 바오밥매치 분야 추론 사전 (길 B) ─
// 사용자가 입력한 보유기술/가입목적 텍스트에서 산업 어휘를 찾아
// 어떤 '분야(field)'에 해당하는지 추론한다. 키워드 원천:
// 한아프리카재단 「아프리카 250대 기업」(2022) 의 업종·취급분야 어휘 +
// 기후테크 도메인 보강어. (설명가능·저비용: LLM 임베딩 대신 사전 방식)
const TECH_FIELD_KEYWORDS = {
  "재생에너지 및 에너지 전환": [
    "재생에너지", "태양광", "태양열", "풍력", "수력", "발전", "전력", "전기",
    "에너지", "배터리", "ESS", "그리드", "송전", "변전", "전기장비",
  ],
  "물 부족 및 정수 기술": [
    "정수", "상수도", "급수", "식수", "물", "수처리", "담수", "관개",
    "수도", "하수", "펌프", "우물", "지하수",
  ],
  "홍수 및 재해 대응 인프라": [
    "홍수", "배수", "치수", "제방", "방재", "우수", "하천", "댐",
    "범람", "재해", "방수", "방조", "토목", "건설", "시멘트", "콘크리트",
    "건축자재", "건설자재",
  ],
  "농업 및 식량안보": [
    "농업", "농산물", "식량", "작물", "종자", "비료", "농기계",
    "식품", "유제품", "커피", "설탕", "과일", "통조림", "축산", "수산", "어업",
  ],
  "기후변화 대응 및 탄소감축": [
    "탄소", "온실가스", "배출권", "감축", "기후", "환경", "ESG", "녹색",
  ],
  "친환경 교통 및 인프라": [
    "교통", "자동차", "전기차", "오토바이", "차량", "물류", "운수",
    "철도", "항만", "도로", "모빌리티",
  ],
  "자원순환 및 친환경 소재": [
    "재활용", "폐기물", "자원순환", "순환", "원료재생", "포장", "골판지",
    "펄프", "용기", "친환경소재", "화학제품", "플라스틱",
  ],
  "교육 및 역량 강화": [
    "교육", "훈련", "역량", "직업훈련", "이러닝", "에듀", "학교",
    "정보통신", "통신", "인터넷", "ICT", "소프트웨어", "디지털",
  ],
  "기타 광물·자원": [
    "광업", "채굴", "금", "백금", "니켈", "구리", "석탄", "석유",
    "원유", "가스", "천연가스", "광물", "윤활유",
  ],
};

// 보유기술/목적 텍스트 → 추론된 분야 집합 (가장 많이 매칭된 순)
function inferFieldsFromText(freeText) {
  if (!freeText) return [];
  const scoreByField = {};
  for (const [field, words] of Object.entries(TECH_FIELD_KEYWORDS)) {
    let hits = 0;
    for (const w of words) if (freeText.includes(w)) hits++;
    if (hits > 0) scoreByField[field] = hits;
  }
  return Object.entries(scoreByField)
    .sort((a, b) => b[1] - a[1])
    .map(([field, hits]) => ({ field, hits }));
}

// "앞으로 기온이 1.38℃ 올라..."        → { tempRise: 1.38 }
// "앞으로 강수량이 15.6% 늘어..."       → { precipRise: 15.6 }
// "...폭염과 물 부족이 우려됩니다."      → { hazards: ["폭염","물부족"] }
function parseClimateReason(country) {
  const txt = country?.climateReason || "";
  const out = { tempRise: null, precipRise: null, hazards: [] };

  const t = txt.match(/기온이\s*(\d+(?:\.\d+)?)\s*℃/);
  if (t) out.tempRise = parseFloat(t[1]);

  const p = txt.match(/강수량이\s*(\d+(?:\.\d+)?)\s*%/);
  if (p) out.precipRise = parseFloat(p[1]);

  // 텍스트에 직접 언급된 복합 위험 키워드 수집
  const HAZARD_WORDS = ["폭염", "물 부족", "가뭄", "홍수", "집중호우", "강수"];
  for (const w of HAZARD_WORDS) {
    if (txt.includes(w)) out.hazards.push(w.replace(/\s/g, ""));
  }
  return out;
}

// 기온 상승폭 → 0~1 강도 (1.3℃ 이하 0, 1.9℃ 이상 1, 선형)
function tempIntensity(tempRise) {
  if (tempRise == null) return null;
  return clamp01((tempRise - 1.3) / (1.9 - 1.3));
}
// 강수 증가율 → 0~1 강도 (11% 이하 0, 16% 이상 1, 선형)
function precipIntensity(precipRise) {
  if (precipRise == null) return null;
  return clamp01((precipRise - 11) / (16 - 11));
}
const clamp01 = (v) => Math.max(0, Math.min(1, v));

// ── 유틸: 문자열에서 숫자만 파싱 ────────────────────────────
// "4,340 USD" → 4340,  "32,400,000명" → 32400000
function parseNum(str) {
  if (str == null) return null;
  if (typeof str === "number") return str;
  const m = String(str).replace(/,/g, "").match(/-?\d+(\.\d+)?/);
  return m ? parseFloat(m[0]) : null;
}

// 0~100 범위로 자르기
const clamp = (v, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, v));

// profile.field 를 항상 배열로 정규화 ("" / null 등은 제거)
function normalizeFields(profile) {
  const raw = profile?.field ?? profile?.interest;
  const arr = Array.isArray(raw) ? raw : [raw];
  return arr.filter(Boolean);
}

// ── 유형별 가중치 (합 = 1.0) ────────────────────────────────
// company : 사업성 — 분야·기술·수출경험 비중 ↑
// gov     : 정책   — 기후 시급성·외교 기반 비중 ↑
// general : 정보탐색 — 균형
// techMatch: 보유기술 자유텍스트 → 분야 추론 적합도 (기업/개인 위주)
const WEIGHTS = {
  company: { field: 0.24, climateFit: 0.18, climateScore: 0.10, diplomacy: 0.13, develop: 0.09, export: 0.13, techMatch: 0.13 },
  gov:     { field: 0.18, climateFit: 0.18, climateScore: 0.24, diplomacy: 0.24, develop: 0.10, export: 0.00, techMatch: 0.06 },
  general: { field: 0.22, climateFit: 0.18, climateScore: 0.18, diplomacy: 0.18, develop: 0.14, export: 0.00, techMatch: 0.10 },
};

// ── 점수대별 등급 + 안내 문구 ───────────────────────────────
// 상위 3개를 모두 보여주되, 점수가 낮으면 솔직하게 알려준다.
export function matchTier(score) {
  if (score >= 75) return { tier: "strong", tierNote: "조건에 매우 잘 맞는 국가입니다." };
  if (score >= 60) return { tier: "good",   tierNote: "여러 조건에서 적합한 국가입니다." };
  if (score >= 45) return { tier: "fair",   tierNote: "일부 조건에서 적합한 국가입니다." };
  return { tier: "weak", tierNote: "이 분야에 특별히 부합하는 국가가 많지 않아, 종합 점수 기준 상대적으로 가까운 후보입니다." };
}
function scoreField(country, field) {
  const sectors = country?.koica?.sectors || [];
  const want = FIELD_KOICA_SECTORS[field] || [];
  if (want.length === 0 || sectors.length === 0) return { score: 40, reason: null };
  // 해당 분야와 연관된 KOICA 섹터들의 비중 합
  let pct = 0;
  for (const s of sectors) {
    if (want.includes(s.name)) pct += (s.percent || 0);
  }
  // 비중 25% 이상이면 만점에 가깝게 (스케일링)
  const score = clamp((pct / 25) * 100);
  const reason = pct > 0
    ? `KOICA ${want.join("·")} 분야 비중 ${pct.toFixed(1)}% — 한국이 이 분야로 지원해온 협력 채널이 이미 있습니다.`
    : null;
  return { score, reason };
}

// ── 축 ②: 기후-기술 적합도 (분야 + 복합위험 + 자유서술 키워드) ─
// 어떤 분야가 어떤 복합위험에 직접 맞는지: 텍스트에 그 위험이 함께
// 언급되면(예: 폭염국의 "물 부족") 해당 분야 적합도를 끌어올린다.
const FIELD_HAZARD_BOOST = {
  "물 부족 및 정수 기술":  ["물부족", "가뭄"],
  "가뭄":                 ["물부족", "가뭄", "폭염"],
  "농업 및 식량안보":      ["물부족", "가뭄"],
  "재생에너지 및 에너지 전환": ["폭염"],
  "홍수 및 재해 대응 인프라": ["홍수", "집중호우", "강수"],
};

function scoreClimateFit(country, field, freeText) {
  const issue = country?.mainClimateIssue; // "폭염" | "홍수"
  if (!issue) return { score: 50, reason: null };

  // (a) 분야 기반 적합도
  const fitMap = FIELD_CLIMATE_FIT[field] || {};
  let fit = fitMap[issue] != null ? fitMap[issue] : 0.5;

  // (b) 복합위험 보정 — climateReason 에 분야와 맞는 위험이 함께 있으면 가산
  const { hazards } = parseClimateReason(country);
  let hazardHit = false;
  const wantHazards = FIELD_HAZARD_BOOST[field] || [];
  if (wantHazards.some((h) => hazards.includes(h))) {
    fit = Math.min(1.0, fit + 0.25);
    hazardHit = true;
  }

  // (c) 자유서술 키워드 보정 — 텍스트가 국가 기후이슈와 맞으면 가산
  if (freeText) {
    for (const entry of KEYWORD_CLIMATE) {
      const hit = entry.words.some((w) => freeText.includes(w));
      if (hit && entry.climate === issue) {
        fit = Math.min(1.0, fit + 0.2);
      }
    }
  }
  const score = clamp(fit * 100);
  // 강점일 때(70+)만 근거로 노출.
  let reason = null;
  if (score >= 70) {
    if (hazardHit && country?.climateReason) {
      reason = `${country.climateReason} 해당 분야 기술이 직접 도움이 됩니다.`;
    } else if (country?.climateReason) {
      reason = `${issue} 위험 — ${country.climateReason} 해당 분야 기술이 직접 도움이 됩니다.`;
    } else {
      reason = `주요 기후문제가 '${issue}'라 해당 분야 기술 수요가 높습니다.`;
    }
  }
  return { score, reason };
}

// 선택한 분야가 여러 개면, "field 축 + climateFit 축"을 합쳐서 그 나라와
// 가장 잘 맞는 분야 1개를 고른다(matchedField). 이후 두 축 모두 같은
// 분야를 기준으로 계산해서 "왜 이 분야로 뽑혔는지" 설명이 일관되게 한다.
function pickBestField(country, fields, freeText, w) {
  if (fields.length === 0) {
    return {
      matchedField: null,
      fieldAxis: scoreField(country, ""),
      climateFitAxis: scoreClimateFit(country, "", freeText),
    };
  }
  let best = null;
  for (const f of fields) {
    const fieldAxis = scoreField(country, f);
    const climateFitAxis = scoreClimateFit(country, f, freeText);
    const combined = fieldAxis.score * w.field + climateFitAxis.score * w.climateFit;
    if (!best || combined > best.combined) {
      best = { matchedField: f, fieldAxis, climateFitAxis, combined };
    }
  }
  return best;
}

// ── 축 ③: 기후 시급성 (climateScore + 기온/강수 정량 보정) ──
// climateScore 가 기본. 거기에 climateReason 의 기온 상승폭(또는
// 강수 증가율)이 크면 최대 +12점까지 가산해 "지금 더 급한 나라"를 띄운다.
function scoreClimateUrgency(country) {
  const s = country?.climateScore;
  if (s == null) return { score: 50, reason: null };

  const { tempRise, precipRise } = parseClimateReason(country);
  // 폭염국은 기온, 홍수국은 강수 강도를 사용 (둘 다 있으면 큰 쪽)
  const intensity = Math.max(
    tempIntensity(tempRise) ?? 0,
    precipIntensity(precipRise) ?? 0
  );
  const bonus = intensity * 12; // 최대 +12
  const score = clamp(s + bonus);

  let reason = null;
  if (score >= 70) {
    if (tempRise != null) {
      reason = `기후 취약도 ${s}점 · 기온 +${tempRise}℃ 전망 — 기후 대응이 시급해 협력 우선순위가 높습니다.`;
    } else if (precipRise != null) {
      reason = `기후 취약도 ${s}점 · 강수 +${precipRise}% 전망 — 홍수 대응이 시급해 협력 우선순위가 높습니다.`;
    } else {
      reason = `기후 취약도 ${s}점 — 기후 대응이 시급해 협력 우선순위가 높습니다.`;
    }
  }
  return { score, reason };
}

// ── 축 ④: 외교 기반 (diplomacyScore 그대로) ────────────────
function scoreDiplomacy(country) {
  const s = country?.diplomacyScore;
  if (s == null) return { score: 50, reason: null };
  const extra = country?.priorityPartner ? " · 중점협력국" : "";
  const reason = s >= 70
    ? `외교 친밀도 ${s}점${extra} — 한국과 우호 관계가 깊어 협력이 원활합니다.`
    : (country?.priorityPartner ? "한국 중점협력국 — 정부 차원의 협력 우선 대상입니다." : null);
  return { score: clamp(s), reason };
}

// ── 축 ⑤: 개발 필요도 (1인당 GDP, 종 모양) ─────────────────
// 너무 낮으면 실행역량 부족, 너무 높으면 원조 필요성 낮음.
// 1,000~4,000 USD 구간이 최고점이 되도록 설계.
function scoreDevelopment(country) {
  const gdp = parseNum(country?.economy?.gdpPerCapita?.usd);
  if (gdp == null) return { score: 50, reason: null };
  const PEAK_LO = 1000, PEAK_HI = 4000;
  let score, label, why;
  if (gdp >= PEAK_LO && gdp <= PEAK_HI) {
    score = 100;
    label = "협력 적정 소득 구간";
    why = "기술 도입 여력과 개발 수요가 균형을 이룹니다.";
  } else if (gdp < PEAK_LO) {
    score = clamp((gdp / PEAK_LO) * 100);
    label = "개발 수요 높음";
    why = "소득이 낮아 개발 협력 필요성이 큽니다.";
  } else {
    score = clamp(100 - ((gdp - PEAK_HI) / 120)); // 고소득일수록 완만히 감점
    label = "성장 시장";
    why = "구매력이 있어 사업화 가능성이 높습니다.";
  }
  // 강점일 때(70+)만 근거로 노출
  const reason = score >= 70
    ? `1인당 GDP ${gdp.toLocaleString()} USD · ${label} — ${why}`
    : null;
  return { score, reason };
}

// ── 축 ⑥: 수출경험 보너스 (기업 전용) ───────────────────────
// 수출 경험이 있으면 → ODA 이력 있는(=진입 채널 있는) 국가에 가산.
function scoreExport(country, exportExp) {
  if (exportExp !== "Yes") return { score: 50, reason: null };
  const hasOda = country?.koreaOdaHistory === true;
  const score = hasOda ? 100 : 40;
  const reason = hasOda
    ? "수출경험 보유 × 한국 ODA 이력 — 진입 채널과 수출 역량이 모두 갖춰져 있습니다."
    : "수출경험 보유 — 해외 진출 역량이 있습니다.";
  return { score, reason };
}

// ── 축 ⑦: 보유기술 적합도 (자유텍스트 → 분야 → 국가 협력채널) ─
// 사용자가 입력한 보유기술/목적 텍스트에서 분야를 추론하고,
// 그 분야가 이 국가의 KOICA 협력섹터 또는 기후이슈와 맞으면 가산한다.
// 명시적으로 고른 field(들)와 다른 숨은 강점을 잡아내는 역할.
function scoreTechMatch(country, freeText, selectedFields) {
  const inferred = inferFieldsFromText(freeText);
  if (inferred.length === 0) return { score: 50, reason: null };

  let best = 0;
  let bestField = null;
  for (const { field, hits } of inferred) {
    // (a) 추론 분야 ↔ 국가 KOICA 섹터 적합도
    const fieldFit = scoreField(country, field).score; // 0~100
    // (b) 추론 분야 ↔ 국가 기후이슈 적합도
    const climFitMap = FIELD_CLIMATE_FIT[field] || {};
    const climFit = (climFitMap[country?.mainClimateIssue] ?? 0.5) * 100;
    // 키워드 매칭 강도(hits)로 가중, 둘 중 강한 쪽 사용
    const combined = Math.max(fieldFit, climFit) * Math.min(1, 0.6 + 0.2 * hits);
    if (combined > best) { best = combined; bestField = field; }
  }
  const score = clamp(best);
  // 사용자가 고른 분야(들)와 다른 분야가 강하게 잡혔을 때만 근거로 노출
  let reason = null;
  if (score >= 70 && bestField && !selectedFields.includes(bestField)) {
    reason = `입력하신 보유기술이 '${bestField}' 영역과 맞아, 이 국가의 협력채널·기후수요와 연결됩니다.`;
  } else if (score >= 70 && bestField) {
    reason = `보유기술이 '${bestField}' 분야 수요와 직접 연결됩니다.`;
  }
  return { score, reason, bestField };
}

// ============================================================
// 메인: 단일 국가 점수 계산
// ============================================================
export function scoreCountry(country, profile) {
  const type = profile?.type || "general";
  const w = WEIGHTS[type] || WEIGHTS.general;
  const fields = normalizeFields(profile); // 항상 배열
  const freeText = [profile?.tech, profile?.purpose].filter(Boolean).join(" ");

  // 선택한 분야가 여러 개면, 이 나라와 가장 잘 맞는 분야 1개를 결정
  const { matchedField, fieldAxis, climateFitAxis } = pickBestField(country, fields, freeText, w);

  const axes = {
    field:        fieldAxis,
    climateFit:   climateFitAxis,
    climateScore: scoreClimateUrgency(country),
    diplomacy:    scoreDiplomacy(country),
    develop:      scoreDevelopment(country),
    export:       scoreExport(country, profile?.exportExp),
    techMatch:    scoreTechMatch(country, freeText, fields),
  };

  // 가중합
  let total = 0;
  for (const key of Object.keys(w)) {
    total += (axes[key]?.score || 0) * w[key];
  }

  // ── 결정적 부적합 감점 (penalty) ──────────────────────────
  // 분야가 국가 기후이슈와 명백히 안 맞으면(적합도 ≤ 0.2) 가중합으로
  // 묻히지 않도록 총점에 곱셈 패널티를 준다. (예: '홍수 인프라' ↔ 폭염국)
  // 여러 분야를 골랐을 땐, 선택한 분야 "전부"가 안 맞을 때만 감점한다 —
  // 하나라도 맞으면 그 강점을 살려주기 위함.
  let penalty = 1.0;
  let penaltyNote = null;
  const issue = country?.mainClimateIssue;
  if (issue && fields.length > 0) {
    const allBad = fields.every((f) => {
      const fitMap = FIELD_CLIMATE_FIT[f] || {};
      return fitMap[issue] != null && fitMap[issue] <= 0.2;
    });
    if (allBad) {
      penalty = 0.7;
      const label = fields.length > 1 ? `선택하신 분야(${fields.join(", ")})는` : "선택 분야는";
      penaltyNote = `${label} '${issue}' 위주인 이 국가와 직접적 연관은 낮습니다.`;
    }
  }
  total *= penalty;

  // 근거 모으기 (점수 높은 축 위주)
  const reasons = Object.keys(w)
    .filter((k) => w[k] > 0 && axes[k]?.reason && axes[k].score >= 50)
    .sort((a, b) => axes[b].score - axes[a].score)
    .map((k) => axes[k].reason);

  // 여러 분야를 골랐을 때만, "어떤 분야 기준으로 뽑혔는지" 맨 앞에 명시
  if (fields.length > 1 && matchedField) {
    reasons.unshift(`선택하신 분야 중 '${matchedField}' 기준으로 이 국가와 특히 잘 맞습니다.`);
  }

  const matchScore = Math.round(total * 10) / 10; // 0~100, 소수 1자리
  const { tier, tierNote } = matchTier(matchScore);

  return {
    id: country.id,
    name: country.name,
    matchScore,
    tier,         // "strong" | "good" | "fair" | "weak"
    tierNote,     // 점수대별 안내 문구
    penalty,      // 1.0(정상) 또는 0.7(결정적 부적합)
    penaltyNote,  // 감점 사유 (없으면 null)
    matchedField, // 여러 분야 중 이 국가와 가장 잘 맞는 분야 (1개 선택 시 그 분야, 없으면 null)
    axes,
    reasons,
  };
}

// ============================================================
// 메인: 전체 국가 순위
// ============================================================
export function rankCountries(countriesObj, profile, topN = null) {
  const ranked = Object.values(countriesObj)
    .map((c) => scoreCountry(c, profile))
    .sort((a, b) => b.matchScore - a.matchScore);
  return topN ? ranked.slice(0, topN) : ranked;
}