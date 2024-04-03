import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ResumePage from "./pages/ResumePage/ResumePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
        <Route path="/ResumePage" element={<ResumePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
