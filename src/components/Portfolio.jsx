import Project from "./Project";

export default function Portfolio() {
  const projects = [
    {
      filter: "filter-react",
      image: "hidden-gems.png",
      alt: "Website background with a beautiful view from Sweden with mountains, fir forest and river",
      projectName: "Hidden Gems",
      projectDescription:
        " Catch inspiration for exploring Sweden from a fresh perspective",
      gitHubLink: "https://github.com/vsafonova/hidden-gems",
      websiteLink: "https://hidden-gems-swe.netlify.app/",
    },
    {
      filter: "filter-react",
      image: "movie-match.png",
      alt: "",
      projectName: "Movie Match",
      projectDescription:
        " This entire app is a clever cover-up designed for us creators to judge you based on our own personal tastes",
      gitHubLink: "https://github.com/vsafonova/movie-match",
      websiteLink: "https://vsafonova.github.io/movie-match/",
    },
    {
      filter: "filter-js",
      image: "memory-game.png",
      alt: "",
      projectName: "Memory Meme Game",
      projectDescription:
        "Uncover two matching cards at once to eliminate them from the game",
      gitHubLink: "https://github.com/vsafonova/memory-card-game",
      websiteLink: "https://vsafonova.github.io/memory-card-game/",
    },
    {
      filter: "filter-htmlCss",
      image: "design-company.png",
      alt: "",
      projectName: "Design Company",
      projectDescription: "TURNKEY REPAIR IN THE CITY OF STOCKHOLM<",
      gitHubLink: "https://github.com/vsafonova/lending-project",
      websiteLink: "https://vsafonova.github.io/lending-project/",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-react">React</li>
            <li data-filter=".filter-js">Vanilla JS</li>
            <li data-filter=".filter-htmlCss">HTML/CSS</li>
          </ul>
        </div>
      </div>
      <div className="row portfolio-container">
        {projects.map(
          ({
            filter,
            image,
            alt,
            projectName,
            projectDescription,
            gitHubLink,
            websiteLink,
          }) => (
            <Project
              key={projectName}
              filter={filter}
              image={image}
              alt={alt}
              projectName={projectName}
              projectDescription={projectDescription}
              gitHubLink={gitHubLink}
              websiteLink={websiteLink}
            />
          )
        )}
      </div>
    </>
  );
}
