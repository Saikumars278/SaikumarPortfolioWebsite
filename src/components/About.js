import React, { useEffect, useRef, useState } from "react";
import "../style/about.css";

const About = () => {
  const titleRef = useRef(null);
  const summaryRef = useRef(null);
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const locationRef = useRef(null);
  const statsRef = useRef(null);

  const [visible, setVisible] = useState({
    title: false,
    summary: false,
    paragraph1: false,
    paragraph2: false,
    location: false,
    stats: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.anim]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = [
      titleRef.current,
      summaryRef.current,
      paragraph1Ref.current,
      paragraph2Ref.current,
      locationRef.current,
      statsRef.current,
    ];

    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section py-5">
      <div className="container">

        {/* Title */}
        <h2
          ref={titleRef}
          data-anim="title"
          className={`section-titlee text-center fw-bold mb-4 fade-up ${
            visible.title ? "show" : ""
          }`}
          style={{ transitionDelay: "0s" }}
        >
          About Me
        </h2>

        <div className="about-content row">

          {/* LEFT SUMMARY */}
          <div
            ref={summaryRef}
            data-anim="summary"
            className={`about-summary col-lg-8 col-md-7 mb-4 fade-up ${
              visible.summary ? "show" : ""
            }`}
            style={{ transitionDelay: "0.15s" }}
          >
            <h4 className="summary-title mb-3">Profile Summary</h4>

            <p
              ref={paragraph1Ref}
              data-anim="paragraph1"
              className={`fade-up ${visible.paragraph1 ? "show" : ""}`}
              style={{ transitionDelay: "0.30s" }}
            >
              As a passionate Python Full Stack Developer, I bring a unique
              combination of software development skills and strong
              problem-solving abilities.
            </p>

            <p
              ref={paragraph2Ref}
              data-anim="paragraph2"
              className={`fade-up ${visible.paragraph2 ? "show" : ""}`}
              style={{ transitionDelay: "0.45s" }}
            >
              I specialize in building dynamic, responsive web applications and
              continuously learning new technologies.
            </p>

            {/* LOCATION + EXPERIENCE (ANIMATED) */}
            <div
              ref={locationRef}
              data-anim="location"
              className={`about-location-exp mt-4 fade-up ${
                visible.location ? "show" : ""
              }`}
              style={{ transitionDelay: "0.55s" }}
            >
              <div>
                <strong>Location</strong>
                <br />
                Kanyakumari
              </div>
              <div>
                <strong>Experience</strong>
                <br />
                Entry Level
              </div>
            </div>
          </div>

          {/* RIGHT STATS CARD */}
          <div
            ref={statsRef}
            data-anim="stats"
            className={`about-stats col-lg-4 col-md-5 mb-4 fade-up ${
              visible.stats ? "show" : ""
            }`}
            style={{ transitionDelay: "0.70s" }}
          >
            <div className="stats-card">
              <h5 className="stats-title">Quick Stats</h5>
              <ul className="stats-list list-unstyled">
                <li><span>Frontend Projects</span><span className="highlight">2+</span></li>
                <li><span>Backend Projects</span><span className="highlight">2+</span></li>
                <li><span>Technologies Learned</span><span className="highlight">8+</span></li>
                <li><span>Certifications</span><span className="highlight">1</span></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
