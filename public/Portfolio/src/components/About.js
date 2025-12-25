import React from 'react';
import '../style/about.css'; // Make sure path is correct

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <h2 className="section-titlee text-center fw-bold mb-4">
          About Me
        </h2>

        <div className="about-content row">
          {/* Left - Profile Summary */}
          <div className="about-summary col-lg-8 col-md-7 mb-4">
            <h4 className="summary-title mb-3">
              Profile Summary
            </h4>
            <p>
              As a passionate Python Full Stack Developer, I bring a unique combination of software development skills and strong problem-solving abilities. I specialize in building dynamic, responsive web applications with clean and scalable code.
            </p>
            <p>
              I'm eager to apply my technical skills in Python, Django, React, and database management to contribute effectively to a growing development team while continuously learning new technologies.
            </p>

            <div className="about-location-exp mt-4">
              <div>
                <strong>Location</strong><br />
                Kanyakumari
              </div>
              <div>
                <strong>Experience</strong><br />
                Entry Level
              </div>
            </div>
          </div>

          {/* Right - Quick Stats */}
          <div className="about-stats col-lg-4 col-md-5 mb-4">
            <div className="stats-card">
              <h5 className="stats-title">Quick Stats</h5>
              <ul className="stats-list list-unstyled">
                <li>
                  <span>Frontend Projects</span>
                  <span className="highlight">2+</span>
                </li>
                <li>
                  <span>Backend Projects</span>
                  <span className="highlight">2+</span>
                </li>
                <li>
                  <span>Technologies Learned</span>
                  <span className="highlight">8+</span>
                </li>
                <li>
                  <span>Certifications</span>
                  <span className="highlight">1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
