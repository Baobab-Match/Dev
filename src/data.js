// Baobab Match — 데이터
import { COUNTRIES as COUNTRIES_REAL } from "./data/index.js";

export const CATEGORIES = [
  "가뭄",
  "물 부족 및 정수 기술",
  "홍수 및 재해 대응 인프라",
  "농업 및 식량안보",
  "기후변화 대응 및 탄소감축",
  "친환경 교통 및 인프라",
  "재생에너지 및 에너지 전환",
  "자원순환 및 친환경 소재",
  "교육 및 역량 강화",
  "사회적 갈등 및 강제이주",
  "기후성 질병 및 보건의료",
];

export const MY_PROFILE = {
  type: "기업",
  company: "(주)클린워터솔루션",
  field: "물 부족 및 정수 기술",
  tech: "태양광 기반 소형 정수 시스템",
  region: "에티오피아",
};

// 아프리카 국가 목록 — COUNTRIES(54개국)에서 자동 생성
export const COUNTRY_LIST = Object.values(COUNTRIES_REAL).map(
  (c) => `${c.name} (${c.nameEn})`
);

// 상세 국가 데이터 (공공데이터 기반)
export const COUNTRIES = COUNTRIES_REAL;

export const MATCH_RESULTS = ["에티오피아", "마다가스카르", "우간다"];

// 지도 하이라이트 — recommended 자동, 없으면 임시 목록
const TEMP_HIGHLIGHT = ["에티오피아", "마다가스카르", "우간다", "가나", "가봉", "부르키나파소"];
const autoHighlight = Object.values(COUNTRIES_REAL)
  .filter((c) => c.recommended === true)
  .map((c) => c.id);
export const RECOMMENDED_ON_MAP =
  autoHighlight.length > 0 ? autoHighlight : TEMP_HIGHLIGHT;

export function readInterests(profile) {
  if (!profile) return [];
  if (Array.isArray(profile.interests)) return profile.interests;
  if (profile.interest) return [profile.interest];
  return [];
}