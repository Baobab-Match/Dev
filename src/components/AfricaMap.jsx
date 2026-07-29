import { useState } from "react";
import { AFRICA_PATHS } from "../africaGeo";

export default function AfricaMap({ recommended = [], clickable = [], selected, onSelect }) {
  // 툴팁 상태: 어떤 나라 위에 있는지 + 화면상 위치(px)
  const [tip, setTip] = useState(null); // { ko, isRec, x, y } | null

  // 마우스가 지도(.map-wrap) 안에서 어디에 있는지를 기준으로 툴팁 위치를 잡는다.
  const handleMove = (e, c, isRec) => {
    const wrap = e.currentTarget.closest(".map-wrap");
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // 툴팁이 지도 좌우 끝을 넘어가지 않도록 안쪽으로 살짝 제한
    const clampedX = Math.max(60, Math.min(x, rect.width - 60));
    setTip({ ko: c.ko, isRec, x: clampedX, y });
  };

  return (
    <>
      <svg viewBox="16 29 768 790" className="africa-map" role="img"
        aria-label="아프리카 대륙 지도. 초록색은 추천 국가입니다.">
        {AFRICA_PATHS.map((c) => {
          const isRec = recommended.includes(c.ko);
          const isClickable = clickable.includes(c.ko);
          const isSel = selected === c.ko;
          const cls = ["geo-country",
            isRec ? "is-recommended" : "",
            isSel ? "is-selected" : "",
            isClickable ? "is-clickable" : ""].join(" ");
          return (
            <path key={c.en} d={c.d} className={cls}
              onClick={() => isClickable && onSelect && onSelect(c.ko)}
              onMouseMove={(e) => handleMove(e, c, isRec)}
              onMouseLeave={() => setTip(null)}
              tabIndex={isClickable ? 0 : -1}
              role={isClickable ? "button" : undefined}
              aria-label={c.ko + (isRec ? " (추천 국가)" : "")}
              onKeyDown={(e) => {
                if (isClickable && onSelect && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault(); onSelect(c.ko);
                }
              }}>
              <title>{c.ko}</title>
            </path>
          );
        })}
      </svg>

      {tip && (
        <div className="map-tooltip show" style={{ left: tip.x, top: tip.y }}>
          {tip.ko}
          {tip.isRec && <span className="tt-badge">추천</span>}
        </div>
      )}
    </>
  );
}