import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

function CareersButton({ className }) {
  const navigate = useNavigate();
  const handleClick = () => {
    location.href = "/careers";
    // navigate("/careers");
    // navigate(0);
  };
  return (
    <button className={`careers-button ${className}`} onClick={handleClick}>
      OPEN ROLES
    </button>
  );
}

export default CareersButton;
