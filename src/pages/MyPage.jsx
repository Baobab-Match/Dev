import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES, CATEGORIES } from "../data";
import { CountrySilhouette, Icons } from "../components/ui";

const TYPE_LABEL = { gov: "공공기관", company: "기업", general: "개인" };
const TYPE_ICON = { gov: "gov", company: "company", general: "person" };

// 정렬 기준 정의
const SORT_OPTIONS = [
  { key: "match", label: "종합 매칭" },
  { key: "diplomacy", label: "외교 친밀도 우선" },
  { key: "climate", label: "필요성 우선" },
];

// 종합 매칭 점수 — 외교 0.5 + 필요성 0.5, 중점협력국 +5 보너스, 100 상한
function matchScore(c) {
  const dip = Number(c.diplomacyScore) || 0;
  const cli = Number(c.climateScore) || 0;
  const base = dip * 0.5 + cli * 0.5;
  const bonus = c.priorityPartner ? 5 : 0;
  return Math.min(100, Math.round(base + bonus));
}

// 기준별로 점수를 뽑는 함수
function scoreFor(c, sortKey) {
  if (sortKey === "diplomacy") return Number(c.diplomacyScore) || 0;
  if (sortKey === "climate") return Number(c.climateScore) || 0;
  return matchScore(c);
}

const SCORE_LABEL = {
  match: "종합 매칭",
  diplomacy: "외교 친밀도",
  climate: "기후 필요성",
};

export default function MyPage({ profile, favorites, isFavorite, toggleFavorite, openCountry, updateProfile, recent = [] }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const [open, setOpen] = useState(false);     // 드롭다운 열림 상태
  const [saving, setSaving] = useState(false);
  const [sortKey, setSortKey] = useState("match"); // 즐겨찾기 정렬 기준

  // 즐겨찾기 국가 + 선택된 기준으로 정렬 (점수 높은 순)
  const rankedFav = useMemo(() => {
    const list = favorites.map((id) => COUNTRIES[id]).filter(Boolean);
    return list
      .map((c) => ({ country: c, score: scoreFor(c, sortKey) }))
      .sort((a, b) => b.score - a.score);
  }, [favorites, sortKey]);

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
        <p className="page-desc page-desc--lg">내 프로필과 관심국가 즐겨찾기를 확인하세요.</p>
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
        <h2 className="about-subtitle">관심국가 즐겨찾기</h2>
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
        <p className="fav-note">
          이 순위는 <b> 관심 분야는 반영하지 않고</b>, 외교 친밀도와 기후 취약도 고려한 단순 비교 결과입니다.
          분야 적합도·기후-기술 적합도·기후 시급성·외교 친밀도·개발 필요도·수출 연계성·보유기술
          적합도까지 총 7개 지표와 함께 회원님이 고른 관심 분야까지
          반영한 더 자세한 비교를 원한다면{" "}
          <Link className="link-btn" to="/match">관심 분야·기술에 맞는 국가 추천 받기</Link>를 확인해 주세요.
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