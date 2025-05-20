export default function Project({
  image,
  alt,
  projectName,
  projectDescription,
  gitHubLink,
  websiteLink,
}) {
  return (
    <>
      <div className={`col-lg-4 col-md-6 portfolio-item`}>
        <div className="portfolio-wrap">
          <img
            src={`./img/portfolio/${image}`}
            className="img-fluid"
            alt={alt}
          />
          <div className="portfolio-info">
            <h4>{projectName}</h4>
            <p>{projectDescription}</p>
            <div className="portfolio-links">
              {gitHubLink && (
                <a href={gitHubLink} target="_blank" title="GitHub">
                  <i className="bi bi-github"></i>
                </a>
              )}
              <a
                href={websiteLink}
                target="_blank"
                className="portfolio-details-lightbox"
                title="Website link"
              >
                <i className="bx bx-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
