import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./CareersPage.module.scss";

function CareersPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}></div>
      <Footer />
    </div>
  );
}
export default CareersPage;
