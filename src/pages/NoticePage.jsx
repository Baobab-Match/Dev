import { useState } from "react";

// 공지사항 
const NOTICES = [
  {
    id: 4,
    title: "국가 상세 페이지 인프라 정보 추가",
    date: "2026-07-14",
    body: "국가 상세 페이지에 병상 수, 의사 수, 전력 접근률, 인터넷 이용률 등 인프라 현황 정보가 추가되었습니다.\nWorld Bank Open Data를 기반으로 하며, 아프리카 국가 평균과의 비교도 함께 확인하실 수 있습니다. 매칭 결과 PDF 보고서에도 동일한 인프라 정보가 반영되었습니다.",
  },
  {
    id: 3,
    title: "바오밥매치 베타 서비스 오픈 안내",
    date: "2026-06-01",
    body: "안녕하세요, 바오밥매치입니다.\n한국 녹색기술과 아프리카 국가를 잇는 매칭 플랫폼 바오밥매치의 베타 서비스가 오픈되었습니다. 공공기관·기업·일반 회원으로 가입하시면 맞춤형 국가 추천과 상세 국가 정보를 이용하실 수 있습니다. 많은 관심 부탁드립니다.",
  },
  {
    id: 2,
    title: "신규 국가 데이터 추가 (동아프리카 3개국)",
    date: "2026-05-20",
    body: "에티오피아, 우간다, 마다가스카르의 기후·ODA·외교 데이터가 추가되었습니다. 국가 정보 페이지에서 확인하실 수 있습니다.",
  },
  {
    id: 1,
    title: "기술 분야 카테고리 개편 안내",
    date: "2026-05-08",
    body: "사용자 피드백을 반영하여 기술 분야 카테고리를 10개 대분류로 개편하였습니다. 물 부족 및 정수 기술, 재생에너지 등 보다 세분화된 매칭이 가능합니다.",
  },
];

export function NoticePage() {
  const [openId, setOpenId] = useState(null);
  return (
    <main className="page">
      <div className="page-head">
        <div className="page-eyebrow">Notice</div>
        <h1 className="page-title">공지사항</h1>
        <p className="page-desc">바오밥매치의 새로운 소식과 업데이트를 확인하세요.</p>
      </div>

      <ul className="notice-list">
        {NOTICES.map((n) => {
          const isOpen = openId === n.id;
          return (
            <li key={n.id} className={"notice-item" + (isOpen ? " open" : "")}>
              <button className="notice-head" onClick={() => setOpenId(isOpen ? null : n.id)}>
                <div className="notice-titlewrap">
                  <span className="notice-title">{n.title}</span>
                  <span className="notice-date">{n.date}</span>
                </div>
                <span className={"notice-chev" + (isOpen ? " open" : "")}>⌄</span>
              </button>
              {isOpen && (
                <div className="notice-body">
                  {n.body.split("\n").map((line, i) => <p key={i}>{line}</p>)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}