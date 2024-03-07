import Skills from "./Skills";

export default function ResumeData() {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Higher vocational education of Frontend Development</h4>
            <h5>2023 - 2025</h5>
            <p>
              <em>Hyper Island, Sweden</em>
            </p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of Applied Psychology</h4>
            <h5>2019 - 2022</h5>
            <p>
              <em>
                Saint Petersburg State Institute of Psychology and Social Work,
                Russia
              </em>
            </p>
          </div>
          <div className="resume-item">
            <h4>Bachelor of General Medicine</h4>
            <h5>2015 - 2018</h5>
            <p>
              <em>Omsk State Medical Academy, Russia</em>
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Junior Frontend Developer</h4>
            <h5>September 2024 - March 2025</h5>
            <p>
              <em>Stockholm, Sweden </em>
            </p>
            <p>
              I'm a student at Hyper Island, actively seeking internship
              opportunities in frontend development as an integral part of my
              educational journey at the university.
            </p>
          </div>
        </div>
      </div>
      <Skills />
    </>
  );
}
