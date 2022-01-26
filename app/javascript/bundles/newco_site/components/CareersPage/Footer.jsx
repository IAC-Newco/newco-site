import React from "react";
import ShapeImg from "images/shapes/shape4.png";
import styles from "./CareersPage.module.scss";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footerTrapezoid}>
        <img src={ShapeImg} alt="" />
      </div>
      <div className={`${styles.circle} ${styles.circle__purple}`}></div>
    </div>
  );
}

export default Footer;
