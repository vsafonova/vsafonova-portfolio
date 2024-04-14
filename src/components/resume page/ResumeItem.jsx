export default function ResumeItem({ name, year, place, description }) {
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
