import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

function CareersPage() {
  const tag = document.getElementById("grnhse_app");

  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);

  useEffect(() => {
    while (document.getElementById("grnhse_app") !== null) {
      console.log(
        "🚀 ~ file: careers_page.jsx ~ line 8 ~ CareersPage ~ tag",
        tag
      );
      // const loadScript = setTimeout(() => {
      const script = document.createElement("script");
      const body = document.getElementsByTagName("body")[0];
      script.src = "https://boards.greenhouse.io/embed/job_board/js?for=newco";
      // script.async = true;
      body.appendChild(script);
      // }, 10000);
      return () => {
        // clearTimeout(loadScript);
        document.body.removeChild(script);
      };
    }
  }, [tag]);

  return (
    <div className="careers-wrapper">
      <Helmet>
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
