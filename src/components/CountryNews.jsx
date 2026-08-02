// ============================================================
// 국가 상세 페이지 — 국가별 뉴스 (정치 / 경제 / 환경 / 기업)
// ------------------------------------------------------------
// IndustryNewsPage.jsx와 동일한 요청/상태 패턴(loading→slow→done/error)을 재사용.
// 데이터는 baobab-api의 새 엔드포인트 GET /country-news?country={영문국가명} 에서 온다.
// (news.py에 추가해야 하는 백엔드 코드는 별도로 전달 — 이 컴포넌트는 프론트엔드 전용)
// ============================================================
import { useState, useEffect } from "react";

// baobab-api(FastAPI, Render) 주소 — IndustryNewsPage.jsx·MatchResults.jsx와 동일한 값
const AI_API_BASE = "https://baobab-api-di7o.onrender.com";
const COLD_START_MS = 8000;
const FETCH_TIMEOUT_MS = 65000;

const CATEGORY_LABELS = { politics: "정치", economy: "경제", environment: "환경", business: "기업" };
const CATEGORY_ORDER = ["politics", "economy", "environment", "business"];

// RSS pubDate("Mon, 13 Jul 2026 06:14:21 GMT") → "2026-07-13"
function formatDate(pubDate) {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function NewsRow({ item }) {
  const dateStr = formatDate(item.pubDate);
  return (
    <a className="news-row" href={item.link} target="_blank" rel="noopener noreferrer">
      <div className="news-row-main">
        <div className="news-row-title">{item.title}</div>
        <div className="news-row-meta">{item.source}{dateStr ? ` · ${dateStr}` : ""}</div>
      </div>
      <span className="news-row-arrow" aria-hidden="true">↗</span>
    </a>
  );
}

// countryNameEn: countries_base.js의 nameEn (예: "Ethiopia") — 백엔드 쿼리에 그대로 쓰인다.
// countryNameKo: countries_base.js의 name (예: "에티오피아") — 있으면 한국어 뉴스를 우선 조회한다.
export default function CountryNews({ countryNameEn, countryNameKo }) {
  const [state, setState] = useState("loading"); // loading | slow | done | error
  const [news, setNews] = useState({});

  useEffect(() => {
    if (!countryNameEn) return;
    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const slowTimer = setTimeout(() => {
      if (!cancelled) setState((s) => (s === "loading" ? "slow" : s));
    }, COLD_START_MS);

    setState("loading");
    const koQs = countryNameKo ? `&country_ko=${encodeURIComponent(countryNameKo)}` : "";
    fetch(`${AI_API_BASE}/country-news?country=${encodeURIComponent(countryNameEn)}${koQs}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`뉴스 서버 응답 오류: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setNews(data && typeof data === "object" ? data : {});
        setState("done");
      })
      .catch(() => {
        if (cancelled) return;
        setState("error");
      })
      .finally(() => {
        clearTimeout(timeoutId);
        clearTimeout(slowTimer);
      });

    return () => {
      cancelled = true;
      controller.abort();
      clearTimeout(timeoutId);
      clearTimeout(slowTimer);
    };
  }, [countryNameEn, countryNameKo]);

  return (
    <div className="info-block info-block--wide">
      <div className="block-tag">
        관련 뉴스
        <span className="block-tag-field"> · 정치 · 경제 · 환경 · 기업</span>
      </div>
      <p className="health-detail-desc">
        최근 3개월 이내 뉴스만 조회한 결과입니다. 한국어 뉴스를 우선 조회하고, 한국 외 미국의 아프리카 전문 매체(AllAfrica)도 함께 보여드립니다.
      </p>

      {state === "slow" && <p className="news-status">서버를 깨우는 중입니다. 최대 1분 정도 걸릴 수 있습니다.</p>}
      {state === "loading" && <p className="news-status">불러오는 중…</p>}
      {state === "error" && <p className="news-status">지금은 최신 뉴스를 불러오지 못했어요.</p>}

      {state === "done" && CATEGORY_ORDER.map((cat) => {
        const items = news[cat] || [];
        return (
          <div key={cat} style={{ marginBottom: 18 }}>
            <div className="news-block-title">{CATEGORY_LABELS[cat]}</div>
            {items.length > 0 ? (
              <div className="news-list">
                {items.map((item, i) => <NewsRow key={item.link || i} item={item} />)}
              </div>
            ) : (
              <p className="news-status">최근 3개월 내 관련 뉴스가 없습니다.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}