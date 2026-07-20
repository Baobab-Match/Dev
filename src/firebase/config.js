import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

// 개발 환경(localhost)에서만 App Check 디버그 토큰 활성화
if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

// App Check 초기화 (reCAPTCHA v3)
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

// Google Analytics(GA4) 초기화 — 브라우저 환경 + 지원 여부(광고 차단 등으로 불가할 수 있음) 확인 후에만 실행
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) analytics = getAnalytics(app);
  });
}

export const auth = getAuth(app);

// Firestore 초기화 — long-polling 자동 감지(auto-detect).
//  기본 스트리밍(WebChannel) 연결은 브라우저 추적 방지·방화벽·프록시 환경에서
//  차단될 수 있어, 즐겨찾기 같은 읽기/쓰기가 조용히 실패한다.
//  force(무조건 강제) 대신 autoDetect를 쓰면 환경에 맞춰 전환되어
//  세션이 시간이 지나도 끊기지 않고 안정적으로 유지된다.
export const db = initializeFirestore(app, {
  experimentalAutoDetectLongPolling: true,
});