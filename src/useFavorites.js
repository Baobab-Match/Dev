import { useState, useEffect } from "react";
import { fetchFavorites, addFavorite, removeFavorite } from "./firebase/firestore";
import { COUNTRIES } from "./data";

export function useFavorites(user) {
  const [favorites, setFavorites] = useState([]);

  // nameEn(영문 슬러그) ↔ 한국어 id 양방향 변환
  const ID_TO_SLUG = Object.fromEntries(
    Object.entries(COUNTRIES).map(([id, c]) => [id, c.nameEn])
  );

  const SLUG_TO_ID = Object.fromEntries(
    Object.entries(COUNTRIES).map(([id, c]) => [c.nameEn, id])
  );

  // 로그인하면 Firestore에서 즐겨찾기 불러오기 (로그아웃하면 비움)
  useEffect(() => {
    if (!user) { setFavorites([]); return; }
    fetchFavorites(user.uid).then(setFavorites).catch(() => setFavorites([]));
  }, [user]);

  const isFavorite = (id) => favorites.includes(id);

  // 추가/제거 — 화면을 먼저 바꾸고(낙관적 업데이트) Firestore에 반영
  const toggleFavorite = async (id) => {
    if (!user) return; // 비로그인은 무시 (버튼 쪽에서 로그인 유도)
    const already = favorites.includes(id);
    setFavorites((prev) => already ? prev.filter((x) => x !== id) : [...prev, id]);
    try {
      if (already) await removeFavorite(user.uid, id);
      else await addFavorite(user.uid, id);
    } catch (e) {
      console.error("[즐겨찾기 저장실패]", e.code, e.message, "| uid:", user.uid, "| id:", id);
      // 실패하면 되돌리기
      setFavorites((prev) => already ? [...prev, id] : prev.filter((x) => x !== id));
    }
  };

  return { favorites, isFavorite, toggleFavorite };
}