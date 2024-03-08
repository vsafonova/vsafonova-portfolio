import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import SocialMedia from "./SocialMedia";

export default function Header({ top }) {
  return (
    <header id="header" className={top ? "header-top" : ""}>
      <div className="container">
        <h1>
          <Link to="/">Viktoriia Safonova</Link>
        </h1>
        <h2>
          Wide-rangering <span>frontend developer</span> with a psychological
          background
        </h2>
        <Menu />
        <SocialMedia />
      </div>
    </header>
  );
}
