import React from 'react';
import '../style/home.css';
import logo from '../images/logo1.png';

const Home = () => {
  return (
    <section id="home" className="home-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Content - always visible */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold" style={{ fontSize: '2.5rem' }}>
              Hi, I'm <span className="text-primary">Saikumar S</span>
            </h1>
            <h4 className="mt-3 text-secondary" style={{ fontSize: '1.5rem' }}>
              Python Full Stack Developer
            </h4>
            <p className="mt-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Motivated and detail-oriented fresher seeking an entry-level position in a dynamic software company.
              Passionate about coding and problem-solving, with a solid foundation in Python, Django, React, and modern web technologies.
            </p>
            <div className="mt-4">
              <a href="#projects" className="btn btn-primary me-3 px-4 py-2 fs-6">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fs-6">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Logo - visible only on md and larger screens */}
          <div className="col-md-6 d-none d-md-block text-center">
            <img
              src={logo}
              alt="Saikumar Logo"
              className="img-fluid logo-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
