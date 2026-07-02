import { useState } from "react";
import { CATEGORIES } from "../data";

// type별 문구 (기업·공공기관·개인)
const COPY = {
  기업: {
    sub: <>매칭하고 싶은 관심 분야·기술을 선택해 주세요.<br />공공데이터를 학습한 AI가 가장 적합한 국가를 추천해 드립니다.</>,
    btn: (p) => `"${p}" (으)로 매칭하기`,
  },
  공공기관: {
    sub: <>지원·협력하려는 분야를 선택해 주세요.<br />공공데이터를 학습한 AI가 지원 효과가 큰 국가를 추천해 드립니다.</>,
    btn: (p) => `"${p}" (으)로 매칭하기`,
  },
  개인: {
    sub: <>관심 있는 이슈를 선택해 주세요.<br />공공데이터를 학습한 AI가 주목할 만한 국가를 추천해 드립니다.</>,
    btn: (p) => `"${p}" 관련 국가 보기`,
  },
};

export default function FieldSelectModal({ onClose, onMatch, type = "기업" }) {
  const [picked, setPicked] = useState("");
  const copy = COPY[type] ?? COPY["기업"];   // 모르는 type이면 기업 문구로

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="닫기">✕</button>
        <h2 className="modal-title">분야 선택</h2>
        <p className="modal-sub">{copy.sub}</p>
        <div className="modal-rule" />

        <div className="field-grid">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={"field-chip" + (cat === picked ? " active" : "")}
              onClick={() => setPicked(cat)}
              aria-pressed={cat === picked}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="form-actions">
          <button className="btn confirm-yes" onClick={() => onMatch(picked)} disabled={!picked}>
            {picked ? copy.btn(picked) : "분야를 선택해 주세요"}
          </button>
        </div>
      </div>
    </div>
  );
}