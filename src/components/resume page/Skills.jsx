import "./skills.css";

export default function Skills() {
  return (
    <>
      <h2 className="resume-title">Skills</h2>
      <div className="skills-content">
        <div className="skills-wrapper">
          <h3 className="skill-title">Code</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>SEO and accessibility</li>
            <li>RESTful principles</li>
            <li>Basic knowledge of SQL </li>
          </ul>
        </div>
        <div className="skills-wrapper">
          <h3 className="skill-title">Toolbox</h3>
          <ul>
            <li>VS Code</li>
            <li>Figma</li>
            <li>Git</li>
            <li>Lighthouse</li>
          </ul>
        </div>
        <div className="skill-wrapper">
          <h3 className="skill-title">Other</h3>
          <ul>
            <li>Agile Methodology</li>
            <li>SCRUM</li>
            <li>Mob programming</li>
            <li>Working in collaboration with clients and UX designers</li>
            <li>Team Management</li>
          </ul>
        </div>
      </div>
    </>
  );
}
