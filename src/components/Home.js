import React, { useEffect, useRef, useState } from 'react';
import '../style/home.css';
import logo from '../images/logo1.png';

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  const [visible, setVisible] = useState({
    title: false,
    subtitle: false,
    text: false,
    buttons: false,
    image: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.anim]: true
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = [
      titleRef.current,
      subtitleRef.current,
      textRef.current,
      buttonsRef.current,
      imageRef.current
    ];

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="home-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-md-6 text-center text-md-start">

            <h1
              ref={titleRef}
              data-anim="title"
              className={`fw-bold fade-up ${visible.title ? "show" : ""}`}
              style={{ fontSize: "2.5rem", transitionDelay: "0s" }}
            >
              Hi, I'm <span className="text-primary">Saikumar S</span>
            </h1>

            <h4
              ref={subtitleRef}
              data-anim="subtitle"
              className={`mt-3 text-secondary fade-up ${visible.subtitle ? "show" : ""}`}
              style={{ fontSize: "1.5rem", transitionDelay: "0.15s" }}
            >
              Python Full Stack Developer
            </h4>

            <p
              ref={textRef}
              data-anim="text"
              className={`mt-3 fade-up ${visible.text ? "show" : ""}`}
              style={{ fontSize: "1.1rem", lineHeight: "1.8", transitionDelay: "0.30s" }}
            >
              Motivated and detail-oriented fresher seeking an entry-level position in a dynamic software company.
              Passionate about coding and problem-solving, with a solid foundation in Python, Django, React, and modern web technologies.
            </p>

            <div
              ref={buttonsRef}
              data-anim="buttons"
              className={`mt-4 fade-up ${visible.buttons ? "show" : ""}`}
              style={{ transitionDelay: "0.45s" }}
            >
              <a href="#projects" className="btn btn-primary me-3 px-4 py-2 fs-6">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-primary px-4 py-2 fs-6">
                Get In Touch
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE — FIXED TO RIGHT CORNER */}
          <div className="col-md-6 d-none d-md-flex justify-content-end align-items-center home-image-wrapper">
            <img
              ref={imageRef}
              data-anim="image"
              src={logo}
              alt="Saikumar Logo"
              className={`img-fluid logo-image fade-up ${visible.image ? "show" : ""}`}
              style={{ transitionDelay: "0.6s" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
