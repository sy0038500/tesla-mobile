import React from 'react';

const Section2 = () => {
  return (
    <section id="sec02">
      <div className="sec02-card item01">
        <div className="sec02-img"></div>
        <div className="sec02-txt">
          <h2 className="nanum-gothic-extrabold">Tesla 경험하기</h2>
          <p>지금 시승 신청하세요</p>
          <div className="btn-wrap">
            <button className="btn-white">시승 신청하기</button>
          </div>
        </div>
      </div>
      <div className="sec02-card item02">
        <div className="sec02-img"></div>
        <div className="sec02-txt">
          <h2 className="nanum-gothic-extrabold">액세서리</h2>
          <p>차량 액세서리 및 Tesla 브랜드 상품을 만나보세요.</p>
          <div className="btn-wrap">
            <button className="btn-white">지금 쇼핑하기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
