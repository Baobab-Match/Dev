import { useEffect, useRef, useState } from "react";
import logoIcon from "../assets/logo-icon.png";

const DEFAULT_MESSAGES = [
  "아프리카 54개국 데이터를 분석하고 있어요",
  "기후·외교 지표를 비교하는 중이에요",
  "가장 적합한 협력 국가를 찾고 있어요",
];

const CIRC = 490; // 2 * π * 78

// 튜닝 포인트 — 필요하면 이 숫자들만 조절하면 됨
const ACTIVE_TARGET = 85;      // 로딩 중 점근적으로 접근할 상한선(%) — 너무 높으면 마무리 때 도약폭이 커짐
const ACTIVE_SPEED = 0.006;    // 클수록 빨리 채워짐 (0~1)
const FINISH_DURATION_MS = 700;   // 응답 도착 후 100%까지 채우는 데 걸리는 시간 — 짧으면 "갑자기 확" 느낌
const MIN_DISPLAY_MS = 4000;      // 로딩창이 화면에 보이는 최소 시간(서버가 아무리 빨라도 이만큼은 보여줌)

// AI 매칭 대기 화면. active=false가 되면(응답 도착) 100%까지 확실히 채운 뒤 사라짐.
export default function AiMatchLoading({ messages = DEFAULT_MESSAGES, interval = 3200, active = true }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  const pctRef = useRef(0);          // 프레임 사이에도 진행률을 이어서 유지 (0으로 리셋되지 않음)
  const shownAtRef = useRef(null);   // 로딩창이 처음 뜬 시각 (최소 표시시간 계산용)
  const rafRef = useRef();
  const timerRef = useRef();

  // 메시지 순환
  useEffect(() => {
    if (!active) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIdx((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 260);
    }, interval);
    return () => clearInterval(t);
  }, [active, interval, messages.length]);

  // 진행률 애니메이션
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timerRef.current);

    if (active) {
      setDone(false);
      // 새 매칭 요청이 시작될 때마다 항상 0%부터 — 이전 요청이 끝났거나
      // 중간에 끊긴 leftover 값(예: 99%, 4%)이 이어지지 않도록 명시적으로 리셋.
      pctRef.current = 0;
      setPct(0);
      shownAtRef.current = performance.now();

      // 90%까지 점근적으로 서서히 접근 (실제 진행률을 알 수 없으니 "그럴듯하게" 채움)
      const step = () => {
        pctRef.current += (ACTIVE_TARGET - pctRef.current) * ACTIVE_SPEED;
        setPct(pctRef.current);
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafRef.current);
    }

    // active === false (응답 도착) — 최소 표시시간을 채운 뒤 100%까지 확실히 채우고 끝냄
    const elapsed = shownAtRef.current != null ? performance.now() - shownAtRef.current : MIN_DISPLAY_MS;
    const wait = Math.max(0, MIN_DISPLAY_MS - elapsed);

    timerRef.current = setTimeout(() => {
      const start = pctRef.current;
      const t0 = performance.now();
      const finishStep = (now) => {
        const p = Math.min((now - t0) / FINISH_DURATION_MS, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease-out
        pctRef.current = start + (100 - start) * eased;
        setPct(pctRef.current);
        if (p < 1) {
          rafRef.current = requestAnimationFrame(finishStep);
        } else {
          pctRef.current = 100;
          setPct(100);
          setDone(true); // 정확히 100%에 도달했음을 보장 — 여기서 확실히 사라짐
          shownAtRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(finishStep);
    }, wait);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(timerRef.current);
    };
  }, [active]);

  if (done) return null;

  const offset = CIRC - (CIRC * pct) / 100;

  return (
    <div className="ai-loading-overlay" role="status" aria-live="polite">
      <div className="ai-loading-card">
        <div className="ai-loading-ring-wrap">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="78" fill="none" stroke="var(--bone-dark)" strokeWidth="7" />
            <circle
              cx="90" cy="90" r="78" fill="none"
              stroke="var(--green-700)" strokeWidth="7" strokeLinecap="round"
              strokeDasharray={CIRC} strokeDashoffset={offset}
              transform="rotate(-90 90 90)"
              className="ai-loading-ring"
            />
          </svg>
          <div className="ai-loading-ring-center">
            <img src={logoIcon} alt="바오밥매치 로고" className="ai-loading-logo" />
            <div className="ai-loading-pct">{Math.round(pct)}%</div>
          </div>
        </div>
        <p className={`ai-loading-msg ${visible ? "is-visible" : ""}`}>
          {messages[idx]}
        </p>
      </div>
    </div>
  );
}