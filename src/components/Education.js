import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faImage, faAward, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const EducationCertification = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const [visible, setVisible] = useState({
    title: false,
    subtitle: false,
    cards: {}
  });

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.anim;

            setVisible((prev) => ({
              ...prev,
              [key]: true,
              cards: { ...prev.cards, [key]: true }
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(titleRef.current);
    observer.observe(subtitleRef.current);

    cardRefs.current.forEach((card, index) => {
      card.dataset.anim = `card${index}`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="education-section py-5" id="education">
      <div className="container">

        {/* Section Heading */}
        <div className="text-center mb-5">

          {/* TITLE — 0s */}
          <h2
            ref={titleRef}
            data-anim="title"
            className={`section-titlee fw-bold mb-3 fade-up ${visible.title ? "show" : ""}`}
            style={{ fontSize: '2.2rem', transitionDelay: "0s" }}
          >
            Education & Certification
          </h2>

          {/* SUBTITLE — 0.15s */}
          <p
            ref={subtitleRef}
            data-anim="subtitle"
            className={`text-muted fade-up ${visible.subtitle ? "show" : ""}`}
            style={{ fontSize: '1.1rem', transitionDelay: "0.15s" }}
          >
            My educational background and professional certifications in technology and engineering.
          </p>

        </div>

        <div className="row">

          {/* Card 1 — 0.30s */}
          <div
            ref={addCardRef}
            className={`col-lg-6 col-md-12 mb-4 fade-up ${visible.cards["card0"] ? "show" : ""}`}
            style={{ transitionDelay: "0.30s" }}
          >
            <div className="card-custom p-4 h-100 bg-white shadow rounded">
              <div className="section-title mb-3 fw-semibold">
                Educational Background
              </div>

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

          {/* Card 2 — 0.45s */}
          <div
            ref={addCardRef}
            className={`col-lg-6 col-md-12 mb-4 fade-up ${visible.cards["card1"] ? "show" : ""}`}
            style={{ transitionDelay: "0.45s" }}
          >
            <div className="card-custom p-4 h-100 bg-white shadow rounded">
              <div className="section-title mb-3 fw-semibold">
                Professional Certification
              </div>

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
