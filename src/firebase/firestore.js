// Firestore 데이터 읽기/쓰기 함수 모음
//  - 사용자 프로필 / 즐겨찾기 / 매칭 피드백
// (국가 데이터는 콜랩 파이프라인으로 가공한 정적 데이터(data.js)를 그대로 사용 —
//  Firestore로 옮길 계획은 없어 관련 스텁 함수는 제거함)
import {
  collection, doc, getDoc, updateDoc, setDoc, arrayUnion, arrayRemove,
  addDoc, serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

// 내 프로필 문서 읽기 (users/{uid})
export async function fetchUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
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