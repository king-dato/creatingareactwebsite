import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App;
