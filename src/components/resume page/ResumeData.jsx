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
      description: "",
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
        "Tailwind",
        "SEO and accessibility",
        "RESTful principles",
        "Basic knowledge of SQL",
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
        <a href="/CV Safonova Viktoriia.pdf" download>
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
