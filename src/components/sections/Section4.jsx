import React from 'react';

const Section4 = () => {
  return (
    <section id="sec04">
      <div className="sec04-img"></div>
      <div className="sec04-txt">
        <div className="sec04-txt-1">
          <h2>충전</h2>
          <p>
            주변에서 이용 가능한 Tesla
            수퍼차저 및 데스티네이션 차저
            네트워크를 확인해 보세요.
          </p>
        </div>
        <div className="stats">
          <div className="stat-item">
            <h2>7,342</h2>
            <img src="/assets/assets/icons/energy.svg" alt="수퍼차저 번개 아이콘" />
          </div>
          <div className="stat-item">
            <h2>711</h2>
            <img src="/assets/assets/icons/outlet.svg" alt="수퍼차저 콘센트 아이콘" />
          </div>
        </div>
        <div className="btn-wrap">
          <button className="btn-black">충전 네트워크 보기</button>
          <button className="btn-white">자세히 알아보기</button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
