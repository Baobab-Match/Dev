import { useState } from "react";
import { CATEGORIES } from "../data";
import { Icons } from "../components/ui";
import { signUp, logIn } from "../firebase/auth";

// Firebase 에러 코드 → 한국어 메시지
function authErrorMessage(code) {
  switch (code) {
    case "auth/email-already-in-use": return "이미 가입된 이메일입니다.";
    case "auth/weak-password":        return "비밀번호는 6자 이상이어야 합니다.";
    case "auth/invalid-email":        return "이메일 형식이 올바르지 않습니다.";
    case "auth/invalid-credential":   return "이메일 또는 비밀번호가 일치하지 않습니다.";
    case "auth/operation-not-allowed":return "이메일/비밀번호 로그인이 비활성화되어 있습니다.";
    default:                          return "문제가 발생했습니다. 다시 시도해 주세요.";
  }
}

// 카테고리 드롭다운 (단일 선택)
function CategorySelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="cat-select">
      <button
        type="button"
        className={"cat-trigger" + (value ? "" : " placeholder")}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        {value || "카테고리 전체"}
        <Icons.caretDown className={"spin-arrow" + (open ? " open" : "")} style={{ color: "var(--green-700)" }} />
      </button>
      {open && (
        <div className="cat-menu" role="listbox">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={"cat-opt" + (c === value ? " active" : "")}
              onClick={() => { onChange(c); setOpen(false); }}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, required, children, hint, top }) {
  return (
    <div className={"form-row" + (top ? " top" : "")}>
      <label className="form-label">
        {label}{required && <span className="req">*</span>}
        {hint && <small>{hint}</small>}
      </label>
      {children}
    </div>
  );
}

// 공통 계정 칸 — 세 폼이 전부 이걸 사용 (이메일/비밀번호/전화번호)
function AccountFields({ account, setAccount }) {
  const set = (k) => (e) => setAccount({ ...account, [k]: e.target.value });
  return (
    <>
      <Field label="이메일" required>
        <input className="field" type="email" placeholder="ex) user@email.com"
          value={account.email} onChange={set("email")} />
      </Field>
      <Field label="비밀번호" required>
        <input className="field" type="password" placeholder="6자 이상"
          value={account.password} onChange={set("password")} />
      </Field>
      <Field label="비밀번호 확인" required>
        <input className="field" type="password" placeholder="비밀번호를 한 번 더 입력해주세요."
         value={account.passwordConfirm} onChange={set("passwordConfirm")} />
      </Field>
      <Field label="전화번호" hint="(선택사항)">
        <input className="field" type="tel" placeholder="ex) 010-1234-5678"
          value={account.phone} onChange={set("phone")} />
      </Field>
    </>
  );
}

// 가입 처리 공통 훅 — 검증 + signUp + 에러/로딩
function useSignup(onDone) {
  const [account, setAccount] = useState({ email: "", password: "", passwordConfirm: "", phone: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(profile, extraValid) {
    setError("");
    if (extraValid) { setError(extraValid); return; }
    if (!account.email || !account.password) {
      setError("이메일과 비밀번호를 입력해 주세요.");
      return;
    }
    if (account.password !== account.passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
    setLoading(true);
    try {
      await signUp({
        email: account.email,
        password: account.password,
        profile: { ...profile, phone: account.phone },
      });
      onDone();
    } catch (e) {
      setError(authErrorMessage(e.code));
    } finally {
      setLoading(false);
    }
  }
  return { account, setAccount, error, loading, submit };
}

// 공공기관 폼
function GovForm({ onDone }) {
  const [ministry, setMinistry] = useState("");
  const [department, setDepartment] = useState("");
  const [interest, setInterest] = useState("");
  const [purpose, setPurpose] = useState("");
  const [region, setRegion] = useState("");
  const { account, setAccount, error, loading, submit } = useSignup(onDone);

  function handleSubmit() {
    const missing = (!ministry || !department || !interest || !purpose)
      ? "필수 항목을 모두 입력해 주세요." : "";
    submit({ type: "gov", ministry, department, interest, purpose, region }, missing);
  }

  return (
    <>
      <Field label="부처명" required>
        <input className="field" placeholder="ex) 환경부"
          value={ministry} onChange={(e) => setMinistry(e.target.value)} />
      </Field>
      <Field label="소속부서명" required>
        <input className="field" placeholder="ex) 기후적응과"
          value={department} onChange={(e) => setDepartment(e.target.value)} />
      </Field>
      <Field label="관심분야" required>
        <CategorySelect value={interest} onChange={setInterest} />
      </Field>
      <Field label="가입목적" required top>
        <textarea className="field" placeholder="ex) 물 부족 문제에 대응 가능한 한국 기술을 아프리카 국가에 연계하기 위한 협력 전략 수립용."
          value={purpose} onChange={(e) => setPurpose(e.target.value)} />
      </Field>
      <Field label="주요 협력 대상 지역" hint="(선택사항)" top>
        <input className="field" placeholder="ex) 에티오피아"
          value={region} onChange={(e) => setRegion(e.target.value)} />
      </Field>
      <AccountFields account={account} setAccount={setAccount} />
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        <button className="btn confirm-yes" onClick={handleSubmit} disabled={loading}>
          {loading ? "가입 중…" : "가입 완료"}
        </button>
      </div>
    </>
  );
}

// 기업 폼
function CompanyForm({ onDone }) {
  const [company, setCompany] = useState("");
  const [bizNo, setBizNo] = useState("");
  const [field, setField] = useState("");
  const [tech, setTech] = useState("");
  const [purpose, setPurpose] = useState("");
  const [exportExp, setExportExp] = useState("");
  const { account, setAccount, error, loading, submit } = useSignup(onDone);

  // 입력하는 동안 자동으로 123-45-67890 형태로 하이픈 넣기
  function handleBizNo(e) {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10); // 숫자만, 최대 10자리
    let formatted = digits;
    if (digits.length > 5) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5)}`;
    } else if (digits.length > 3) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    setBizNo(formatted);
  }

  function handleSubmit() {
    // 사업자번호 형식 검증 (하이픈 빼고 10자리 숫자)
    const bizDigits = bizNo.replace(/\D/g, "");

    let invalid = "";
    if (!company || !bizNo || !field || !tech || !purpose || !exportExp) {
      invalid = "필수 항목을 모두 입력해 주세요.";
    } else if (bizDigits.length !== 10) {
      invalid = "사업자 등록번호는 10자리 숫자여야 합니다.";
    }

    // 저장은 하이픈 없는 10자리 숫자로 통일 (보안 규칙 검증과 일치)
    submit(
      { type: "company", company, bizNo: bizDigits, field, tech, purpose, exportExp },
      invalid
    );
  }

  return (
    <>
      <Field label="회사명" required>
        <input className="field" placeholder="ex) (주)클린워터솔루션"
          value={company} onChange={(e) => setCompany(e.target.value)} />
      </Field>
      <Field label="사업자 등록번호" required>
        <input className="field" inputMode="numeric" placeholder="ex) 123-45-67890"
          value={bizNo} onChange={handleBizNo} maxLength={12} />
      </Field>
      <Field label="기술분야" required>
        <CategorySelect value={field} onChange={setField} />
      </Field>
      <Field label="보유기술명" required>
        <input className="field" placeholder="ex) 태양광 기반 소형 정수 시스템"
          value={tech} onChange={(e) => setTech(e.target.value)} />
      </Field>
      <Field label="가입목적" required top>
        <textarea className="field" placeholder="ex) 물 부족 국가에 적합한 정수 기술 홍보, 협력대상국가 매칭 위해."
          value={purpose} onChange={(e) => setPurpose(e.target.value)} />
      </Field>
      <Field label="수출 경험 유무" required>
        <select className="field" value={exportExp} onChange={(e) => setExportExp(e.target.value)}>
          <option value="" disabled>선택해 주세요</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      </Field>
      <AccountFields account={account} setAccount={setAccount} />
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        <button className="btn confirm-yes" onClick={handleSubmit} disabled={loading}>
          {loading ? "가입 중…" : "가입 완료"}
        </button>
      </div>
    </>
  );
}

// 일반 폼
function GeneralForm({ onDone }) {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const { account, setAccount, error, loading, submit } = useSignup(onDone);

  function handleSubmit() {
    const missing = (!name || !interest) ? "필수 항목을 모두 입력해 주세요." : "";
    submit({ type: "general", name, interest }, missing);
  }

  return (
    <>
      <Field label="이름" required>
        <input className="field" placeholder="ex) 홍길동"
          value={name} onChange={(e) => setName(e.target.value)} />
      </Field>
      <Field label="관심분야" required>
        <CategorySelect value={interest} onChange={setInterest} />
      </Field>
      <AccountFields account={account} setAccount={setAccount} />
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        <button className="btn confirm-yes" onClick={handleSubmit} disabled={loading}>
          {loading ? "가입 중…" : "가입 완료"}
        </button>
      </div>
    </>
  );
}

// 로그인 폼
function LoginForm({ onDone, onGoSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setError("");
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해 주세요.");
      return;
    }
    setLoading(true);
    try {
      await logIn({ email, password });
      onDone();
    } catch (e) {
      setError(authErrorMessage(e.code));
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Field label="이메일">
        <input className="field" type="email" placeholder="ex) user@email.com"
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </Field>
      <Field label="비밀번호">
        <input className="field" type="password" placeholder="비밀번호를 입력해주세요."
          value={password} onChange={(e) => setPassword(e.target.value)} />
      </Field>
      {error && <p className="form-error">{error}</p>}
      <div className="form-actions">
        <button className="btn confirm-yes" onClick={handleSubmit} disabled={loading}>
          {loading ? "로그인 중" : "로그인"}
        </button>
      </div>
      <p className="modal-switch login-switch">
        계정이 없으신가요?{" "}
        <button type="button" className="link-btn" onClick={onGoSignup}>회원가입</button>
      </p>
    </>
  );
}

// 회원 유형 한글 라벨 — 폼 단계 안내에 사용
const TYPE_LABEL = { gov: "공공기관", company: "기업", general: "개인" };

export default function SignupModal({ onClose, onDone }) {
  const [view, setView] = useState("login");
  const showBack = view && view !== "login";

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal modal--signup" onClick={(e) => e.stopPropagation()}>
        <button className="modal-x" onClick={onClose} aria-label="닫기">✕</button>

        {showBack && (
          <button
            type="button"
            className="modal-back"
            onClick={() => setView(null)}
            aria-label="회원 유형 다시 선택"
          >
            ← 뒤로
          </button>
        )}

        <div className={"modal-body" + (showBack ? " has-back" : "")}>
          {view === "login" && (
            <>
              <h2 className="modal-title">로그인</h2>
              <p className="modal-sub">바오밥매치에 오신 것을 환영합니다.</p>
              <div className="modal-rule" />
              <LoginForm onDone={onDone} onGoSignup={() => setView(null)} />
            </>
          )}

          {view === null && (
            <>
              <h2 className="modal-title">회원가입</h2>
              <p className="modal-sub">
                <b>바오밥매치(Baobab Match)</b>에 오신 것을 환영합니다.<br />
                회원이 되시면 녹색기술 정보를 한눈에, 맞춤형 국가 매칭까지 다양한 혜택을 누려보세요.<br />
                아래 중 회원타입을 선택하신 후 회원가입을 진행해주시기 바랍니다.
              </p>
              <div className="type-grid">
                <button className="type-card" onClick={() => setView("gov")}>
                  <Icons.gov /><b>공공기관</b>
                </button>
                <button className="type-card" onClick={() => setView("company")}>
                  <Icons.company /><b>기업</b>
                </button>
                <button className="type-card" onClick={() => setView("general")}>
                  <Icons.people /><b>개인</b>
                </button>
              </div>
              <p className="modal-switch">
                이미 계정이 있으신가요?{" "}
                <button type="button" className="link-btn" onClick={() => setView("login")}>로그인</button>
              </p>
            </>
          )}

          {showBack && (
            <>
              <h2 className="modal-title">회원가입</h2>
              <p className="modal-sub">
                <b>{TYPE_LABEL[view]}</b> 회원 정보를 기입해 주세요.
              </p>
              <div className="modal-rule" />
              {view === "gov" && <GovForm onDone={onDone} />}
              {view === "company" && <CompanyForm onDone={onDone} />}
              {view === "general" && <GeneralForm onDone={onDone} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}