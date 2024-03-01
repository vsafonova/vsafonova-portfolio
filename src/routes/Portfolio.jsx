export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          {/* <p>My Works</p>  */}
        </div>

        <div className="row">
          {/* <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>  */}
        </div>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <h1>Working in progress...</h1>
            <p>
              Check{" "}
              <a href="https://github.com/vsafonova" target="_blank">
                GitHub
              </a>{" "}
              to see my learning projects
            </p>
            {/* <div className="portfolio-wrap">
                <img
                  src="assets/img/portfolio/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <div className="portfolio-links">
                    <a
                      href="assets/img/portfolio/portfolio-1.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                      ><i className="bx bx-plus"></i
                    ></a>
                    <a
                      href="portfolio-details.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                      title="Portfolio Details"
                      ><i className="bx bx-link"></i
                    ></a>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
