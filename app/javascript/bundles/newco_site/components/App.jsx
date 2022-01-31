import React from "react";
import Home from "./newco_site";
import CareersPage from "./CareersPage/careers_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/careers" element={<CareersPage />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;
