import { Link, useLocation } from "react-router-dom";
import Menu from "../navigation/Menu";
import SocialMedia from "../social media page/SocialMedia";
import "./header.css";

export default function Header() {
  const location = useLocation();
  const { pathname } = location;
  const top = pathname !== "/";

  return (
    <header id="header" className={top ? "header-top" : ""}>
      <div className="container">
        <h1>
          <Link to="/">Viktoriia Safonova</Link>
        </h1>
        <h2>
          Wide-ranging <span>frontend developer</span> with background in
          psychology
        </h2>
        <Menu />
        <SocialMedia />
      </div>
    </header>
  );
}
