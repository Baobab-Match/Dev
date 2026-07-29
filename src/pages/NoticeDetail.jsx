import { useParams, Link } from "react-router-dom";
import { NOTICES } from "./NoticePage";

// 공지사항 상세 — 목록에서 아코디언으로 펼치던 것 대신, /notice/:id로 들어와서 보는 별도 페이지
export default function NoticeDetail() {
  const { id } = useParams();
  const notice = NOTICES.find((n) => String(n.id) === id);

  if (!notice) {
    return (
      <main className="page">
        <Link className="back-btn" to="/notice">
          <span className="back-arrow" aria-hidden="true">←</span> 공지사항으로
        </Link>
        <p className="page-desc" style={{ marginTop: 20 }}>해당 공지를 찾을 수 없습니다.</p>
      </main>
    );
  }

  return (
    <main className="page">
      <Link className="back-btn" to="/notice">
        <span className="back-arrow" aria-hidden="true">←</span> 공지사항으로
      </Link>

      <article className="notice-detail">
        <div className="notice-detail-date">{notice.date}</div>
        <h1 className="notice-detail-title">{notice.title}</h1>
        <div className="notice-detail-rule" />
        <p className="notice-detail-body" style={{ textIndent: "1em" }}>{notice.body}</p>
      </article>
    </main>
  );
}