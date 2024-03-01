export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            {/* <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
              </p>
            </div> */}
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Higher vocational education of Frontend Development</h4>
              <h5>2023 - 2025</h5>
              <p>
                <em>Hyper Island, Sweden</em>
              </p>
              {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>  */}
            </div>
            <div className="resume-item">
              <h4>Bachelor of Applied Psychology</h4>
              <h5>2019 - 2022</h5>
              <p>
                <em>
                  Saint Petersburg State Institute of Psychology and Social
                  Work, Russia
                </em>
              </p>
              {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
            </div>
            <div className="resume-item">
              <h4>Bachelor of General Medicine</h4>
              <h5>2015 - 2018</h5>
              <p>
                <em>Omsk State Medical Academy, Russia</em>
              </p>
              {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              {/* <h4>Senior graphic design specialist</h4>  */}
              <h5>September 2024 - March 2025</h5>
              <p>
                <em>Stockholm, Sweden </em>
              </p>
              <p>
                I'm a student at Hyper Island, actively seeking internship
                opportunities in frontend development as an integral part of my
                educational journey at the university.
                {/* <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
