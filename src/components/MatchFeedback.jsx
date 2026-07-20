import { useState, useRef, useEffect } from "react";
import { saveMatchFeedback } from "../firebase/firestore";

const REASONS = [
  { key: "field", label: "이 분야에서 한국과의 실제 지원·협력 이력이 적어 보여요" },
  { key: "climateFit", label: "국가의 기후 이슈랑 제가 고른 분야가 안 맞아요" },
  { key: "climateScore", label: "기후 위기 시급성 평가가 실제와 달라 보여요" },
  { key: "diplomacy", label: "한국과의 외교 친밀도 평가가 기대와 달라요" },
  { key: "develop", label: "국가의 지원 우선순위(개발 필요도) 평가가 안 맞아요" },
  { key: "export", label: "수출·시장 진입 여건 평가가 안 맞아요", companyOnly: true },
  { key: "techMatch", label: "제가 적은 보유 기술 설명이 잘 반영 안 된 것 같아요" },
  { key: "explanation", label: "추천 근거 설명이 부실해요" },
];

export default function MatchFeedback({ uid, countryIds, fieldSelected, userType }) {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState("ask"); // ask | detail | done
  const [picked, setPicked] = useState([]);
  const [otherText, setOtherText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = (key) => {
    setPicked((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const submit = async (positive) => {
    setStep("done"); // 실패해도 사용자 흐름은 안 막음
    try {
      await saveMatchFeedback({
        uid, countryIds, fieldSelected, positive,
        reasons: positive ? [] : picked,
        otherText: positive ? "" : otherText,
      });
    } catch { /* 저장 실패는 조용히 무시 — 재시도 유도 UI는 다음 단계 과제 */ }
  };

  const reasons = REASONS.filter((r) => !r.companyOnly || userType === "기업");

  return (
    <section ref={ref} className={"match-feedback" + (visible ? " is-visible" : "")}>
      {step === "done" ? (
        <p className="match-feedback-done">소중한 의견 감사드립니다. 더 나은 추천 결과를 만드는 데 반영하겠습니다.</p>
      ) : (
        <>
          <h3 className="match-feedback-title">이 추천, 도움이 되셨나요?</h3>
          {step === "ask" && (
            <div className="match-feedback-buttons">
              <button className="mf-btn mf-btn--good" onClick={() => submit(true)}>도움됐어요</button>
              <button className="mf-btn mf-btn--bad" onClick={() => setStep("detail")}>아쉬워요</button>
            </div>
          )}
          {step === "detail" && (
            <div className="match-feedback-detail">
              <p className="match-feedback-sub">
                어떤 점이 아쉬웠는지 알려주시면 다음 추천이 더 좋아져요 (복수 선택 가능)
              </p>
              <div className="match-feedback-chips">
                {reasons.map((r, idx) => (
                  <button
                    key={r.key}
                    type="button"
                    className={"mf-reason" + (picked.includes(r.key) ? " active" : "")}
                    onClick={() => toggle(r.key)}
                  >
                    <span className="mf-reason-num">{idx + 1}</span>
                    <span className="mf-reason-label">{r.label}</span>
                  </button>
                ))}
              </div>
              <textarea
                className="match-feedback-textarea"
                placeholder="더 하고 싶은 말이 있다면 적어주세요 (선택)"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
                rows={2}
              />
              <button
                className="section-btn mf-submit"
                onClick={() => submit(false)}
                disabled={picked.length === 0 && !otherText.trim()}
              >
                보내기
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}