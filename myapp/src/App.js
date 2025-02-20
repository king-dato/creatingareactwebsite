import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
import Topnav from "./components/topnav";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Topnav />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
