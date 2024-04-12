import Skills from "./Skills";
import "./resume.css";

function ResumeItem({ name, year, place, description }) {
  return (
    <div className="resume-item">
      <h4>{name}</h4>
      <h5>{year}</h5>
      <p>
        <em>{place}</em>
      </p>
      <p>{description}</p>
    </div>
  );
}

export default function ResumeData() {
  const education = [
    {
      name: "Higher vocational education of Frontend Developmen",
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
      name: "Junior Frontend Developer",
      year: "September 2024 - March 2025",
      place: "Stockholm, Sweden",
      description:
        "Enrolled in a frontend development program at Hyper Island, I actively engage in dynamic group projects, demonstrating exceptional teamwork abilities. Committed to continuous learning, I am fueled by a passion for personal growth and software development. Currently seeking an internship as part of my education, I eagerly anticipate the opportunity to contribute my enthusiasm and expertise to a talented engineering team, delivering high-quality solutions.",
    },
  ];

  return (
    <>
      <div className="row">
        <a href="/CV Resume.pdf" download>
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
      <Skills />
    </>
  );
}
