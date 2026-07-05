import { useState } from "react";
import { CATEGORIES } from "../data";

// 관심분야 최대 선택 개수 — 너무 많이 고르면 매칭이 흐려져서 3개로 제한
const MAX_FIELDS = 3;

// type별 문구 (기업·공공기관·개인)
const COPY = {
  기업: {
    sub: <>매칭하고 싶은 관심 분야·기술을 선택해 주세요. (최대 {MAX_FIELDS}개)<br />공공데이터를 학습한 AI가 가장 적합한 국가를 추천해 드립니다.</>,
    btn: (list) => `"${list.join(" · ")}" (으)로 매칭하기`,
  },
  공공기관: {
    sub: <>지원·협력하려는 분야를 선택해 주세요. (최대 {MAX_FIELDS}개)<br />공공데이터를 학습한 AI가 지원 효과가 큰 국가를 추천해 드립니다.</>,
    btn: (list) => `"${list.join(" · ")}" (으)로 매칭하기`,
  },
  개인: {
    sub: <>관심 있는 이슈를 선택해 주세요. (최대 {MAX_FIELDS}개)<br />공공데이터를 학습한 AI가 주목할 만한 국가를 추천해 드립니다.</>,
    btn: (list) => `"${list.join(" · ")}" 관련 국가 보기`,
  },
};

export default function FieldSelectModal({ onClose, onMatch, type = "기업" }) {
  const [picked, setPicked] = useState([]); // 이제 배열 — 여러 개 선택 가능
  const copy = COPY[type] ?? COPY["기업"];   // 모르는 type이면 기업 문구로

  const toggle = (cat) => {
    setPicked((prev) => {
      if (prev.includes(cat)) return prev.filter((c) => c !== cat); // 이미 선택 → 해제
      if (prev.length >= MAX_FIELDS) return prev; // 꽉 찼으면 무시 (버튼도 disabled 처리됨)
      return [...prev, cat];
    });
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="닫기">✕</button>
        <h2 className="modal-title">분야 선택</h2>
        <p className="modal-sub">{copy.sub}</p>
        <p className="field-count">{picked.length} / {MAX_FIELDS}개 선택됨</p>
        <div className="modal-rule" />

        <div className="field-grid">
          {CATEGORIES.map((cat) => {
            const active = picked.includes(cat);
            const disabled = !active && picked.length >= MAX_FIELDS;
            return (
              <button
                key={cat}
                type="button"
                className={"field-chip" + (active ? " active" : "")}
                onClick={() => toggle(cat)}
                aria-pressed={active}
                disabled={disabled}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="form-actions">
          <button className="btn confirm-yes" onClick={() => onMatch(picked)} disabled={picked.length === 0}>
            {picked.length ? copy.btn(picked) : "분야를 1개 이상 선택해 주세요"}
          </button>
        </div>
      </div>
    </div>
  );
}