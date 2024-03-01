import { Link } from "react-router-dom";

function NavLink({ to, label, ariaLabel }) {
  return (
    <li>
      <Link className="nav-link" to={to} aria-label={ariaLabel}>
        {label}
      </Link>
    </li>
  );
}

export default function Menu() {
  const navLinks = [
    {
      to: "/",
      label: "Home",
      ariaLabel: "Navigate to the Home Page",
    },
    {
      to: "/AboutPage",
      label: "About",
      ariaLabel: "Navigate to the About Page",
    },
    {
      to: "/ResumePage",
      label: "Resume",
      ariaLabel: "Navigate to the Resume Page",
    },
    {
      to: "/PortfolioPage",
      label: "Portfolio",
      ariaLabel: "Navigate to the Portfolio Page",
    },
    {
      to: "/ContactPage",
      label: "Contact",
      ariaLabel: "Navigate to the Contact Page",
    },
  ];

  return (
    <nav id="navbar" className="navbar">
      <ul>
        {navLinks.map(({ to, ariaLabel, label }) => (
          <NavLink key={to} to={to} ariaLabel={ariaLabel} label={label} />
        ))}
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
}
