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
// 콜드스타트 대기 상한선 — 이보다 오래 걸리면 "느린 것"이 아니라 "문제"로 보고
// 규칙 기반(matchEngine.js) 결과로 조용히 대체한다.
const AI_TIMEOUT_MS = 25000;

// 선택한 분야(들) 각각으로 /recommend 를 병렬 호출한 뒤, 국가별로 가장 점수가
// 높은 결과만 남겨 합친다 — matchEngine.js의 pickBestField("그 나라와 가장
// 잘 맞는 분야 1개 고르기")와 같은 개념을 AI 서버 응답에도 그대로 적용.
async function fetchAiRanked(fields, userType) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), AI_TIMEOUT_MS);
  try {
    const lists = await Promise.all(
      fields.map((field) =>
        fetch(`${AI_API_BASE}/recommend`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ field, userType, topN: 5 }),
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

    // AI matchScore는 0~10 스케일 → matchEngine.js와 같은 0~100 스케일로 변환
    return Object.values(byCountry)
      .sort((a, b) => b.matchScore - a.matchScore)
      .slice(0, 3)
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
  console.log("🟣 downloadPdf 호출됨", fileName);
  const blob = await pdf(documentElement).toBlob();
  console.log("🟡 blob 생성 완료", blob.size, "bytes");
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

  // AI 매칭 결과 — null이면 아직 없음(또는 실패) → 이 경우 규칙 기반 결과를 그대로 사용
  const [aiRanked, setAiRanked] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);

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

  // 규칙 기반 결과 — 항상 즉시 계산됨. AI가 실패하거나 늦으면 이걸로 화면을 채운다.
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

  // AI 매칭 호출 — 성공하면 aiRanked를 채워 화면을 교체, 실패/타임아웃이면 규칙 기반 결과 유지
  useEffect(() => {
    if (effectiveFields.length === 0) return;
    let cancelled = false;
    setAiLoading(true);
    fetchAiRanked(effectiveFields, profile?.type || "general")
      .then((result) => {
        if (!cancelled) setAiRanked(result);
      })
      .catch((err) => {
        console.warn("AI 매칭 실패 — 규칙 기반 결과로 대체합니다:", err);
      })
      .finally(() => {
        if (!cancelled) setAiLoading(false);
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveFields, profile?.type]);

  // 최종 표시 결과 — AI 결과가 있으면 그것을, 없으면(아직 로딩 중이거나 실패) 규칙 기반 결과를 사용
  const displayRanked = aiRanked ?? ranked;

  // 관심 국가(즐겨찾기) — 같은 프로필 기준으로 점수화해서 상세까지 동일 포맷
  // (즐겨찾기는 AI 서버에 매번 물어보기엔 비용이 커서 규칙 기반 엔진만 사용)
  const favRanked = useMemo(() => {
    if (!favorites || favorites.length === 0) return [];
    return favorites
      .filter((id) => COUNTRIES[id])
      .map((id) => scoreCountry(COUNTRIES[id], resolvedProfile))
      .sort((a, b) => b.matchScore - a.matchScore);
  }, [favorites, resolvedProfile]);

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

  const showFavBtn = user && favRanked.length > 0;

  async function handleDownloadRecommend() {
    if (recLoading) return;
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

  async function handleDownloadFavorite() {
    if (favLoading) return;
    setFavLoading(true);
    try {
      await downloadPdf(
        <MatchReportPDF
          ranked={favRanked}
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
      {/* AI 서버 응답 대기 중 표시. 뒤에는 규칙 기반 결과가 이미 떠 있어서
          완전히 빈 화면이 되지 않는다 — 응답 오면 자연스럽게 교체됨. */}
      <AiMatchLoading active={aiLoading} />

      <div className="page-head">
        <h1 className="page-title">추천 국가</h1>
        <p className="page-desc">
          <b style={{ color: "var(--green-700)" }}>{shownField}</b> 분야 기준,
          AI가 분야 적합도·기후 취약도·외교 친밀도·개발 필요도 등
          {copy.extra}을 종합해{" "}
          {copy.verb} 상위 3개 국가를 추천해 드립니다.
        </p>

        {/* PDF 보고서 다운로드 버튼들 */}
        <div className="report-actions">
          {/* 추천 결과 PDF */}
          <button
            type="button"
            className="report-btn"
            onClick={handleDownloadRecommend}
            disabled={recLoading}
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
        {displayRanked.map((r, i) => {
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
        {displayRanked.map((r, i) => {
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