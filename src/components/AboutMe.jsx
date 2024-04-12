export default function AboutMe() {
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
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="bi bi-airplane" style={{ color: "#ffbb2c" }}></i>
              <h3>Travel</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-camera-fill" style={{ color: "#5578ff" }}></i>
              <h3>Photography</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-tree-fill" style={{ color: "green" }}></i>
              <h3>Hiking</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="bi bi-bicycle" style={{ color: "#e361ff" }}></i>
              <h3>Cycling</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="bi bi-egg-fried" style={{ color: "yellow" }}></i>
              <h3>Cooking</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i
                className="bi bi-person-arms-up"
                style={{ color: "orange" }}
              ></i>
              <h3>Psychology and self-development</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="bi bi-bank" style={{ color: "#11dbcf" }}></i>
              <h3>Policy</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="bi bi-code-slash" style={{ color: "#b2904f" }}></i>
              <h3>Programming</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
