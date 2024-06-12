import Project from "./Project";

export default function Portfolio() {
  const projects = [
    {
      image: "yennenga-progress.webp",
      alt: "The landing page of the Yennenga Progress website",
      projectName: "Yennenga Progress",
      projectDescription: "Website for the Yennenga Progress company",
      gitHubLink: "https://github.com/vsafonova/yennenga-progress-website",
      websiteLink: "https://yennengaprogress.netlify.app/",
    },
    {
      image: "taskify.webp",
      alt: "The main page of the Taskify app with logo and buttons for login and register account",
      projectName: "Taskify",
      projectDescription: "Web app for managing a TODO list",
      gitHubLink: "https://github.com/vsafonova/TodoList",
      websiteLink: "https://todo-list-gules-xi.vercel.app/",
    },
    {
      image: "hidden-gems.webp",
      alt: "Website background with a beautiful view from Sweden with mountains, fir forest and river",
      projectName: "Hidden Gems",
      projectDescription:
        " Catch inspiration for exploring Sweden from a fresh perspective",
      gitHubLink: "https://github.com/vsafonova/hidden-gems",
      websiteLink: "https://hidden-gems-swe.netlify.app/",
    },
    {
      image: "movie-match.webp",
      alt: "",
      projectName: "Movie Match",
      projectDescription:
        " This entire app is a clever cover-up designed for us creators to judge you based on our own personal tastes",
      gitHubLink: "https://github.com/vsafonova/movie-match",
      websiteLink: "https://vsafonova.github.io/movie-match/",
    },
    {
      image: "memory-game.webp",
      alt: "",
      projectName: "Memory Meme Game",
      projectDescription:
        "Uncover two matching cards at once to eliminate them from the game",
      gitHubLink: "https://github.com/vsafonova/memory-card-game",
      websiteLink: "https://vsafonova.github.io/memory-card-game/",
    },
    {
      image: "design-company.webp",
      alt: "",
      projectName: "Design Company",
      projectDescription: "TURNKEY REPAIR IN THE CITY OF STOCKHOLM",
      gitHubLink: "https://github.com/vsafonova/lending-project",
      websiteLink: "https://vsafonova.github.io/lending-project/",
    },
  ];

  return (
    <>
      <div className="row portfolio-container">
        {projects.map(
          ({
            image,
            alt,
            projectName,
            projectDescription,
            gitHubLink,
            websiteLink,
          }) => (
            <Project
              key={projectName}
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
