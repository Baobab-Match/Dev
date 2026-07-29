import { useState, useMemo } from "react";
import { COUNTRY_LIST, COUNTRIES } from "../data";
import { rankCountries } from "../data/matchEngine";
import AfricaMap from "../components/AfricaMap";
import { Icons } from "../components/ui";

// 국가명에서 id(한글명) 추출: "에티오피아 (Ethiopia)" -> "에티오피아"
const idOf = (label) => label.split(" (")[0];
// 국가명에서 영문명 추출: "에티오피아 (Ethiopia)" -> "Ethiopia"
const enOf = (label) => label.match(/\(([^)]+)\)/)?.[1] || "";

// ── 한글 초성 검색 ───────────────────────────────────────────
// 완성형 한글 한 글자에서 초성(자음)만 뽑아냄. 한글이 아니면 원문 그대로 반환.
const CHOSUNG = [
  "ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ",
  "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
];
function getChosung(str) {
  return str
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0) - 0xac00;
      if (code < 0 || code > 11171) return ch; // 완성형 한글이 아니면 그대로
      return CHOSUNG[Math.floor(code / 588)];
    })
    .join("");
}
// 검색어가 자음(초성)으로만 이루어져 있는지 (예: "ㄱ", "ㄱㄴ")
const isChosungOnly = (s) => /^[ㄱ-ㅎ]+$/.test(s);
// 검색어에 영문이 포함되어 있는지
const isLatin = (s) => /^[a-zA-Z]/.test(s);

// "시작 문자" 기준 매칭 — 포함(includes) 대신 시작(startsWith)만 인정
function matchesQuery(label, q) {
  if (!q) return true;
  const korean = idOf(label);
  const english = enOf(label);

  if (isChosungOnly(q)) {
    // 자음만 입력 → 초성이 그 자음으로 시작하는 국가만
    return getChosung(korean).startsWith(q);
  }
  if (isLatin(q)) {
    // 영문 입력 → 대소문자 구분 없이 영문명이 그 글자로 시작하는 국가만
    return english.toLowerCase().startsWith(q.toLowerCase());
  }
  // 완성형 한글 입력 → 한글명이 그 글자로 시작하는 국가만
  return korean.startsWith(q);
}

export default function CountrySearch({ openCountry, user, profile }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const [filterMode, setFilterMode] = useState("all"); // "all" | "rec" | "priority"

  // 로그인(프로필 보유) 상태에서만 추천국 표시 — 매칭 엔진 상위 5개국
  const recIds = useMemo(
    () => (user && profile ? rankCountries(COUNTRIES, profile, 5).map((r) => r.id) : []),
    [user, profile]
  );

  const filtered = COUNTRY_LIST.filter((c) => matchesQuery(c, q)).filter((label) => {
    if (filterMode === "all") return true;
    const id = idOf(label);
    if (filterMode === "rec") return recIds.includes(id);
    if (filterMode === "priority") return COUNTRIES[id]?.priorityPartner;
    return true;
  });

  // id 선택 공통 처리: 상세 데이터 있으면 열고, 없으면 선택 표시
  const pick = (id) => (COUNTRIES[id] ? openCountry(id) : setSel(id));

  return (
    <main className="page">
      <div className="page-head">
        <h1 className="page-title">알고 싶은 국가 선택</h1>
        <p className="page-desc">
          {user
            ? "초록색으로 표시된 나라는 내 프로필 기반 주요 추천국입니다."
            : "지도나 검색으로 알고 싶은 아프리카 국가를 선택하세요."}
        </p>
      </div>

      <div className="search-layout">
        <div className="map-wrap">
          {user && (
            <div className="map-legend"><span className="legend-dot" /> 내 정보 기반 주요 추천국</div>
          )}
          <AfricaMap
            recommended={recIds}
            clickable={Object.keys(COUNTRIES)}
            selected={sel}
            onSelect={pick}
          />
        </div>

        <div className="search-panel">
          <div className="search-box">
            <Icons.search />
            <input
              placeholder="국가명 찾기 (ex: 에티오피아)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          {/* 필터 칩 — 실제 데이터 필드(추천국·중점협력국)만 사용 */}
          <div className="filter-chips">
            <button
              type="button"
              className={"chip" + (filterMode === "all" ? " active" : "")}
              onClick={() => setFilterMode("all")}
            >
              전체
            </button>
            {user && recIds.length > 0 && (
              <button
                type="button"
                className={"chip" + (filterMode === "rec" ? " active" : "")}
                onClick={() => setFilterMode("rec")}
              >
                추천국
              </button>
            )}
            <button
              type="button"
              className={"chip" + (filterMode === "priority" ? " active" : "")}
              onClick={() => setFilterMode("priority")}
            >
              중점협력국
            </button>
          </div>
          <div className="country-list">
            {filtered.map((label) => {
              const id = idOf(label);
              const hasData = !!COUNTRIES[id];
              return (
                <button
                  key={label}
                  className={"country-row" + (hasData ? "" : " is-disabled")}
                  onClick={() => hasData && pick(id)}
                  disabled={!hasData}
                >
                  <span>{label}</span>
                  {!hasData && <span className="soon-pill">준비중</span>}
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div className="country-empty">검색 결과가 없습니다. 다른 이름으로 찾아보세요.</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}