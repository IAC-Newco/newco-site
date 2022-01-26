import React from "react";
import Home from "./newco_site";
import CareersPage from "./careers_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/careers" element={<CareersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
