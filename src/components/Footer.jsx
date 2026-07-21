// 사이트 공통 하단 푸터 — 회사 정보·연락처·저작권 (예시 데이터)
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* 회사 정보 */}
        <div className="footer-info">
          <p>
            <span className="footer-item"><b>바오밥매치(Baobab Match)</b></span>
            <span className="footer-div">|</span>
            <span className="footer-item">대표 : 바오밥수호대</span>
            <span className="footer-div">|</span>
            <span className="footer-item">2026년 외교 공공데이터·AI 활용 경진대회 출품작</span>
          </p>
          <p>
            <span className="footer-item">주소 : 서울특별시 강남구</span>
            <span className="footer-div">|</span>
            <span className="footer-item">대표번호 : 02-000-0000</span>
            <span className="footer-div">|</span>
            <span className="footer-item">이메일 : contact@baobabmatch.kr</span>
          </p>
          <p className="footer-disclaimer">
            본 사이트는 공공데이터(data.go.kr)를 활용하며, 콘텐츠의 무단 전재·복사·배포를 금합니다.
          </p>
        </div>

        {/* 저작권 */}
        <div className="footer-copy">
          Copyright © 2026 Baobab Match. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}