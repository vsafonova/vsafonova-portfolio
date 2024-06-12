import SocialMediaLink from "./SocialMediaLink";

export default function SocialMedia() {
  const socialMediaLinks = [
    {
      to: "https://www.facebook.com/ViktorySafonova",
      className: "facebook",
      bootstrapClass: "facebook",
      ariaLabel: "Link to go to Facebook page",
    },
    {
      to: "https://www.linkedin.com/in/viktoriia-safonova",
      className: "linkedin",
      bootstrapClass: "linkedin",
      ariaLabel: "Link to go to LinkedIn page",
    },
    {
      to: "https://github.com/vsafonova",
      className: "github",
      bootstrapClass: "github",
      ariaLabel: "Link to go to GitHub page",
    },
  ];

  return (
    <div className="social-links">
      {socialMediaLinks.map(({ to, className, bootstrapClass, ariaLabel }) => (
        <SocialMediaLink
          key={to}
          to={to}
          className={className}
          bootstrapClass={bootstrapClass}
          ariaLabel={ariaLabel}
        ></SocialMediaLink>
      ))}
    </div>
  );
}
