// 회원가입 · 로그인 · 로그아웃 함수 모음
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./config";

// 회원가입: 계정 만들고 + users 컬렉션에 프로필 문서 생성
export async function signUp({ email, password, profile }) {
  // 1) 이메일/비밀번호로 Auth 계정 생성
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  // 2) users/{uid} 문서에 프로필 + 빈 즐겨찾기 배열 저장
  await setDoc(doc(db, "users", uid), {
    email,
    ...profile,            // type, 기관명/회사명/이름 등 타입별 필드 전체
    favorites: [],         // 즐겨찾기 초기값 (4단계 addFavorite이 여기에 쌓음)
    createdAt: serverTimestamp(),
  });

  return cred.user;
}

// 로그인
export async function logIn({ email, password }) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

// 로그아웃
export async function logOut() {
  await signOut(auth);
}