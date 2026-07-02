export default function MatchConfirm({ profile, onYes, onNo, onClose }) {
  // 타입별로 분야 값과 라벨 결정
  // 기업: 기술분야(field) / 공공기관·일반: 관심분야(interest)
  const isCompany = profile?.type === "company";
  const myField = isCompany ? profile?.field : profile?.interest;
  const label = isCompany ? "기술 분야" : "관심 분야";

  // 분야가 없는 경우 (프로필 로딩 전 등)
  const hasField = Boolean(myField);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="닫기">✕</button>
        <h2 className="modal-title">관심 분야·기술에 맞는 국가 추천</h2>
        <div className="modal-rule" />
        <div className="confirm-q">
          {hasField ? (
            <>
              <p>내 {label}인</p>
              <div className="big">"{myField}"</div>
              <p>에 맞는 국가를 매칭할까요?</p>
            </>
          ) : (
            <p>매칭할 분야를 선택해 주세요.</p>
          )}
        </div>
        <div className="confirm-actions">
          {hasField && (
            <button className="btn confirm-yes" onClick={onYes}>네 (매칭하기)</button>
          )}
          <button className="btn confirm-no" onClick={onNo}>
            {hasField ? <>아니요 <small>(다른 분야 선택)</small></> : "분야 선택하기"}
          </button>
        </div>
      </div>
    </div>
  );
}