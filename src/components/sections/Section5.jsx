import React from 'react';

const Section5 = () => {
  return (
    <section id="sec05">
      <div>
        <div className="sec05-cardlist">
          <div className="sec05-card item01">
            <div className="sec05-card-txt">
              <h2 className="nanum-gothic-extrabold">Powerwall</h2>
              <p>정전 시에도 조명은 그대로</p>
              <div className="btn-wrap">
                <button className="btn-blue">자세히 알아보기</button>
              </div>
            </div>
          </div>
          <div className="sec05-card item02">
            <div className="sec05-card-txt">
              <h2 className="nanum-gothic-extrabold">Megapack</h2>
              <p>대규모 에너지 공급을 위한 초대형 베터리 시스템</p>
              <div className="btn-wrap">
                <button className="btn-blue">자세히 알아보기</button>
              </div>
            </div>
          </div>
        </div>
        <div className="indicator">
          <div className="active"></div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
