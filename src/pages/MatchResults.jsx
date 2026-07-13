import { useState, useEffect, useMemo } from "react";
import { pdf } from "@react-pdf/renderer";
import { COUNTRIES } from "../data";
import { rankCountries, scoreCountry, matchTier } from "../data/matchEngine";
import { CountrySilhouette } from "../components/ui";
import MatchReportPDF from "../components/MatchReportPDF";
import AiMatchLoading from "../components/AiMatchLoading";

// field 를 항상 배열로 정규화 (문자열 1개 / 배열 / 빈값 모두 허용)
function toFieldArray(field) {
  return (Array.isArray(field) ? field : [field]).filter(Boolean);
}

// 프로필 해석: 로그인 유저 프로필 → 엔진 입력 형태로 정규화.
// 사용자가 직접 고른 field(들)가 있으면 항상 그것을 최우선으로 사용.
function buildProfile(profile, field) {
  const chosen = toFieldArray(field);
  if (profile && profile.type) {
    return {
      type: profile.type,
      field: chosen.length ? chosen : (profile.field || profile.interest || ""),
      interest: chosen.length ? chosen : profile.interest,
      tech: profile.tech,
      purpose: profile.purpose,
      exportExp: profile.exportExp,
      region: profile.region,
    };
  }
  return { type: "general", field: chosen.length ? chosen : "", interest: chosen.length ? chosen : "" };
}

// 타입별 결과 문구 (기업·공공기관·개인)
const RESULT_COPY = {
  company: { verb: "협력하기 좋은", extra: "·수출 연계성" },
  gov:     { verb: "지원 효과가 큰", extra: "" },
  general: { verb: "주목할 만한", extra: "" },
};

// ── AI 매칭 서버 연동 ────────────────────────────────────────
// baobab-api(FastAPI, Render) 주소. 재배포로 URL이 바뀌면 여기만 고치면 됨.
const AI_API_BASE = "https://baobab-api-di7o.onrender.com";
// fetch 자체를 완전히 포기하는 최종 한계 — 이보다 오래 걸리면 규칙 기반 결과로 완전히 대체한다.
const AI_TIMEOUT_MS = 65000;
// 이 시간 넘게 응답이 없으면 "서버 부팅 중" 안내 + 규칙 기반 임시 결과로 전환한다.
// (fetch 자체는 취소하지 않고 AI_TIMEOUT_MS까지 계속 기다림 — 도착하면 조용히 교체)
const COLD_START_MS = 30000;
// 즐겨찾기 채점용 — AI가 "이 분야 상위 N개국"만 돌려주는 구조라, 즐겨찾기한 나라가
// 상위권 밖에 있어도 점수를 받아오려면 사실상 전체 국가 수만큼 넉넉히 요청해야 한다.
const FAVORITE_TOPN = 60;

const aiCache = new Map();
function aiCacheKey(fields, userType) {
  return `${userType}|${[...fields].sort().join(",")}`;
}
// 즐겨찾기 캐시 — 메인 캐시 키에 즐겨찾기 국가 목록을 더해서 구분 (즐겨찾기가 바뀌면 재요청)
const favAiCache = new Map();

// 선택한 분야(들) 각각으로 /recommend 를 병렬 호출한 뒤, 국가별로 가장 점수가
// 높은 결과만 남겨 합친다 — matchEngine.js의 pickBestField("그 나라와 가장
// 잘 맞는 분야 1개 고르기")와 같은 개념을 AI 서버 응답에도 그대로 적용.
//
// options.topN: 분야별로 AI에 요청할 상위 개수 (기본 5 — 메인 추천용).
//   즐겨찾기 채점처럼 특정 국가들의 점수가 꼭 필요할 땐 훨씬 크게 줘야 한다.
// options.limit: 최종적으로 남길 개수 (기본 3).
// options.filterIds: 지정하면 이 국가 id들만 결과에 남긴다 (즐겨찾기 필터링용).
// options.diversify: false로 주면 서버 쪽 클러스터 다양성 제한(MAX_PER_CLUSTER) 없이
//   점수 순으로 topN개를 그대로 받는다. 즐겨찾기 채점처럼 "이 나라들 점수를 놓치면 안 되는"
//   경우에 false로 줘야 한다 — 기본(true)이면 topN을 아무리 크게 줘도 클러스터당 개수 제한 때문에
//   실제로는 훨씬 적게 돌아올 수 있다 (다양성 있는 추천을 위해 서버가 의도적으로 그렇게 동작함).
async function fetchAiRanked(fields, userType, options = {}) {
  const { topN = 5, limit = 3, filterIds = null, diversify = true } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
  try {
    const lists = await Promise.all(
      fields.map((field) =>
        fetch(`${AI_API_BASE}/recommend`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field, userType, topN, diversify }),
          signal: controller.signal,
        }).then((res) => {
          if (!res.ok) throw new Error(`AI 서버 응답 오류: ${res.status}`);
          return res.json();
        })
      )
    );

    const byCountry = {};
    lists.forEach((list, i) => {
      const field = fields[i];
      list.forEach((item) => {
        const prev = byCountry[item.country];
        if (!prev || item.matchScore > prev.matchScore) {
          byCountry[item.country] = { ...item, matchedField: fields.length > 1 ? field : null };
        }
      });
    });

    let entries = Object.values(byCountry);
    if (filterIds) {
      const idSet = new Set(filterIds);
      entries = entries.filter((item) => idSet.has(item.country));
    }

    // AI matchScore는 0~10 스케일 → matchEngine.js와 같은 0~100 스케일로 변환
    return entries
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, limit)
      .map((item) => {
        const scaled = Number((item.matchScore * 10).toFixed(1));
        const { tier, tierNote } = matchTier(scaled);
        return {
          id: item.country,
          matchScore: scaled,
          tier,
          tierNote: item.headline || tierNote, // headline이 있으면 그걸 우선 표시
          matchedField: item.matchedField,
          reasons: item.reasons || [],
        };
      });
  } finally {
    clearTimeout(timer);
  }
}

// PDF Document를 그 자리에서 새로 빌드해 blob으로 만들고 바로 다운로드.
// PDFDownloadLink는 document prop이 스타일 값처럼 얕은 비교로 안 잡히는
// 변경에 대해 예전 blob을 재사용하는 캐싱 버그가 있어, 매 클릭마다
// 완전히 새로 렌더링하는 이 방식으로 대체함.
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

// user, favorites 는 즐겨찾기 PDF 용 (없으면 관심 국가 버튼은 숨김)
export default function MatchResults({ openCountry, field, profile, user, favorites = [] }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(t);
  }, []);

  const [recLoading, setRecLoading] = useState(false);
  const [favLoading, setFavLoading] = useState(false);

  // AI 매칭 결과 — null이면 아직 없음(또는 실패) → 이 경우 화면에 아무 결과도 안 보여줌(콜드스타트 전) 또는 규칙 기반(콜드스타트 후)
  const [aiRanked, setAiRanked] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  // 30초 넘게 AI 응답이 없어서 "서버 부팅 중" 안내로 전환된 상태
  const [coldStart, setColdStart] = useState(false);

  // buildProfile 결과를 따로 보관 (PDF에도 그대로 전달)
  const resolvedProfile = useMemo(
    () => buildProfile(profile, field),
    [
      field,
      profile?.type,
      profile?.field,
      profile?.interest,
      profile?.tech,
      profile?.purpose,
      profile?.exportExp,
      profile?.region,
    ]
  );

  // 규칙 기반 결과 — 항상 즉시 계산됨. AI가 오래 걸리거나(콜드스타트) 실패하면 이걸로 화면을 채운다.
  const ranked = useMemo(
    () => rankCountries(COUNTRIES, resolvedProfile, 3),
    [resolvedProfile]
  );

  // AI 서버에 물어볼 분야(들) — 사용자가 직접 고른 게 있으면 그것, 없으면 프로필의 field/interest
  const chosenFields = toFieldArray(field);
  const effectiveFields = useMemo(() => {
    if (chosenFields.length) return chosenFields;
    const single = profile?.field || profile?.interest;
    return single ? [single] : [];
  }, [field, profile?.field, profile?.interest]);

  // AI 매칭 호출 — 성공하면 aiRanked를 채워 화면을 채운다.
  // 30초 넘게 응답이 없으면(콜드스타트) coldStart=true로 전환해 규칙 기반 임시 결과를 보여주되,
  // fetch 자체는 계속 대기하다가 도착하면 조용히 진짜 AI 결과로 교체한다.
  useEffect(() => {
    if (effectiveFields.length === 0) return;

    const key = aiCacheKey(effectiveFields, profile?.type || "general");
    const cached = aiCache.get(key);
    if (cached) {
      // 이미 같은 조건으로 받아온 결과가 있으면 로딩/안내 없이 바로 재사용
      setAiRanked(cached);
      return;
    }

    let cancelled = false;
    setAiLoading(true);
    setColdStart(false);

    const coldTimer = setTimeout(() => {
      if (!cancelled) setColdStart(true);
    }, COLD_START_MS);

    fetchAiRanked(effectiveFields, profile?.type || "general")
      .then((result) => {
        if (!cancelled) {
          // PDF 막대그래프용 — AI가 고른 국가들에 규칙 기반 축 점수(axes)를 보조로 붙여준다.
          // (최종 순위·점수는 AI 것을 그대로 쓰고, 6개 축 분해는 matchEngine.js 걸 시각화용으로 재사용)
          const enriched = result.map((r) => {
            const c = COUNTRIES[r.id];
            const axes = c ? scoreCountry(c, resolvedProfile).axes : undefined;
            return { ...r, axes };
          });
          aiCache.set(key, enriched);
          setAiRanked(enriched);
        }
      })
      .catch((err) => {
        console.warn("AI 매칭 실패 — 규칙 기반 결과로 대체합니다:", err);
      })
      .finally(() => {
        clearTimeout(coldTimer);
        if (!cancelled) {
          setAiLoading(false);
          setColdStart(false); // 결과가 나왔든 완전히 실패했든, "부팅 중" 안내는 내린다
        }
      });

    return () => { cancelled = true; clearTimeout(coldTimer); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveFields, profile?.type]);

  // 최종 표시 결과 — AI 결과가 있으면 그것을 최우선 사용.
  // 없고 콜드스타트 상태면 규칙 기반 임시 결과, 그 전(30초 이내)엔 아예 null(로딩 화면만 보여줌).
  const displayRanked = aiRanked ?? (coldStart ? ranked : null);

  if (!ranked.length) return null;

  // 사용자가 직접 고른 분야가 있으면 그것을 우선 표시 (여러 개면 · 로 이어붙임)
  const shownField = chosenFields.length
    ? chosenFields.join(" · ")
    : (profile && (profile.field || profile.interest)) || "선택하신";

  const copy = RESULT_COPY[profile?.type] ?? RESULT_COPY.general;

  // PDF 파일명 (분야 + 날짜)
  const today = new Date();
  const dateTag = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}`;
  const recFileName = `바오밥매치_추천보고서_${shownField}_${dateTag}.pdf`;
  const favFileName = `바오밥매치_관심국가보고서_${dateTag}.pdf`;

  const showFavBtn = user && favorites && favorites.length > 0;

  async function handleDownloadRecommend() {
    if (recLoading || !displayRanked) return;
    setRecLoading(true);
    try {
      await downloadPdf(
        <MatchReportPDF
          ranked={displayRanked}
          countries={COUNTRIES}
          field={shownField}
          reportTitle={"아프리카 협력국가\n맞춤 추천 결과"}
          subtitle={"공공데이터 기반 객관적 지표와 AI 추천 모델을 통해\n가장 적합한 협력 국가를 분석한 결과입니다."}
          showRanking={true}
          showMatchedField={chosenFields.length > 1}
        />,
        recFileName
      );
    } catch (err) {
      console.error("추천 결과 PDF 생성 실패:", err);
    } finally {
      setRecLoading(false);
    }
  }

  // 즐겨찾기 PDF는 상시 계산해두지 않고, 버튼 누른 시점에 AI에 물어봐서 만든다
  // (페이지 로드마다 자동으로 부를 필요는 없는 기능이라 비용을 아낌).
  // diversify: false로 요청해서 서버 쪽 클러스터 다양성 제한 없이 점수 순으로 받아오고,
  // 그래도 혹시 즐겨찾기한 나라가 응답에 없으면(edge case) 그 나라만 규칙 기반으로 개별 보완한다.
  // AI 서버 자체가 실패하면 전체를 규칙 기반으로 대체한다.
  async function handleDownloadFavorite() {
    if (favLoading) return;
    const favIds = (favorites || []).filter((id) => COUNTRIES[id]);
    if (favIds.length === 0) return;

    setFavLoading(true);
    try {
      const key =
        aiCacheKey(effectiveFields, profile?.type || "general") +
        "|fav:" + [...favIds].sort().join(",");

      let favResult = favAiCache.get(key);
      if (!favResult) {
        try {
          const raw = await fetchAiRanked(effectiveFields, profile?.type || "general", {
            topN: FAVORITE_TOPN,
            limit: favIds.length,
            filterIds: favIds,
            diversify: false,
          });

          // AI 응답에 없는 즐겨찾기 국가(있어선 안 되지만 만약을 위한 안전장치)는 규칙 기반으로 개별 보완
          const gotIds = new Set(raw.map((r) => r.id));
          const missingIds = favIds.filter((id) => !gotIds.has(id));
          const fallbackForMissing = missingIds.map((id) => scoreCountry(COUNTRIES[id], resolvedProfile));

          favResult = [...raw, ...fallbackForMissing]
            .map((r) => {
              const c = COUNTRIES[r.id];
              const axes = r.axes ?? (c ? scoreCountry(c, resolvedProfile).axes : undefined);
              return { ...r, axes };
            })
            .sort((a, b) => b.matchScore - a.matchScore);
        } catch (aiErr) {
          console.warn("관심 국가 AI 매칭 실패 — 규칙 기반으로 대체합니다:", aiErr);
          favResult = favIds
            .map((id) => scoreCountry(COUNTRIES[id], resolvedProfile))
            .sort((a, b) => b.matchScore - a.matchScore);
        }
        favAiCache.set(key, favResult);
      }

      await downloadPdf(
        <MatchReportPDF
          ranked={favResult}
          countries={COUNTRIES}
          field={shownField}
          reportTitle={"관심 국가\n분석 보고서"}
          subtitle={"즐겨찾기에 담아두신 관심 국가들을\n선택 분야 기준으로 분석한 결과입니다."}
          showRanking={true}
          rankingTitle={"관심 국가 요약"}
          reportKind="favorite"
          showMatchedField={chosenFields.length > 1}
        />,
        favFileName
      );
    } catch (err) {
      console.error("관심 국가 PDF 생성 실패:", err);
    } finally {
      setFavLoading(false);
    }
  }

  return (
    <main className="page">
      {/* AI 서버 응답 대기 중 표시. 결과가 하나도 없을 때(콜드스타트 전)만 로딩을 보여준다.
          콜드스타트 안내로 전환된 뒤에는 로딩 오버레이 대신 아래 안내 문구 + 임시 결과를 보여준다. */}
      <AiMatchLoading active={aiLoading && !coldStart} />

      <div className="page-head">
        <h1 className="page-title">추천 국가</h1>
        <p className="page-desc">
          <b style={{ color: "var(--green-700)" }}>{shownField}</b> 분야 기준,
          AI가 분야 적합도·기후 취약도·외교 친밀도·개발 필요도 등
          {copy.extra}을 종합해{" "}
          {copy.verb} 상위 3개 국가를 추천해 드립니다.
        </p>

        {/* AI 서버 부팅 중 안내 — 30초 넘게 응답이 없어서 임시로 규칙 기반 결과를 보여주는 중일 때만 표시 */}
        {coldStart && !aiRanked && (
          <p className="cold-start-notice">
            로딩 속도가 오래 걸려서 우선 규칙 기반 머신러닝 결과를 보여드릴게요 -
            AI 분석이 끝나면 자동으로 최신 결과로 바뀝니다.
          </p>
        )}

        {/* PDF 보고서 다운로드 버튼들 */}
        <div className="report-actions">
          {/* 추천 결과 PDF */}
          <button
            type="button"
            className="report-btn"
            onClick={handleDownloadRecommend}
            disabled={recLoading || !displayRanked}
          >
            {recLoading ? <span>보고서 준비 중…</span> : <span>추천 결과 PDF 보고서 다운받기</span>}
          </button>

          {/* 관심 국가 PDF — 로그인 + 즐겨찾기 있을 때만 */}
          {showFavBtn && (
            <button
              type="button"
              className="report-btn report-btn--outline"
              onClick={handleDownloadFavorite}
              disabled={favLoading}
            >
              {favLoading ? <span>보고서 준비 중…</span> : <span>관심 국가 PDF 보고서 다운받기</span>}
            </button>
          )}
        </div>
      </div>

      <div className="match-podium">
        {(displayRanked || []).map((r, i) => {
          const c = COUNTRIES[r.id];
          if (!c) return null;
          return (
            <div
              key={r.id}
              className={"podium-card rank-" + (i + 1)}
              onClick={() => openCountry(r.id)}
            >
              <div className="podium-rank">{i + 1}순위</div>
              <CountrySilhouette id={r.id} className="podium-sil" />
              <div className="podium-name">
                {c.name}
                <span>{c.nameEn}</span>
              </div>
              {chosenFields.length > 1 && r.matchedField && (
                <div className="podium-field-badge">{r.matchedField}</div>
              )}
              <div className="podium-score">
                <b>
                  {r.matchScore.toFixed(1)}
                  <small> / 100</small>
                </b>
                <div className="podium-bar">
                  <i style={{ width: animate ? `${r.matchScore}%` : "0%" }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 순위별 AI 추천 근거 — 1·2·3순위 각각 */}
      <div className="reasons-stack">
        {(displayRanked || []).map((r, i) => {
          const c = COUNTRIES[r.id];
          if (!c) return null;
          return (
            <div key={r.id} className="match-reasons">
              <div className="block-tag">
                {i + 1}순위 · {c.name} 추천 근거
                {chosenFields.length > 1 && r.matchedField && (
                  <span className="block-tag-field"> · {r.matchedField} 기준</span>
                )}
              </div>

              {/* 점수대별 안내 — 등급에 따라 색이 달라짐. AI 결과일 땐 headline이 여기 표시됨 */}
              <p className={"reason-tier tier-" + r.tier}>{r.tierNote}</p>

              {r.reasons.length > 0 && (
                <ul className="reason-list">
                  {r.reasons.map((reason, idx) => (
                    <li key={idx} className="reason-item">{reason}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}