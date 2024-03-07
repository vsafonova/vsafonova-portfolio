import Skills from "./Skills";

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
        " I'm a student at Hyper Island, actively seeking internship opportunities in frontend development as an integral part of my educational journey at the university.",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          {education.map(({ name, year, university }) => (
            <ResumeItem
              key={name}
              name={name}
              year={year}
              place={university}
            />
          ))}
        </div>
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
      </div>
      <Skills />
    </>
  );
}
