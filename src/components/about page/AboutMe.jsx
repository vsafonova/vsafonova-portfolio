import Interest from "./Interest";

export default function AboutMe() {
  const interests = [
    {
      containerStyle: "",
      iconClassName: "bi-airplane",
      iconsColor: "#ffbb2c",
      headiing: "Travel",
    },
    {
      containerStyle: "mt-4 mt-md-0",
      iconClassName: "bi-camera-fill",
      iconsColor: "#5578ff",
      headiing: "Photography",
    },
    {
      containerStyle: "mt-4 mt-md-0",
      iconClassName: "bi-tree-fill",
      iconsColor: "green",
      headiing: "Hiking",
    },
    {
      containerStyle: "mt-4 mt-lg-0",
      iconClassName: "bi-bicycle",
      iconsColor: "#e361ff",
      headiing: "Cycling",
    },
    {
      containerStyle: "mt-4",
      iconClassName: "bi-egg-fried",
      iconsColor: "yellow",
      headiing: "Cooking",
    },
    {
      containerStyle: "mt-4",
      iconClassName: "bi-person-arms-up",
      iconsColor: "orange",
      headiing: "Psychology and self-development",
    },
    {
      containerStyle: "mt-4",
      iconClassName: "bi-bank",
      iconsColor: "#11dbcf",
      headiing: "Politics",
    },
    {
      containerStyle: "mt-4",
      iconClassName: "bi-code-slash",
      iconsColor: "#b2904f",
      headiing: "Programming",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-lg-4" data-aos="fade-right">
          <img src="./img/me1.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Frontend Developer</h3>
          <p className="fst-italic">
            I'm passionate about crafting engaging user experiences and turning
            innovative ideas into reality through code.
          </p>
          <p className="fst-italic">
            My journey into the world of web development is driven by a deep
            curiosity for technology and a desire to create impactful,
            user-centric digital solutions. With a blend of creativity,
            technical skills, and a collaborative spirit, I'm on a mission to
            build intuitive and responsive web applications.
          </p>
          <ul className="d-flex flex-column justify-content-center pl-0">
            🏆 My top 5 strengths:
            <li className="mb-0">
              • Strong teamwork abilities demonstrated through dynamic group
              projects
            </li>
            <li className="mb-0">
              • Continuous learner with a passion for personal and professional
              growth
            </li>
            <li className="mb-0">
              • Solid foundation in modern web technologies and frameworks
            </li>
            <li className="mb-0">
              • Ability to adapt quickly to new technologies and development
              practices
            </li>
          </ul>
          <p>
            My toolkit includes Git, HTML5, CSS, JavaScript, React.js, Tailwind
            CSS, Bootstrap, Node.js, Next.js, TypeScript, React Native,
            Storybook, Webflow, and Sanity CMS. While I'm particularly focused
            on mastering React, I'm eager to explore Vue.js, Angular, and
            Svelte.
          </p>
          <div className="row">
            <div className="col-lg-6">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>
                  <strong>Birthday:</strong> <span>30 June 1997</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>City:</strong>
                  <span>Stockholm, Sweden</span>
                </li>
              </ul>
            </div>
            <p>
              My journey didn't start here. Prior to my transition into tech, I
              studied psychology at university, which has given me valuable
              insights into user behavior and cognitive processes - a unique
              perspective I bring to my development work. Outside of coding, I
              am passionate about outdoor activities and traveling to discover
              beautiful natural places and hidden gems. I believe that exploring
              the great outdoors fuels my creativity and inspires my work.
            </p>
            <p>
              As I look to the future, I'm excited about opportunities where I
              can apply my skills, contribute to meaningful projects, and
              continue growing as a developer. If you're looking for a frontend
              developer who combines technical skills with a deep understanding
              of user psychology and thrives in collaborative environments,
              let's connect. I'm ready to turn creative concepts into engaging,
              functional web experiences.
            </p>
          </div>
        </div>
      </div>
      <div className="interests container px-0">
        <div className="section-title">
          <h2 className="section-title">Interests</h2>
          <div className="row">
            {interests.map(
              ({ containerStyle, iconClassName, iconsColor, headiing }) => (
                <Interest
                  key={headiing}
                  containerStyle={containerStyle}
                  iconClassName={iconClassName}
                  iconColor={iconsColor}
                  heading={headiing}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
