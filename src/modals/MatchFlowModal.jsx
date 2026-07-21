import MatchConfirmContent from "./MatchConfirmContent";
import FieldSelectContent from "./FieldSelectContent";

// SignupModal과 같은 패턴 — 오버레이·모달 껍데기는 하나만 두고
// "확인" ↔ "분야 선택" 전환은 내부 view만 바꿔서 처리한다.
// (예전엔 MatchConfirm·FieldSelectModal이 각자 오버레이를 가져서, 전환 시
//  통째로 언마운트→마운트 되며 화면이 뚝 끊겨 보였음)
export default function MatchFlowModal({ view, profile, type, onClose, onYes, onSwitchToField, onMatch }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="닫기">✕</button>
        {view === "confirm" ? (
          <MatchConfirmContent profile={profile} onYes={onYes} onNo={onSwitchToField} />
        ) : (
          <FieldSelectContent onMatch={onMatch} type={type} />
        )}
      </div>
    </div>
  );
}