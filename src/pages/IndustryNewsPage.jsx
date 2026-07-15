import { useState, useEffect } from "react";
import { readInterests } from "../data";

// baobab-api(FastAPI, Render) 주소 — MatchResults.jsx와 동일한 값
const AI_API_BASE = "https://baobab-api-di7o.onrender.com";
// 콜드 스타트 안내 문구를 띄우기까지 기다리는 시간
const COLD_START_MS = 8000;
// 이보다 오래 걸리면 완전히 포기하고 폴백 표시
const FETCH_TIMEOUT_MS = 65000;

// Firestore/API가 비어있거나 요청이 실패했을 때 보여줄 안전장치용 고정 뉴스
const FALLBACK_AFRICA_NEWS = [
  { title: "아프리카대륙자유무역지대(AfCFTA), 역내 교역 확대 추진", link: "https://news.google.com/search?q=AfCFTA", source: "Google 뉴스", pubDate: "" },
  { title: "한-아프리카 경제협력, 그린테크 중심으로 확대", link: "https://news.google.com/search?q=한국 아프리카 경제협력", source: "Google 뉴스", pubDate: "" },
  { title: "아프리카 재생에너지 투자, 최근 수년간 꾸준한 증가세", link: "https://news.google.com/search?q=아프리카 재생에너지 투자", source: "Google 뉴스", pubDate: "" },
];

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

export default function IndustryNewsPage({ profile, user }) {
  const [state, setState] = useState("loading"); // loading | slow | done | error
  const [interestNews, setInterestNews] = useState([]);
  const [africaNews, setAfricaNews] = useState(FALLBACK_AFRICA_NEWS);

  const interests = user ? readInterests(profile) : [];
  const interestsKey = interests.join(",");

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const slowTimer = setTimeout(() => {
      if (!cancelled) setState((s) => (s === "loading" ? "slow" : s));
    }, COLD_START_MS);

    const qs = interestsKey ? `?interests=${encodeURIComponent(interestsKey)}` : "";

    fetch(`${AI_API_BASE}/industry-news${qs}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`뉴스 서버 응답 오류: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        setInterestNews(Array.isArray(data.interestNews) ? data.interestNews : []);
        if (Array.isArray(data.africaNews) && data.africaNews.length > 0) {
          setAfricaNews(data.africaNews);
        }
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
  }, [interestsKey]);

  return (
    <main className="page">
      <div className="page-head">
        <div className="page-eyebrow">Industry News</div>
        <h1 className="page-title">산업 동향</h1>
        <p className="page-desc">
          {interests.length > 0
            ? "관심 분야와 아프리카 대륙의 주요 산업·경제 뉴스를 실시간으로 불러옵니다. 제목을 누르면 링크로 연결됩니다."
            : "아프리카 대륙의 주요 산업·경제 뉴스를 실시간으로 불러옵니다. 제목을 누르면 링크로 연결됩니다."}
        </p>
      </div>

      {state === "slow" && (
        <p className="news-status">서버를 깨우는 중입니다. 최대 1분 정도 걸릴 수 있어요…</p>
      )}
      {state === "error" && interestNews.length === 0 && (
        <p className="news-status">지금은 최신 뉴스를 불러오지 못했어요. 아래는 기본 안내 목록입니다.</p>
      )}

      {interests.length > 0 && (
        <>
          <div className="news-block-title">
            내 관심 분야 뉴스
            <span className="news-block-sub">({interests.join(" · ")})</span>
          </div>
          <div className="news-list">
            {state === "loading" ? (
              <p className="news-status">불러오는 중…</p>
            ) : interestNews.length > 0 ? (
              interestNews.map((item, i) => <NewsRow key={item.link || i} item={item} />)
            ) : (
              <p className="news-status">관심 분야 관련 뉴스를 찾지 못했어요.</p>
            )}
          </div>
        </>
      )}

      <div className="news-block-title" style={{ marginTop: interests.length > 0 ? 28 : 0 }}>
        아프리카 주요 동향
      </div>
      <div className="news-list">
        {africaNews.map((item, i) => <NewsRow key={item.link || i} item={item} />)}
      </div>
    </main>
  );
}