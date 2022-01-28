import React from "react";
import ShapeImg from "images/shapes/shape4.png";
import styles from "./CareersPage.module.scss";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer__trapezoid">
        <img src={ShapeImg} alt="" />
      </div>
      <div className="circle circle__purple"></div>
    </div>
  );
}

export default Footer;
