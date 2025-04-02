import Skill from "./Skill";
import ResumeItem from "./ResumeItem";
import "./resume.css";

export default function ResumeData() {
  const education = [
    {
      name: "Higher vocational education of Frontend Development",
      year: "2023 - 2025",
      university: "Hyper Island, Sweden",
    },
    {
      name: "Bachelor of Applied Psychology",
      year: "2019 - 2022",
      university:
        "Saint Petersburg State Institute of Psychology and Social Work, Russia",
    },
    {
      name: "Bachelor of General Medicine",
      year: "2015 - 2018",
      university: "Omsk State Medical Academy, Russia",
    },
  ];

  const workExperience = [
    {
      name: "Frontend Developer Intern at Umain",
      year: "September 2024 - March 2025",
      place: "Stockholm, Sweden",
      description:
        "Developed a comprehensive component library using Storybook and TypeScript to ensure UI consistency across projects, complemented by a prototype website in Next.js and Sanity CMS for dynamic content management. Designed and implemented a Slack bot using Slack API and Node.js to automate employee engagement tasks.  Have a solid foundation in React Native for building scalable and visually appealing cross-platform mobile applications. Successfully designed and deployed custom websites for PCL Company using Webflow, ensuring brand consistency and streamlined content updates.",
    },
  ];

  let skills = [
    {
      skillTitle: "Code",
      skillsList: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind.CSS",
        "TypeScript",
        "Next.js",
        "React Native",
        "Node.js",
        "Sanity CMS",
        "Webflow",
        "Storybook",
      ],
    },
    {
      skillTitle: "Toolbox",
      skillsList: ["VS Code", "Figma", "Git", "Lighthouse"],
    },
    {
      skillTitle: "Other",
      skillsList: [
        "Agile Methodology",
        "SCRUM",
        "Mob programming",
        "Working in collaboration with clients and UX designers",
        "Team Management",
      ],
    },
  ];

  return (
    <>
      <div className="row">
        <a href="/ViktoriiaSafonovaResume.pdf" download>
          <button>Download my resume</button>
        </a>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          {workExperience.map(({ name, year, place, description }) => (
            <ResumeItem
              key={name}
              name={name}
              year={year}
              place={place}
              description={description}
            />
          ))}
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          {education.map(({ name, year, university }) => (
            <ResumeItem key={name} name={name} year={year} place={university} />
          ))}
        </div>
      </div>
      <h2 className="resume-title">Skills</h2>
      <div className="skills-content">
        {skills.map(({ skillTitle, skillsList }) => (
          <Skill
            key={skillTitle}
            skillTitle={skillTitle}
            skillsList={skillsList}
          />
        ))}
      </div>
    </>
  );
}
