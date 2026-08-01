import { useState } from "react";

// 공지사항
const NOTICES = [
  {
    id: 10,
    title: "국가별 최신 뉴스·진출 기업 정보 추가 및 국가 상세 페이지 개선",
    date: "2026-08-01",
    body: "국가 상세 페이지에 정치·경제·환경·기업 4개 분야의 최근 3개월 뉴스를 확인할 수 있는 '관련 뉴스'가 추가되었습니다. 한국어 뉴스를 우선 조회하며, 아프리카 전문 매체(AllAfrica)와 프랑스어권 아프리카 보도가 많은 프랑스 매체(RFI·Jeune Afrique 등)도 함께 제공합니다. 아울러 한아프리카재단 250대기업·스타트업 디렉터리를 기반으로 한 '진출 현황' 정보가 추가되어, 해당 국가에 이미 진출한 기업·스타트업을 업종·분야별로 확인하실 수 있습니다. 진출 기업이 많은 국가는 업종 태그를 눌러 원하는 분야만 모아볼 수 있습니다. 이 밖에도 국가 상세 페이지의 정보 배치를 중요도 순으로 재구성해 핵심 지표는 화면에서 바로, 그 외 세부 내용은 PDF 보고서로 확인하실 수 있도록 개선했으며, 아프리카 54개국 전체에 대해 국가 상세 정보 PDF 보고서 다운로드를 지원합니다.",
  },
  {
    id: 9,
    title: "국가 상세 페이지 인프라 정보 확대 및 PDF 보고서 개선",
    date: "2026-07-29",
    body: "국가 상세 페이지의 인프라 정보가 4개에서 11개 지표로 확대되어 보건·전력 및 에너지·통신 및 디지털·수자원 및 위생 4개 분야로 나누어 확인하실 수 있습니다. 간호사·조산사 수, 재생에너지 발전 비중, 청정 취사연료 접근률, 이동통신 가입자 수, 식수·위생시설 접근률 등이 새롭게 추가되었습니다. 아울러 국가 상세 정보 및 추천 결과 PDF 보고서의 협력 문의처 배치와 페이지 구성이 개선되어 더 편하게 확인하실 수 있습니다.",
  },
  {
    id: 8,
    title: "국가 상세 페이지 '국가 정보 요약' 신설 및 화면 개선",
    date: "2026-07-29",
    body: "국가 상세 페이지 상단에 기후 취약도, 외교 친밀도, 기후 전망, 협력 이력을 한 문단으로 정리해 보여주는 '국가 정보 요약' 카드가 추가되었습니다. 기존 인프라 정보(전력 접근률, 인터넷 이용률 등)는 막대그래프로 아프리카 평균과 비교해 보실 수 있습니다. 국가 정보 찾기 페이지에는 전체·추천국·중점협력국 필터가 추가되어 원하는 국가를 더 빠르게 찾으실 수 있습니다.",
  },
  {
    id: 7,
    title: "국가 상세·추천 결과 페이지 '협력 문의처' 정보 추가",
    date: "2026-07-26",
    body: "국가 상세 페이지와 추천 결과 페이지에 현지 대한민국 대사관, 그리고 서울 소재 각국 대사관 연락처를 담은 '협력 문의처' 정보가 추가되었습니다. 현지 대한민국 대사관 정보는 아프리카 54개국 전체에서 확인하실 수 있으며, 서울 소재 대사관 연락처는 19개국에서 함께 제공됩니다.",
  },
  {
    id: 6,
    title: "'기후성 질병 및 보건의료' 분야 추가",
    date: "2026-07-21",
    body: "기술 분야 카테고리에 '기후성 질병 및 보건의료'가 추가되어 총 11개 대분류로 확대되었습니다. 온열질환, 수인성질병 등 기후변화와 연계된 보건 수요에 특화된 매칭이 가능합니다.",
  },
  {
    id: 5,
    title: "산업 동향 페이지 신설",
    date: "2026-07-15",
    body: "아프리카 산업·경제 뉴스를 모아볼 수 있는 '산업 동향' 메뉴가 신설되었습니다. 로그인 후 관심 분야를 등록하시면 관련 뉴스를 함께 확인하실 수 있으며, 모든 뉴스는 접속 시점 기준 실시간으로 불러옵니다. 제목을 누르면 원문 기사로 연결됩니다.",
  },
  {
    id: 4,
    title: "국가 상세 페이지 인프라 정보 추가",
    date: "2026-07-14",
    body: "국가 상세 페이지에 병상 수, 의사 수, 전력 접근률, 인터넷 이용률 등 인프라 현황 정보가 추가되었습니다. World Bank Open Data를 기반으로 하며, 아프리카 국가 평균과의 비교도 함께 확인하실 수 있습니다.",
  },
  {
    id: 3,
    title: "바오밥매치 베타 서비스 오픈 안내",
    date: "2026-06-01",
    body: "안녕하세요, 바오밥매치입니다. 한국 녹색기술과 아프리카 국가를 잇는 매칭 플랫폼 바오밥매치의 베타 서비스가 오픈되었습니다. 공공기관·기업·일반 회원으로 가입하시면 맞춤형 국가 추천과 상세 국가 정보를 이용하실 수 있습니다. 많은 관심 부탁드립니다.",
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

const PER_PAGE = 5; // 한 페이지에 보여줄 공지 개수

export function NoticePage() {
  const [openId, setOpenId] = useState(null);
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(NOTICES.length / PER_PAGE));
  const pageItems = NOTICES.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goPage = (p) => {
    const next = Math.min(totalPages, Math.max(1, p));
    setPage(next);
    setOpenId(null); // 페이지 넘기면 열려있던 항목은 접어둠
    window.scrollTo(0, 0);
  };

  return (
    <main className="page">
      <div className="page-head">
        <div className="page-eyebrow">Notice</div>
        <h1 className="page-title">공지사항</h1>
        <p className="page-desc">바오밥매치의 새로운 소식과 업데이트를 확인하세요.</p>
      </div>

      <ul className="notice-list">
        {pageItems.map((n) => {
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
                  <p style={{ textIndent: "1em" }}>{n.body}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* 페이지네이션 — 공지가 늘어나도 한 화면에 다 몰리지 않도록 */}
      {totalPages > 1 && (
        <nav className="pagination" aria-label="공지사항 페이지 이동">
          <button type="button" className="page-btn" onClick={() => goPage(1)} disabled={page === 1} aria-label="첫 페이지">«</button>
          <button type="button" className="page-btn" onClick={() => goPage(page - 1)} disabled={page === 1} aria-label="이전 페이지">‹</button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              className={"page-btn" + (p === page ? " active" : "")}
              onClick={() => goPage(p)}
              aria-current={p === page ? "page" : undefined}
            >
              {p}
            </button>
          ))}
          <button type="button" className="page-btn" onClick={() => goPage(page + 1)} disabled={page === totalPages} aria-label="다음 페이지">›</button>
          <button type="button" className="page-btn" onClick={() => goPage(totalPages)} disabled={page === totalPages} aria-label="마지막 페이지">»</button>
        </nav>
      )}
    </main>
  );
}