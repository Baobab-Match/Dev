import { useState } from "react";
import { FIELD_GROUPS } from "../data";

const MAX_FIELDS = 3;

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

export default function FieldSelectContent({ onMatch, type = "기업" }) {
  const [picked, setPicked] = useState([]);
  const copy = COPY[type] ?? COPY["기업"];

  const toggle = (cat) => {
    setPicked((prev) => {
      if (prev.includes(cat)) return prev.filter((c) => c !== cat);
      if (prev.length >= MAX_FIELDS) return prev;
      return [...prev, cat];
    });
  };

  return (
    <>
      <h2 className="modal-title">분야 선택</h2>
      <p className="modal-sub">{copy.sub}</p>
      <p className="field-count">{picked.length} / {MAX_FIELDS}개 선택됨</p>
      <div className="modal-rule" />

      {FIELD_GROUPS.map((group) => (
        <div className="field-group" key={group.tag}>
          <div className="field-group-tag">{group.tag}</div>
          <div className="field-grid">
            {group.items.map((cat) => {
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
        </div>
      ))}

      <div className="form-actions">
        <button className="btn confirm-yes" onClick={() => onMatch(picked)} disabled={picked.length === 0}>
          {picked.length ? copy.btn(picked) : "분야를 1개 이상 선택해 주세요"}
        </button>
      </div>
    </>
  );
}