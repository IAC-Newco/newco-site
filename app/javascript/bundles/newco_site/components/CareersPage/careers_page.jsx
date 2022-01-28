import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./CareersPage.module.scss";
import { Helmet } from "react-helmet-async";

function CareersPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "//jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <div className={styles.wrapper}>
      <Helmet>
        <script src="//jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js"></script>
      </Helmet>
      <Header />
      <div className={styles.content}>
        <div
          className="jv-careersite"
          data-careersite="jobs.jobvite.com/newco"
          jobvite-iframeParameter="true"
          data-force-redirect
        ></div>
      </div>
      <Footer />
    </div>
  );
}
export default CareersPage;
