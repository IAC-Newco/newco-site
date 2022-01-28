import React from "react";
import { Link } from "react-router-dom";
import Logo from "images/logo.png";
import TrapezoidImg from "images/shapes/trapezoid.png";

function Header() {
  return (
    <div className="header-wrapper">
      <div className="header__trapezoid">
        <img src={TrapezoidImg} alt="" />
      </div>
      <div className="circle circle__blue"></div>
      <Link to="/" className="header__link">
        <div className="header__logo-wrapper">
          <div className="header__logo-img-wrapper">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header__desc">AN IAC INCUBATOR</div>
        </div>
      </Link>
    </div>
  );
}

export default Header;
