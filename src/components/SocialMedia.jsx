import SocialMediaLink from "./SocialMediaLink";

export default function SocialMedia() {
const socialMediaLinks = [
    {
      to: "https://www.facebook.com/ViktorySafonova/",
      className: "facebook",
      bootstrapClass: "facebook",
    },
    {
      to: "https://www.linkedin.com/in/viktoriia-safonova-a399291a3/",
      className: "linkedin",
      bootstrapClass: "linkedin",
    },
    {
      to: "https://github.com/vsafonova",
      className: "github",
      bootstrapClass: "github",
    },
  ];

  return (
    <div className="social-links">
      {socialMediaLinks.map(({ to, className, bootstrapClass }) => (
        <SocialMediaLink
          key={to}
          to={to}
          className={className}
          bootstrapClass={bootstrapClass}
        >
        </SocialMediaLink>
      ))}
    </div>
  );
}
