import React from 'react';

const Section3 = () => {
  return (
    <section id="sec03">
      <video 
        src="/assets/assets/media/video.mp4"
        controls={false}
        loop
        autoPlay
        muted
        playsInline
      />
      <div className="sec03-txt">
        <h2 className="nanum-gothic-extrabold">
          풀 셀프 드라이빙 (감독형)
        </h2>
        <div className="btn-wrap">
          <button className="btn-blue">자세히보기</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
