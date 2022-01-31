import React, { Component } from "react";
import { Link } from "react-router-dom";

function CareersButton({ className }) {
  return (
    <Link className={`careers-button ${className}`} to="/careers">
      OPEN ROLES
    </Link>
  );
}

export default CareersButton;
