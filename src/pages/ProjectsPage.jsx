import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <section className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-react">React</li>
                <li data-filter=".filter-js">Vanilla JS</li>
                <li data-filter=".filter-HtmlCss">HTML/CSS</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-react">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/hidden-gems.png"
                  className="img-fluid"
                  alt="Website background with a beautiful view from Sweden with mountains, fir forest and river"
                />
                <div className="portfolio-info">
                  <h4>Hidden Gems</h4>
                  <p>
                    Catch inspiration for exploring Sweden from a fresh
                    perspective
                  </p>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/vsafonova/hidden-gems"
                      target="_blank"
                      title="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://hidden-gems-swe.netlify.app/"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Website link"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-react">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/movie-match.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Movie Match</h4>
                  <p>
                    This entire app is a clever cover-up designed for us
                    creators to judge you based on our own personal tastes
                  </p>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/vsafonova/movie-match"
                      target="_blank"
                      title="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://vsafonova.github.io/movie-match/"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Website link"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-js">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/memory-game.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Memory Meme Game</h4>
                  <p>
                    Uncover two matching cards at once to eliminate them from
                    the game
                  </p>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/vsafonova/memory-card-game"
                      target="_blank"
                      title="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://vsafonova.github.io/memory-card-game/"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Website link"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-HtmlCss">
              <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/design-company.png"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>Design Company</h4>
                  <p>TURNKEY REPAIR IN THE CITY OF STOCKHOLM</p>
                  <div className="portfolio-links">
                    <a
                      href="https://github.com/vsafonova/lending-project"
                      target="_blank"
                      title="GitHub"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://vsafonova.github.io/lending-project/"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Website link"
                    >
                      <i className="bx bx-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </section>
    </>
  );
}
