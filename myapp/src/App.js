import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login2 from "./pages/Login";
import Home from "./components/Home";
import Login from "./pages/LoginSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="login/login2" element={<Login2 />} />
      </Routes>
    </Router>
  );
}

export default App;
