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
          <img src="./img/me.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Frontend Developer</h3>
          <p className="fst-italic">
            A passionate and enthusiastic frontend developer currently enrolled
            in a program at Hyper Island where I engage in dynamic group
            projects that showcase my strong teamwork abilities. My passion for
            personal growth and software development drives me to continuously
            learn and improve my skills.
          </p>
          <p className="fst-italic">
            I have a solid foundation in Git, HTML5, CSS, JavaScript, React.js,
            Tailwind CSS, Bootstrap, and Node.js. I also have experience with
            SEO and user authentication. While I am particularly focused on
            enhancing my expertise in React, I am excited to explore other
            JavaScript frameworks and libraries such as Vue.js, Angular, Svelte,
            and Next.js. Additionally, I am eager to learn TypeScript to further
            enhance my development capabilities.
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
              When I started to learn programming, I felt like this was where I
              belonged for the first time. My passion for coding was ignited
              through self-guided programming courses, and from that point
              onward, I was captivated by the art of bringing ideas to life
              through code and its immense satisfaction.
            </p>
            <p>
              My ambition is to continually evolve into a proficient developer,
              dedicated to crafting innovative IT solutions that enhance user
              experiences and simplify their daily lives.
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
