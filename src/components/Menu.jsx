import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <Link
            className="nav-link"
            to="/"
            aria-label="Navigate to the Home Page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/AboutPage"
            aria-label="Navigate to the About Page"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/ResumePage"
            aria-label="Navigate to the Resume Page"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/PortfolioPage"
            aria-label="Navigate to the Portfolio Page"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            to="/ContactPage"
            aria-label="Navigate to the Contact Page"
          >
            Contact
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}
