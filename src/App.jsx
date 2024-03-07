import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/Contact.Page";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ResumePage" element={<ResumePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}
