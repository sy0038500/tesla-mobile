import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <p className="logo nanum-gothic-bold">TESLA</p>
        <ul className="desktop-menu">
           <li><a href="#sec01">Model Y / Cybertruck</a></li>
           <li><a href="#sec02">Experience</a></li>
           <li><a href="#sec03">FSD</a></li>
           <li><a href="#sec04">Charging</a></li>
           <li><a href="#sec05">Energy</a></li>
        </ul>
        <p className="menu-icon nanum-gothic-bold">메뉴</p>
      </nav>
      
      <div className="hero-content">
        <h2 className="nanum-gothic-extrabold">Model 3</h2>
        <div className="btn-wrap">
          <button className="btn-blue">주문하기</button>
          <button className="btn-white">시승신청</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
