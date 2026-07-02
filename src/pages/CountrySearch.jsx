import { useState, useMemo } from "react";
import { COUNTRY_LIST, COUNTRIES } from "../data";
import { rankCountries } from "../data/matchEngine";
import AfricaMap from "../components/AfricaMap";
import { Icons } from "../components/ui";

// 국가명에서 id(한글명) 추출: "에티오피아 (Ethiopia)" -> "에티오피아"
const idOf = (label) => label.split(" (")[0];

export default function CountrySearch({ openCountry, user, profile }) {
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);

  // 로그인(프로필 보유) 상태에서만 추천국 표시 — 매칭 엔진 상위 5개국
  const recIds = useMemo(
    () => (user && profile ? rankCountries(COUNTRIES, profile, 5).map((r) => r.id) : []),
    [user, profile]
  );

  const filtered = COUNTRY_LIST.filter((c) =>
    c.toLowerCase().includes(q.toLowerCase())
  );

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
              placeholder="국가명 찾기 (예: 에티오피아)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
          <div className="country-list">
            {filtered.map((label) => {
              const id = idOf(label);
              const isRec = recIds.includes(id);
              const hasData = !!COUNTRIES[id];
              return (
                <button
                  key={label}
                  className={"country-row" + (isRec ? " is-rec" : "") + (hasData ? "" : " is-disabled")}
                  onClick={() => hasData && pick(id)}
                  disabled={!hasData}
                >
                  <span>{label}</span>
                  {isRec
                    ? <span className="rec-pill">추천</span>
                    : !hasData ? <span className="soon-pill">준비중</span> : null}
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