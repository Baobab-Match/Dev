// Render 무료 플랜 콜드 스타트 대응 — 로그인 시 백그라운드로 baobab-api를 한 번 깨워둔다.
// 응답을 기다리지 않고(fire-and-forget) 결과도 확인하지 않는다 — 목적은 오직
// "서버에 요청 하나를 보내서 슬립 상태를 깨우는 것"이라, 200이든 404든 네트워크
// 오류든 사용자 경험과 무관하다. 절대 throw하지 않는다.
//
// 세션(탭)당 1회만 실행되도록 sessionStorage로 중복 호출을 막는다 — 페이지를
// 여러 번 오갈 때마다 매번 깨우기 요청을 보낼 필요는 없기 때문.
//
// 다른 파일들(MatchResults.jsx, IndustryNewsPage.jsx, SignupModal.jsx)과 동일한
// AI_API_BASE 상수를 그대로 사용한다 — 추후 여유 있을 때 한 곳으로 통합 고려.
const AI_API_BASE = "https://baobab-api-di7o.onrender.com";
const WARMUP_FLAG = "baobab-api-warmed";

export function warmupApi() {
  if (typeof window === "undefined") return; // SSR 등 브라우저 환경이 아니면 스킵
  try {
    if (sessionStorage.getItem(WARMUP_FLAG)) return; // 이번 세션에 이미 깨웠으면 스킵
    sessionStorage.setItem(WARMUP_FLAG, "1");
  } catch {
    // sessionStorage 접근 불가(프라이빗 모드 등)여도 깨우기 자체는 계속 시도
  }

  // keepalive: 페이지 이동/언마운트 중에도 요청이 끊기지 않도록.
  // 응답은 의도적으로 사용하지 않음 — 성공/실패 모두 무시.
  fetch(`${AI_API_BASE}/`, { method: "GET", mode: "cors", keepalive: true }).catch(() => {});
}