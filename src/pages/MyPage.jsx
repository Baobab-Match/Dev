import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES, CATEGORIES } from "../data";
import { CountrySilhouette, Icons } from "../components/ui";
import { changePassword } from "../firebase/auth";

const TYPE_LABEL = { gov: "공공기관", company: "기업", general: "개인" };
const TYPE_ICON = { gov: "gov", company: "company", general: "person" };

// 정렬 기준 정의
const SORT_OPTIONS = [
  { key: "match", label: "종합 매칭" },
  { key: "diplomacy", label: "외교 친밀도 우선" },
  { key: "climate", label: "필요성 우선" },
];

// ── 관심 국가 목록 전용 "종합 매칭" — AI 서버 호출 없이 즉시 계산 (2026-08 정교화) ──
// 분야(field)를 지정하지 않은 상태라 AI의 recommend()를 쓸 수 없어서, AI의
// coop/need/entry 축과 같은 철학이되 fit·export는 뺀 3축 버전을 프론트에서 직접 계산.
// entry는 marketEntry(기업+스타트업 수, 54개국 중 23개국만 존재) 기반 프록시 —
// log1p로 완만하게 만든 뒤 전체 국가 최댓값 기준 0~1로 정규화. 데이터 없는 나라는
// (companyCount·startupCount 둘 다 0으로 취급돼) 자연스럽게 entry=0이 된다.
const ENTRY_PROXY = (() => {
  const ids = Object.values(COUNTRIES).map((c) => c.id);
  const raw = ids.map((id) => {
    const me = COUNTRIES[id]?.marketEntry || {};
    return Math.log1p((me.companyCount || 0) + (me.startupCount || 0));
  });
  const max = Math.max(...raw, 1);
  return Object.fromEntries(ids.map((id, i) => [id, raw[i] / max]));
})();

// AI TABLE_B_USER와 같은 철학(유저 유형별 축 비중) — 분야가 없어 fit·export는 빼고
// coop(외교)·need(기후취약)·entry(진입용이) 3축만, 합 1.0으로 재배분.
const OVERVIEW_WEIGHTS = {
  company: { coop: 0.35, need: 0.30, entry: 0.35 }, // 기업은 진입 용이도 비중을 높게
  gov:     { coop: 0.40, need: 0.50, entry: 0.10 }, // 공공기관은 지원 필요성 비중을 높게
  general: { coop: 0.40, need: 0.40, entry: 0.20 },
};

// 종합 매칭 점수 — profile.type별 가중합 (분야 미지정 3축 버전).
// (버그 수정: diplomacyScore 자체가 이미 KOICA 중점협력국 가산(+20)을 포함하고 있는데
// [CountryDetail.jsx 설명 참고] 여기서 +5를 또 더해 이중 가산되고 있었음 — 제거함)
function matchScore(c, userType = "general") {
  const w = OVERVIEW_WEIGHTS[userType] || OVERVIEW_WEIGHTS.general;
  const coop = Number(c.diplomacyScore) || 0;
  const need = Number(c.climateScore) || 0;
  const entry = (ENTRY_PROXY[c.id] || 0) * 100;
  return Math.round(w.coop * coop + w.need * need + w.entry * entry);
}

// 기준별로 점수를 뽑는 함수
function scoreFor(c, sortKey, userType) {
  if (sortKey === "diplomacy") return Number(c.diplomacyScore) || 0;
  if (sortKey === "climate") return Number(c.climateScore) || 0;
  return matchScore(c, userType);
}

const SCORE_LABEL = {
  match: "종합 매칭",
  diplomacy: "외교 친밀도",
  climate: "기후 필요성",
};

// Firebase 에러 코드 → 한국어 메시지 (비밀번호 변경 전용)
function pwErrorMessage(code) {
  switch (code) {
    case "auth/invalid-credential":    return "현재 비밀번호가 일치하지 않습니다.";
    case "auth/weak-password":         return "새 비밀번호는 6자 이상이어야 합니다.";
    case "auth/requires-recent-login": return "보안을 위해 로그아웃 후 다시 로그인한 뒤 시도해 주세요.";
    case "auth/too-many-requests":     return "시도 횟수가 많습니다. 잠시 후 다시 시도해 주세요.";
    default:                           return "문제가 발생했습니다. 다시 시도해 주세요.";
  }
}

// 계정 보안 — 비밀번호 변경 (이메일 아래 한 줄로 표시, "변경" 누르면 그 자리에서 폼이 펼쳐짐)
function PasswordSection() {
  const [editing, setEditing] = useState(false);
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);

  const resetFields = () => { setCurrent(""); setNext(""); setConfirm(""); setError(""); setDone(false); };
  const cancel = () => { setEditing(false); resetFields(); };

  async function handleSubmit() {
    setError(""); setDone(false);
    if (!current || !next || !confirm) { setError("모든 항목을 입력해 주세요."); return; }
    if (next.length < 6) { setError("새 비밀번호는 6자 이상이어야 합니다."); return; }
    if (next !== confirm) { setError("새 비밀번호가 일치하지 않습니다."); return; }
    setSaving(true);
    try {
      await changePassword(current, next);
      setDone(true);
      setCurrent(""); setNext(""); setConfirm("");
    } catch (e) {
      setError(pwErrorMessage(e.code));
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="profile-row profile-row--password">
      <b>비밀번호</b>
      {!editing ? (
        <span className="interest-view">
          ********
          <button type="button" className="link-btn" onClick={() => setEditing(true)}>변경</button>
        </span>
      ) : (
        <div className="password-edit">
          <input className="field" type="password" placeholder="현재 비밀번호"
            value={current} onChange={(e) => setCurrent(e.target.value)} />
          <input className="field" type="password" placeholder="새 비밀번호 (6자 이상)"
            value={next} onChange={(e) => setNext(e.target.value)} />
          <input className="field" type="password" placeholder="새 비밀번호 확인"
            value={confirm} onChange={(e) => setConfirm(e.target.value)} />

          {error && <p className="form-error">{error}</p>}
          {done && <p style={{ color: "var(--green-700)", fontWeight: 700 }}>비밀번호가 변경되었습니다.</p>}

          <div className="interest-actions">
            <button className="btn confirm-yes" onClick={handleSubmit} disabled={saving}>
              {saving ? "변경 중…" : "변경하기"}
            </button>
            <button className="btn confirm-no" onClick={cancel} disabled={saving}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function MyPage({ profile, favorites, isFavorite, toggleFavorite, openCountry, updateProfile, recent = [] }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [open, setOpen] = useState(false);     // 드롭다운 열림 상태
  const [saving, setSaving] = useState(false);
  const [sortKey, setSortKey] = useState("match"); // 즐겨찾기 정렬 기준

  // 즐겨찾기 국가 + 선택된 기준으로 정렬 (점수 높은 순)
  // profile?.type을 넘겨서 유저 유형별 가중치(OVERVIEW_WEIGHTS)가 반영되도록 함
  const rankedFav = useMemo(() => {
    const list = favorites.map((id) => COUNTRIES[id]).filter(Boolean);
    return list
      .map((c) => ({ country: c, score: scoreFor(c, sortKey, profile?.type) }))
      .sort((a, b) => b.score - a.score);
  }, [favorites, sortKey, profile?.type]);

  // 최근 본 국가 (즐겨찾기와 별개, 유효한 것만)
  const recentCountries = useMemo(
    () => recent.map((id) => COUNTRIES[id]).filter(Boolean),
    [recent]
  );

  // 프로필이 아직 안 불러와졌을 때
  if (!profile) {
    return (
      <main className="page">
        <div className="page-head">
          <div className="page-eyebrow">My Page</div>
          <h1 className="page-title">내 정보</h1>
          <p className="page-desc">프로필을 불러오는 중입니다…</p>
        </div>
      </main>
    );
  }

  // 타입별 대표 이름 (기업=회사명, 개인=이름, 공공기관=부처명)
  const displayName = profile.company || profile.name || profile.ministry || "회원";
  const isCompany = profile.type === "company";   // 기업은 기술분야(field)라 관심분야 변경 대상 아님
  const AvatarIcon = Icons[TYPE_ICON[profile.type] || "person"];

  const startEdit = () => { setDraft(profile.interest || ""); setOpen(false); setEditing(true); };
  const cancelEdit = () => { setEditing(false); setOpen(false); };

  const save = async () => {
    setSaving(true);
    try {
      await updateProfile({ interest: draft });
      setEditing(false);
      setOpen(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="page">
      <div className="page-head">
        <div className="page-eyebrow">My Page</div>
        <h1 className="page-title">내 정보</h1>
        <p className="page-desc page-desc--lg">내 프로필과 관심 국가 즐겨찾기를 확인하세요.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">
          <AvatarIcon className="profile-avatar-icon" />
        </div>
        <div className="profile-body">
          <div className="profile-type">{TYPE_LABEL[profile.type] || "회원"} 회원</div>
          <h2 className="profile-name">{displayName}</h2>
          <div className="profile-rows">
            <div className="profile-row"><b>이메일</b><span>{profile.email}</span></div>
            <PasswordSection />
            {profile.department && <div className="profile-row"><b>소속부서</b><span>{profile.department}</span></div>}
            {profile.field && <div className="profile-row"><b>기술분야</b><span>{profile.field}</span></div>}

            {/* 관심분야: 기업이 아닌 경우만 표시 + 변경 가능 */}
            {!isCompany && (
              <div className="profile-row profile-row--interest">
                <b>관심분야</b>
                {!editing ? (
                  <span className="interest-view">
                    {profile.interest
                      ? <span className="rec-pill">{profile.interest}</span>
                      : <span className="interest-unset">미설정</span>}
                    <button type="button" className="link-btn" onClick={startEdit}>변경</button>
                  </span>
                ) : (
                  <span className="interest-edit">
                    <div className="cat-select">
                      <button
                        type="button"
                        className={"cat-trigger" + (draft ? "" : " placeholder")}
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                      >
                        {draft || "카테고리 선택"}
                        <Icons.caretDown className={"spin-arrow" + (open ? " open" : "")} />
                      </button>
                      {open && (
                        <div className="cat-menu" role="listbox">
                          {CATEGORIES.map((c) => (
                            <button
                              key={c}
                              type="button"
                              className={"cat-opt" + (c === draft ? " active" : "")}
                              onClick={() => { setDraft(c); setOpen(false); }}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="interest-actions">
                      <button className="btn confirm-yes" onClick={save} disabled={saving || !draft}>
                        {saving ? "저장 중…" : "저장"}
                      </button>
                      <button className="btn confirm-no" onClick={cancelEdit} disabled={saving}>
                        취소
                      </button>
                    </div>
                  </span>
                )}
              </div>
            )}

            {profile.tech && <div className="profile-row"><b>보유기술</b><span>{profile.tech}</span></div>}
            {profile.region && <div className="profile-row"><b>관심지역</b><span>{profile.region}</span></div>}
            {profile.phone && <div className="profile-row"><b>전화번호</b><span>{profile.phone}</span></div>}
          </div>
        </div>
      </div>

      {/* 최근 본 국가 */}
      {recentCountries.length > 0 && (
        <section className="recent-section">
          <h2 className="about-subtitle">최근 본 국가</h2>
          <div className="recent-row">
            {recentCountries.map((c) => (
              <button
                key={c.id}
                type="button"
                className="recent-chip"
                onClick={() => openCountry(c.id)}
              >
                <CountrySilhouette id={c.id} className="recent-sil" />
                <span className="recent-chip-name">{c.name}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      <div className="fav-head">
        <h2 className="about-subtitle">관심 국가 즐겨찾기</h2>
        {rankedFav.length > 1 && (
          <div className="sort-tabs" role="tablist" aria-label="즐겨찾기 정렬 기준">
            {SORT_OPTIONS.map((o) => (
              <button
                key={o.key}
                type="button"
                role="tab"
                aria-selected={sortKey === o.key}
                className={"sort-tab" + (sortKey === o.key ? " active" : "")}
                onClick={() => setSortKey(o.key)}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {rankedFav.length > 0 && (
        <p className="fav-note" style={{ textIndent: "1em" }}>
          이 순위는 <b>AI 매칭이 아닌 간단 참고용 순위</b>이며, 관심 분야는 반영하지 않고
          외교 친밀도·기후 취약도·현지 진입 용이도(기업·스타트업 수 기반)를 회원 유형별
          비중으로 종합한 결과입니다. 분야 적합도·기후-기술 적합도·기후 시급성·외교
          친밀도·개발 필요도·수출 연계성·보유기술 적합도까지 반영한 AI 기반 정밀 매칭을
          원한다면{" "}
          <Link className="link-btn" to="/match">맞춤 국가 추천</Link>을 확인해 주세요.
        </p>
      )}

      {rankedFav.length === 0 ? (
        <div className="fav-empty">
          <Icons.star className="fav-empty-star" />
          <p>아직 즐겨찾기한 국가가 없습니다.</p>
          <small>국가 정보 페이지에서 ⭐ 버튼을 눌러 추가해 보세요.</small>
        </div>
      ) : (
        <div className="fav-grid">
          {rankedFav.map(({ country: c, score }, i) => (
            <div className="fav-card" key={c.id} onClick={() => openCountry(c.id)}>
              {/* 순위 뱃지 (정렬 기준에 따라 1·2·3위) */}
              <div className={"rank-badge" + (i < 3 ? " top" : "")}>{i + 1}</div>

              <button
                className="fav-star"
                onClick={(e) => { e.stopPropagation(); toggleFavorite(c.id); }}
                aria-label={c.name + " 즐겨찾기 해제"}
              >
                <Icons.star filled={isFavorite(c.id)} />
              </button>
              <CountrySilhouette id={c.id} className="fav-sil" />
              <div className="fav-name">{c.name}<span>{c.nameEn} {c.flag}</span></div>

              {/* 선택된 기준의 점수 */}
              <div className="fav-score">
                <span className="fav-score-label">{SCORE_LABEL[sortKey]}</span>
                <span className="fav-score-bar">
                  <span className="fav-score-fill" style={{ width: `${score}%` }} />
                </span>
                <span className="fav-score-num">{score}</span>
              </div>

              <div className="fav-meta">
                기후 취약도 {c.climateScore} · 외교 친밀도 {c.diplomacyScore}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}