import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

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
  // };
  // }, []);
  return (
    <div className="careers-wrapper">
      <Helmet>
        <script src="//jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js"></script>
      </Helmet>
      <Header />
      <div className="careers__content">
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
