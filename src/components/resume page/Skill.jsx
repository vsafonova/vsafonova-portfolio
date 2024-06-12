export default function Skill({ skillTitle, skillsList }) {
  return (
    <div className="skills-wrapper">
      <h3 className="skill-title">{skillTitle}</h3>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
