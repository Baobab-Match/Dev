import { useState, useEffect, useCallback } from "react";

const KEY = "baobab_recent_countries";
const MAX = 6; // 최근 본 국가 최대 개수

function read() {
  try {
    const raw = localStorage.getItem(KEY);
    const arr = raw ? JSON.parse(raw) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function useRecentCountries() {
  const [recent, setRecent] = useState(read);

  // 다른 탭에서 바뀌어도 동기화
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === KEY) setRecent(read());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // 국가 방문 기록 — 맨 앞으로, 중복 제거, MAX개 유지
  const pushRecent = useCallback((id) => {
    if (!id) return;
    setRecent((prev) => {
      const next = [id, ...prev.filter((x) => x !== id)].slice(0, MAX);
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* 무시 */ }
      return next;
    });
  }, []);

  const clearRecent = useCallback(() => {
    try { localStorage.removeItem(KEY); } catch { /* 무시 */ }
    setRecent([]);
  }, []);

  return { recent, pushRecent, clearRecent };
}