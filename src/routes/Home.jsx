import Menu from "../components/Menu";

export default function Home() {
  return (
    <header id="header">
      <div className="container">
        <h1>
          <a href="index.html">Viktoriia Safonova</a>
        </h1>
        <h2>
          I'm a passionate <span>frontend developer</span> from Sweden
        </h2>
        <Menu/>

        <div className="social-links">
          <a
            href="https://www.facebook.com/ViktorySafonova/"
            className="facebook"
            target="_blank"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/viktoriia-safonova-a399291a3/"
            className="linkedin"
            target="_blank"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://github.com/vsafonova"
            className="github"
            target="_blank"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
