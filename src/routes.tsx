import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/HomePage";
import Errorpage from "./pages/Errorpage";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat-room" element={<HomePage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
