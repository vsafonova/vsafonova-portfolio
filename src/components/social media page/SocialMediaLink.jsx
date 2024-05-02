import { Link } from "react-router-dom";

export default function SocialMediaLink({
  to,
  className,
  bootstrapClass,
  ariaLabel,
}) {
  return (
    <Link to={to} className={className} target="_blank" aria-label={ariaLabel}>
      <i className={`bi bi-${bootstrapClass}`}></i>
    </Link>
  );
}
