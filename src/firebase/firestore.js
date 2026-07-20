// Firestore 데이터 읽기/쓰기 함수 모음
//  - 국가 데이터(countries) / AI 예측(predictions) / 즐겨찾기(users)
// ※ 실제 코드는 4번 단계에서 채웁니다. 지금은 뼈대.
import {
  collection, getDocs, doc, getDoc, updateDoc, setDoc, arrayUnion, arrayRemove,
  addDoc, serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

// 내 프로필 문서 읽기 (users/{uid})
export async function fetchUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// 모든 국가 데이터 가져오기 (지금 data.js의 COUNTRIES 역할)
export async function fetchCountries() {
  // TODO(4단계): getDocs(collection(db, "countries"))
  throw new Error("아직 미구현 — 4단계에서 채웁니다");
}

// 특정 국가의 AI 예측(추천 기술) 가져오기
export async function fetchPrediction(countryId) {
  // TODO(4단계): getDoc(doc(db, "predictions", countryId))
  throw new Error("아직 미구현 — 4단계에서 채웁니다");
}

// 내 즐겨찾기 목록 읽기 (users/{uid}.favorites)
export async function fetchFavorites(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? (snap.data().favorites || []) : [];
}

// 즐겨찾기 추가
export async function addFavorite(uid, countryId) {
  await setDoc(doc(db, "users", uid), {
    favorites: arrayUnion(countryId),
  }, { merge: true });
}

// 즐겨찾기 제거
export async function removeFavorite(uid, countryId) {
  await setDoc(doc(db, "users", uid), {
    favorites: arrayRemove(countryId),
  }, { merge: true });
}

// 내 프로필 일부 필드 업데이트 (관심분야 변경 등)
export async function updateUserProfile(uid, patch) {
  await updateDoc(doc(db, "users", uid), patch);
}

export async function saveMatchFeedback({ uid, countryIds, fieldSelected, positive, reasons, otherText }) {
  await addDoc(collection(db, "feedback"), {
    userId: uid || null,
    countryIds,
    fieldSelected,
    positive,
    reasons,           // 축 키 배열 — ["field","diplomacy",...], 도움됐으면 []
    otherText: otherText || "",
    createdAt: serverTimestamp(),
  });
}