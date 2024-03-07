import { Link } from "react-router-dom";

export default function SocialMediaLink({ to, className, bootstrapClass }) {
  return (
    <Link to={to} className={className} target="_blank">
      <i className={`bi bi-${bootstrapClass}`}></i>
    </Link>
  );
}
