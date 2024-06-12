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
            I'm a student at Hyper Island, actively seeking internship
            opportunities in frontend development as an integral part of my
            educational journey at the university.
          </p>
          <p className="fst-italic">
            I have a particular interest in developing my skills in React;
            however, I am fully open to acquiring proficiency in other
            JavaScript frameworks and libraries, including Vue.js, Angular,
            Svelte, and next.js, among others.
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
