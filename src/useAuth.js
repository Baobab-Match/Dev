import { useState, useEffect, useCallback } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { fetchUserProfile, updateUserProfile } from "./firebase/firestore";
import { logOut } from "./firebase/auth";

export function useAuth() {
  const [user, setUser] = useState(null);       // Firebase 로그인 세션 (null=비로그인)
  const [profile, setProfile] = useState(null); // users/{uid} 프로필
  const [ready, setReady] = useState(false);    // 첫 인증 확인이 끝났는지

  useEffect(() => {
    // 로그인 상태가 바뀔 때마다 실행 (로그인/로그아웃/새로고침 복원)
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        try {
          setProfile(await fetchUserProfile(u.uid));
        } catch {
          setProfile(null);
        }
      } else {
        setProfile(null);
      }
      setReady(true);
    });
    return unsub; // 정리(cleanup)
  }, []);

  // 프로필 필드 저장 → DB 반영 + 로컬 상태 즉시 갱신
  const updateProfile = useCallback(async (patch) => {
    if (!user) return;
    await updateUserProfile(user.uid, patch);
    setProfile((prev) => ({ ...prev, ...patch }));
  }, [user]);

  return { user, profile, ready, logOut, updateProfile };
}