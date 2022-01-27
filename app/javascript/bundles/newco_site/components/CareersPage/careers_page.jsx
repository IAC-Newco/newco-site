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
      <div className={styles.content}>
        <div
          class="jv-careersite"
          data-careersite="newco-careers"
          data-force-redirect
        ></div>
        <script src="//jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js"></script>
      </div>
      <Footer />
    </div>
  );
}
export default CareersPage;
