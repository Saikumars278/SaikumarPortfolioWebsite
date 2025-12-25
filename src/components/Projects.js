import React, { useEffect, useRef, useState } from "react";
import "../style/project.css";

const Projects = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const [visible, setVisible] = useState({
    title: false,
    subtitle: false,
    cards: {},
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
              cards: { ...prev.cards, [key]: true },
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
    <section id="projects" className="bg-light py-5">
      <div className="container">

        {/* TITLE */}
        <h2
          ref={titleRef}
          data-anim="title"
          className={`section-titlee text-center fw-bold mb-4 fade-up ${
            visible.title ? "show" : ""
          }`}
          style={{ fontSize: "2.5rem" }}
        >
          Featured Projects
        </h2>

        {/* SUBTITLE */}
        <p
          ref={subtitleRef}
          data-anim="subtitle"
          className={`text-center text-muted mb-5 fade-up ${
            visible.subtitle ? "show" : ""
          }`}
          style={{ fontSize: "1.1rem", transitionDelay: "0.15s" }}
        >
          Key projects including Hospital Booking System, Attendance Management
          System for Nim Technology, Student Portal for Nim Technology, Nim
          Technology Website, and UI-focused mini projects.
        </p>

        <div className="row g-4">

          {/* Card 1 */}
          <div
            ref={addCardRef}
            className={`col-md-6 fade-up ${
              visible.cards["card0"] ? "show" : ""
            }`}
            style={{ transitionDelay: "0.30s" }}
          >
            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#E3F2FD" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Hospital Appointment Management System
                </h5>
                <p className="card-text">
                  Full-stack hospital appointment booking system using React and Django.
                </p>
                <ul>
                  <li>User & doctor authentication</li>
                  <li>Appointment scheduling</li>
                  <li>Admin dashboard</li>
                  <li>Django REST APIs</li>
                  <li>MySQL database</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{" "}
                  <span className="tech-badge react">React.js</span>
                  <span className="tech-badge django">Django</span>
                  <span className="tech-badge rest-api">REST API</span>
                  <span className="tech-badge mysql">MySQL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 — UPDATED TITLE */}
          <div
            ref={addCardRef}
            className={`col-md-6 fade-up ${
              visible.cards["card1"] ? "show" : ""
            }`}
            style={{ transitionDelay: "0.45s" }}
          >
            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#E8F5E9" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Attendance Management System for Nim Technology
                </h5>
                <p className="card-text">
                  Web-based attendance system built for Nim Technology with
                  secure login and real-time tracking.
                </p>
                <ul>
                  <li>Student & admin login</li>
                  <li>Attendance timestamp logs</li>
                  <li>Leave management</li>
                  <li>Dashboard analytics</li>
                  <li>REST API integration</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{" "}
                  <span className="tech-badge react">React.js</span>
                  <span className="tech-badge django">Django</span>
                  <span className="tech-badge rest-api">REST API</span>
                  <span className="tech-badge mysql">MySQL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — UPDATED TITLE */}
          <div
            ref={addCardRef}
            className={`col-md-6 fade-up ${
              visible.cards["card2"] ? "show" : ""
            }`}
            style={{ transitionDelay: "0.60s" }}
          >
            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#FFF8E1" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Student Portal Management System for Nim Technology
                </h5>
                <p className="card-text">
                  Centralized student portal developed for Nim Technology with
                  dashboards and API-driven features.
                </p>
                <ul>
                  <li>Student authentication & profiles</li>
                  <li>Attendance & performance dashboard</li>
                  <li>Course & batch management</li>
                  <li>Role-based access</li>
                  <li>Django REST APIs</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{" "}
                  <span className="tech-badge react">React.js</span>
                  <span className="tech-badge django">Django</span>
                  <span className="tech-badge rest-api">REST API</span>
                  <span className="tech-badge mysql">MySQL</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            ref={addCardRef}
            className={`col-md-6 fade-up ${
              visible.cards["card3"] ? "show" : ""
            }`}
            style={{ transitionDelay: "0.75s" }}
          >
            <div className="card h-100 shadow-sm" style={{ backgroundColor: "#F3E5F5" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold text-primary">
                  Nim Technology Website
                </h5>
                <p className="card-text">
                  Corporate website showcasing services, testimonials and contact features.
                </p>
                <ul>
                  <li>Responsive React UI</li>
                  <li>Service showcase</li>
                  <li>EmailJS contact form</li>
                  <li>Optimized UX/UI</li>
                </ul>
                <p>
                  <strong>Technologies:</strong>{" "}
                  <span className="tech-badge react">React.js</span>
                  <span className="tech-badge bootstrap">Bootstrap</span>
                  <span className="tech-badge css">CSS</span>
                  <span className="tech-badge emailjs">EmailJS</span>
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
