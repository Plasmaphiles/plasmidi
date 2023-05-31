import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import rg4js from "raygun4js";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

if (process.env.NODE_ENV !== "development") {
  rg4js("apiKey", "RFXwCYSCxlOV8C8v6cX3g");
  rg4js("enablePulse", true);
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>
);

export default App;
