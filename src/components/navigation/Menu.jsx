import { NavLink } from "react-router-dom";
import "./nav.css";
import { useState } from "react";

export default function Menu() {
  const [isopened, setIsOpened] = useState(false);

  function toggleNavbar() {
    setIsOpened(!isopened);
  }

  let navbarClass = "navbar";
  let iconClass = "bi-list";

  if(isopened) {
    navbarClass += " navbar-mobile";
    iconClass = "bi-x"
  }

  

  return (
    <nav id="navbar" className={navbarClass}>
      <ul>
        <li>
          <NavLink
            className="nav-link"
            to="/"
            aria-label="Navigate to the Home Page"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/ProjectsPage"
            aria-label="Navigate to the Projects Page"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/ResumePage"
            aria-label="Navigate to the Resume Page"
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/AboutPage"
            aria-label="Navigate to the About Page"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-link"
            to="/ContactPage"
            aria-label="Navigate to the Contact Page"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <i className={`bi ${iconClass} mobile-nav-toggle`} onClick={toggleNavbar}></i>
    </nav>
  );
}
