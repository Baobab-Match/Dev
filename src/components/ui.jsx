// 공통 UI
import { useState, useEffect } from "react";
import { AFRICA_PATHS } from "../africaGeo";

export function BaobabLogo({ light = false }) {
  const trunk = light ? "#fff" : "#2d4a32";
  const leaf = light ? "#dfe6da" : "#5a7d5a";
  return (
    <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="34" cy="11" r="5" fill={sun} opacity="0.9" />
      <path d="M24 44 V26" stroke={trunk} strokeWidth="3.2" strokeLinecap="round" />
      <path d="M24 27 C16 24 12 18 10 12 M24 27 C32 24 36 18 38 12 M24 26 C22 20 22 15 24 9 M24 27 C18 23 15 20 11 19 M24 27 C30 23 33 20 37 19"
        stroke={trunk} strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <g fill={leaf}>
        <circle cx="10" cy="12" r="3.4" /><circle cx="38" cy="12" r="3.4" />
        <circle cx="24" cy="9" r="3.6" /><circle cx="11" cy="19" r="3" /><circle cx="37" cy="19" r="3" />
        <circle cx="16" cy="14" r="2.6" /><circle cx="32" cy="14" r="2.6" />
      </g>
      <path d="M24 44 C20 40 17 41 15 44 M24 44 C28 40 31 41 33 44" stroke={trunk} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

export const Icons = {
  search: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  chevron: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  caretDown: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  arrow: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  gov: (p) => (
    <svg viewBox="0 0 64 64" fill="none" {...p}>
      <path d="M32 6 56 18H8z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="12" r="1.6" fill="currentColor" />
      <path d="M12 24v22M22 24v22M32 24v22M42 24v22M52 24v22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6 50h52M9 24h46" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 58h56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  company: (p) => (
    <svg viewBox="0 0 64 64" fill="none" {...p}>
      <rect x="10" y="14" width="26" height="44" stroke="currentColor" strokeWidth="2.5" />
      <rect x="36" y="26" width="18" height="32" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 22h4M26 22h4M16 30h4M26 30h4M16 38h4M26 38h4M16 46h4M26 46h4M42 34h6M42 42h6M42 50h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 58h52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  person: (p) => (
    <svg viewBox="0 0 64 64" fill="none" {...p}>
      <circle cx="32" cy="22" r="11" stroke="currentColor" strokeWidth="2.5" />
      <path d="M12 54c0-11 9-19 20-19s20 8 20 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  people: (p) => (
    <svg viewBox="0 0 64 64" fill="none" {...p}>
      <circle cx="32" cy="22" r="9" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="15" cy="26" r="7" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="49" cy="26" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 50c0-8 6-14 14-14s14 6 14 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M4 48c0-6 4-11 10-11M60 48c0-6-4-11-10-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  star: ({ filled, ...p }) => (
    <svg width="20" height="20" viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"} {...p}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.8l6.5-.9L12 2.5z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
};

// 국가 실루엣 (단순화)
export const SILHOUETTES = {
  에티오피아: "M20 38 L34 30 L52 26 L70 24 L84 30 L88 44 L82 58 L70 66 L74 78 L60 84 L46 80 L34 84 L24 74 L28 62 L18 52 Z",
  마다가스카르: "M58 14 L70 22 L72 40 L66 62 L56 84 L48 90 L42 80 L46 58 L50 38 L52 22 Z",
  우간다: "M24 30 L44 24 L58 28 L74 26 L84 38 L80 54 L84 68 L70 76 L52 74 L38 78 L26 68 L30 52 L20 42 Z",
};

// 경로(d) 문자열에서 좌표만 뽑아 bounding box 계산 (M/L 좌표 기반)
function getPathBBox(d) {
  const nums = d.match(/-?\d+\.?\d*/g)?.map(Number) || [];
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  for (let i = 0; i < nums.length; i += 2) {
    const x = nums[i], y = nums[i + 1];
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY };
}

export function CountrySilhouette({ id, className }) {
  const country = AFRICA_PATHS.find((c) => c.ko === id);

  // 매핑 안 되는 예외 케이스만 기존 임시 모양으로 폴백
  if (!country) {
    const d = SILHOUETTES[id] || SILHOUETTES.에티오피아;
    return (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden>
        <path d={d} />
      </svg>
    );
  }

  const { minX, minY, maxX, maxY } = getPathBBox(country.d);
  const pad = (maxX - minX) * 0.08; // 여백 8%
  const vb = `${minX - pad} ${minY - pad} ${maxX - minX + pad * 2} ${maxY - minY + pad * 2}`;

  return (
    <svg className={className} viewBox={vb} fill="currentColor" aria-hidden>
      <path d={country.d} />
    </svg>
  );
}

// KOICA 도넛 차트
const DONUT_COLORS = ["var(--green-900)", "var(--green-800)", "var(--green-700)", "var(--green-600)", "var(--green-500)", "var(--green-300)"];

export function DonutChart({ sectors, total }) {
  const radius = 70, stroke = 26, cx = 95, cy = 95;
  const circ = 2 * Math.PI * radius;
  let offset = 0;

  // 모바일(<=820px)에서만 중앙에 전체 금액 표시
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 820
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 820);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <svg className="donut" viewBox="0 0 190 190" role="img" aria-label="KOICA 분야별 지원 비율">
      <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#e8e3d6" strokeWidth={stroke} />
      {sectors.map((s, i) => {
        const len = (s.percent / 100) * circ;
        const seg = (
          <circle
            key={s.name} cx={cx} cy={cy} r={radius} fill="none"
            stroke={DONUT_COLORS[i % DONUT_COLORS.length]} strokeWidth={stroke}
            strokeDasharray={`${len} ${circ - len}`} strokeDashoffset={-offset}
            transform={`rotate(-90 ${cx} ${cy})`}
          />
        );
        offset += len;
        return seg;
      })}
      <circle cx={cx} cy={cy} r={radius - stroke / 2 - 4} fill="var(--paper)" />

      {isMobile && total ? (
        <>
          <text x={cx} y={cy - 14} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="12" fill="var(--green-900)">KOICA</text>
          <text x={cx} y={cy + 2} textAnchor="middle" fontFamily="var(--font-body)" fontSize="8" fill="var(--ink-soft)">분야별 지원</text>
          <text x={cx} y={cy + 20} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="13" fill="var(--green-700)">{total}</text>
        </>
      ) : (
        <>
          <text x={cx} y={cy - 4} textAnchor="middle" fontFamily="var(--font-display)" fontWeight="900" fontSize="15" fill="var(--green-900)">KOICA</text>
          <text x={cx} y={cy + 15} textAnchor="middle" fontFamily="var(--font-body)" fontSize="10" fill="var(--ink-soft)">분야별 지원</text>
        </>
      )}
    </svg>
  );
}

export { DONUT_COLORS };