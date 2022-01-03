export const SkillSection = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="skills">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">My Skills</h2>
        </div>
        <div className="text-center">
          <p
            className="mx-auto mb-3"
            // style="max-width:600px"
          >
            I am a quick learner and specialize in multitude of skills required
            for Web Application Development and Product Design
          </p>
        </div>

        <div className="bg-light p-3">
          <div className="row">
            <div className="col-md-5">
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">HTML5</span>
                  <span>100%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="100"
                    data-aos-anchor=".skills-section"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">CSS/SCSS</span>
                  <span>100%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="200"
                    data-aos-anchor=".skills-section"
                    style={{ width: "100%" }}
                    aria-valuenow="100"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">React.js</span>
                  <span>80%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                    data-aos-anchor=".skills-section"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="80"
                  ></div>
                </div>
              </div>
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">Next.js</span>
                  <span>70%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="300"
                    data-aos-anchor=".skills-section"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="70"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-md-2">
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">Photoshop</span>
                  <span>90%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="400"
                    data-aos-anchor=".skills-section"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="py-1">
                <div className="d-flex text-small fw-bolder">
                  <span className="me-auto">adobe XD</span>
                  <span>90%</span>
                </div>
                <div className="progress my-1">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    data-aos="zoom-in-right"
                    data-aos-delay="500"
                    data-aos-anchor=".skills-section"
                    style={{ width: "90%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
