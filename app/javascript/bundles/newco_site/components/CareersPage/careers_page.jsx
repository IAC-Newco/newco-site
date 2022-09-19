import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

function CareersPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  return (
    <div className="careers-wrapper">
      <Helmet>
        {/* <script src="//jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js"></script> */}
        {/* <script src="https://boards.greenhouse.io/embed/job_board/js?for=newco"></script> */}
      </Helmet>
      <Header />
      <div className="careers__content">
        {/* <div
          className="jv-careersite"
          data-careersite="newco"
          jobvite-iframeParameter="true"
          data-force-redirect
        ></div> */}
        <div id="grnhse_app"></div>
      </div>
      <Footer />
    </div>
  );
}
export default CareersPage;
