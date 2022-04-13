import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryDetail, Homepage, Header, DetailPage } from "./components";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/country/details/:countryCode"
              element={<DetailPage />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
