import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faImage, faAward, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const EducationCertification = () => {
  return (
    <div className="education-section py-5" id="education">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="section-titlee fw-bold mb-3" style={{ fontSize: '2.2rem' }}>
            Education & Certification
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            My educational background and professional certifications in technology and engineering.
          </p>

          
        </div>

        <div className="row">
          {/* Educational Background */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card-custom p-4 h-100 bg-white shadow rounded">
              <div className="section-title mb-3 fw-semibold">Educational Background</div>

              {/* BE */}
              <div className="d-flex mb-4">
                <div className="icon-circle bg-blue me-3">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Bachelor of Engineering</h6>
                  <div className="text-primary">Mechanical Engineering</div>
                  <div>Amrita College of Engineering, Nagercoil</div>
                  <small className="text-muted">2020 - 2023</small>
                </div>
              </div>

              {/* Diploma */}
              <div className="d-flex">
                <div className="icon-circle bg-cyan me-3">
                  <FontAwesomeIcon icon={faImage} />
                </div>
                <div>
                  <h6 className="mb-1 fw-bold">Diploma</h6>
                  <div className="text-info">Mechanical Engineering</div>
                  <div>Amrita Polytechnic College, Nagercoil</div>
                  <small className="text-muted">2018 - 2020</small>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certification */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="card-custom p-4 h-100 bg-white shadow rounded">
              <div className="section-title mb-3 fw-semibold">Professional Certification</div>

              <div className="d-flex mb-3 align-items-start">
                <div className="icon-circle bg-blue me-3">
                  <FontAwesomeIcon icon={faAward} />
                </div>
                <div>
                  <h6 className="fw-bold mb-1">Full Stack Web Development</h6>
                  <div className="text-primary">Python / React Stack</div>
                  <div>MashupStack, Thiruvananthapuram</div>
                  <div className="completed-text mt-1">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-success me-1" />
                    <span className="text-success fw-semibold">Completed</span>
                  </div>
                </div>
              </div>

              <p className="small text-muted mt-2 mb-0">
                Covered frontend (HTML, CSS, JavaScript, React) and backend development (Python, Django, REST APIs, MySQL),
                along with deployment and GitHub workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCertification;
