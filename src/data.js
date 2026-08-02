// Baobab Match — 데이터
import { COUNTRIES as COUNTRIES_REAL } from "./data/index.js";

export const CATEGORIES = [
  "가뭄 대응",
  "기후변화 대응 및 탄소감축",
  "기후성 질병 및 보건의료",
  "물 부족 및 정수 기술",
  "재생에너지 및 에너지 전환",
  "홍수 및 재해 대응 인프라",
  "농업 및 식량안보",
  "자원순환 및 친환경 소재",
  "친환경 교통 및 인프라",
  "교육 및 역량 강화",
  "사회적 갈등 및 강제이주",
];

// 관심분야 3그룹 — AboutPage·FieldSelectModal이 공통으로 사용. 그룹 내부는 가나다순.
export const FIELD_GROUPS = [
  { tag: "기후·환경", items: ["가뭄 대응", "기후변화 대응 및 탄소감축", "기후성 질병 및 보건의료", "물 부족 및 정수 기술", "재생에너지 및 에너지 전환", "홍수 및 재해 대응 인프라"] },
  { tag: "산업·자원", items: ["농업 및 식량안보", "자원순환 및 친환경 소재", "친환경 교통 및 인프라"] },
  { tag: "사회", items: ["교육 및 역량 강화", "사회적 갈등 및 강제이주"] },
];

export const FIELD_DESCRIPTIONS = {
  "가뭄 대응": "가뭄 조기경보·관개시스템 등 물 부족 자체에 대한 대응",
  "물 부족 및 정수 기술": "정수·담수화 등 물을 깨끗하게 만드는 기술",
  "홍수 및 재해 대응 인프라": "배수·제방 등 물이 넘칠 때의 인프라",
  "기후변화 대응 및 탄소감축": "온실가스 감축·탄소 저감 자체가 목적인 기술",
  "기후성 질병 및 보건의료": "온열질환·수인성질병 등 기후로 인한 질병 대응",
  "재생에너지 및 에너지 전환": "태양광·풍력 등 에너지를 '생산·공급'하는 관점",
  "자원순환 및 친환경 소재": "재활용·폐기물 등 원자재를 '순환'시키는 관점 (에너지 생산과는 다른 축)",
  "친환경 교통 및 인프라": "전기차·모빌리티 등 이동수단 관련 인프라",
  "농업 및 식량안보": "작물·식량 생산과 관련된 기술",
  "교육 및 역량 강화": "직업훈련·역량강화 프로그램",
  "사회적 갈등 및 강제이주": "난민·분쟁 지역 지원",
};

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