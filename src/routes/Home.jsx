import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <Link to="/">Viktoriia Safonova</Link>
        </h1>
        <h2>
          I'm a passionate <span>frontend developer</span> from Sweden
        </h2>
        <Menu />
        <SocialMedia/>
      </div>
    </header>
  );
}
