import React from "react";
import Logo from "images/logo.png";
import TrapezoidImg from "images/shapes/trapezoid.png";
import styles from "./CareersPage.module.scss";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerTrapezoid}>
        <img src={TrapezoidImg} alt="" />
      </div>
      <div className={`${styles.circle} ${styles.circle__blue}`}></div>
      <div className={styles.logoWrapper}>
        <div className={styles.logoImgWrapper}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.desc}>AN IAC INCUBATOR</div>
      </div>
    </div>
  );
}

export default Header;
