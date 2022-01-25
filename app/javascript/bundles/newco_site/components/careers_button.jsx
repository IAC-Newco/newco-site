import React, { Component } from "react";

function CareersButton({ className }) {
  return (
    <a
      className={`careers-button ${className}`}
      href="https://jobs.jobvite.com/newco/jobs"
    >
      OPEN ROLES
    </a>
  );
}

export default CareersButton;
