import React from 'react';
import '../style/project.css'; // Ensure this path is correct

const Projects = () => {
  return (
    <section id="projects" className="bg-light py-5">
      <div className="container">
        <h2 className="section-titlee text-center fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          Featured Projects
        </h2>
        <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
          Key projects including a Hospital Booking System and UI-focused mini projects.
        </p>

        <div className="row g-4">
          {/* Hospital Appointment Management System */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm" style={{ backgroundColor: '#f0f9ff' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">Hospital Appointment Management System</h5>
                <p className="card-text">
                  A full-stack hospital appointment booking system built using React.js and Django, offering features like registration, doctor management, and appointment tracking.
                </p>
                <ul className="mb-3">
                  <li>User registration, login, and appointment booking</li>
                  <li>Doctor profile management and viewing</li>
                  <li>Admin dashboard with doctor/patient control</li>
                  <li>RESTful APIs via Django REST Framework</li>
                  <li>MySQL database with full CRUD operations</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge react">React.js</span>{' '}
                  <span className="tech-badge django">Django</span>{' '}
                  <span className="tech-badge rest-api">REST API</span>{' '}
                  <span className="tech-badge mysql">MySQL</span>{' '}
                  <span className="tech-badge axios">Axios</span>
                </p>
              </div>
            </div>
          </div>

          {/* Web-Based Calculator */}
          <div className="col-md-6">
            <div className="card h-100 shadow-sm" style={{ backgroundColor: '#fff4e6' }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">Web-Based Calculator</h5>
                <p className="card-text">
                  A responsive calculator created with HTML, CSS, and JavaScript, handling arithmetic operations with a clean interface and basic error handling.
                </p>
                <ul className="mb-3">
                  <li>Performs basic arithmetic operations</li>
                  <li>Handles invalid input and prevents division by zero</li>
                  <li>Responsive UI for mobile and desktop</li>
                  <li>Instant output display on button click</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{' '}
                  <span className="tech-badge html">HTML</span>{' '}
                  <span className="tech-badge css">CSS</span>{' '}
                  <span className="tech-badge javascript">JavaScript</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
