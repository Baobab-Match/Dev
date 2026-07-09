import { useEffect, useRef, useState } from "react";
import logoIcon from "../assets/logo-icon.png";

const DEFAULT_MESSAGES = [
  "아프리카 54개국 데이터를 분석하고 있어요",
  "기후·외교 지표를 비교하는 중이에요",
  "가장 적합한 협력 국가를 찾고 있어요",
];

const CIRC = 490;

export default function AiMatchLoading({ messages = DEFAULT_MESSAGES, interval = 3200, active = true }) {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  const [pct, setPct] = useState(0);
  const rafRef = useRef();

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

  useEffect(() => {
    let raw = 0;
    const target = active ? 90 : 100;
    const speed = active ? 0.004 : 0.18;
    const step = () => {
      raw += (target - raw) * speed;
      setPct(Math.min(raw, 100));
      if (active || raw < 99.3) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  if (!active && pct >= 100) return null;

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