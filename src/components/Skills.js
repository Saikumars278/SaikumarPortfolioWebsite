import React, { useEffect, useRef, useState } from 'react';
import '../style/skill.css';

import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import bootstrapIcon from '../images/bootstrap.png';
import javascriptIcon from '../images/javascript.png';
import reactIcon from '../images/react.png';

import pythonIcon from '../images/python.png';
import djangoIcon from '../images/django1.png';
import restIcon from '../images/rest.png';
import drfIcon from '../images/FastAPI.png';

import mysqlIcon from '../images/database.png';
import phpmyadminIcon from '../images/MySQL.png';

import vscodeIcon from '../images/Visual.png';
import sublimeIcon from '../images/sublime.png';
import githubIcon from '../images/github2.png';

import frontendIcon from '../images/Frontend.png';
import backendIcon from '../images/backend.png';
import databaseIcon from '../images/database.png';
import toolsIcon from '../images/ide.png';

const Skills = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const boxRefs = useRef([]);

  const [visible, setVisible] = useState({
    title: false,
    subtitle: false,
    boxes: {},
  });

  const addToRefs = (el) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
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
              boxes: { ...prev.boxes, [key]: true }
            }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(titleRef.current);
    observer.observe(subtitleRef.current);

    boxRefs.current.forEach((box, index) => {
      box.dataset.anim = `box${index}`;
      observer.observe(box);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">

        {/* TITLE */}
        <h2
          ref={titleRef}
          data-anim="title"
          className={`section-titlee text-center fw-bold mb-4 fade-up ${
            visible.title ? 'show' : ''
          }`}
          style={{ fontSize: '2.5rem', transitionDelay: '0s' }}
        >
          Technical Skills
        </h2>

        {/* SUBTITLE */}
        <p
          ref={subtitleRef}
          data-anim="subtitle"
          className={`text-center text-muted mb-5 fade-up ${
            visible.subtitle ? 'show' : ''
          }`}
          style={{ fontSize: '1.1rem', transitionDelay: '0.15s' }}
        >
          A comprehensive overview of my technical expertise.
        </p>

        <div className="row">

          {/* FRONTEND — 0.30s */}
          <div
            ref={addToRefs}
            className={`col-md-3 fade-up ${visible.boxes['box0'] ? 'show' : ''}`}
            style={{ transitionDelay: '0.30s' }}
          >
            <div className="category">
              <h3>
                <img src={frontendIcon} alt="Frontend Icon" className="me-2 section-icon" />
                Frontend
              </h3>
              <ul>
                <li><img src={htmlIcon} alt="HTML" />HTML</li>
                <li><img src={cssIcon} alt="CSS" />CSS</li>
                <li><img src={bootstrapIcon} alt="Bootstrap" />Bootstrap</li>
                <li><img src={javascriptIcon} alt="JavaScript" />JavaScript</li>
                <li><img src={reactIcon} alt="React" />React</li>
              </ul>
            </div>
          </div>

          {/* BACKEND — 0.45s */}
          <div
            ref={addToRefs}
            className={`col-md-3 fade-up ${visible.boxes['box1'] ? 'show' : ''}`}
            style={{ transitionDelay: '0.45s' }}
          >
            <div className="category">
              <h3>
                <img src={backendIcon} alt="Backend Icon" className="me-2 section-icon" />
                Backend
              </h3>
              <ul>
                <li><img src={pythonIcon} alt="Python" />Python</li>
                <li><img src={djangoIcon} alt="Django" />Django</li>
                <li><img src={restIcon} alt="REST API" />REST API</li>
                <li><img src={drfIcon} alt="DRF" />Django REST Framework</li>
              </ul>
            </div>
          </div>

          {/* DATABASE — 0.60s */}
          <div
            ref={addToRefs}
            className={`col-md-3 fade-up ${visible.boxes['box2'] ? 'show' : ''}`}
            style={{ transitionDelay: '0.60s' }}
          >
            <div className="category">
              <h3>
                <img src={databaseIcon} alt="Database Icon" className="me-2 section-icon" />
                Database
              </h3>
              <ul>
                <li><img src={mysqlIcon} alt="MySQL" />MySQL</li>
                <li><img src={phpmyadminIcon} alt="PHPMyAdmin" />PHPMyAdmin</li>
                <li>
                  <img src="https://img.icons8.com/?size=100&id=10200&format=png&color=000000" alt="CRUD" />
                  CRUD Operations
                </li>
              </ul>
            </div>
          </div>

          {/* TOOLS — 0.75s */}
          <div
            ref={addToRefs}
            className={`col-md-3 fade-up ${visible.boxes['box3'] ? 'show' : ''}`}
            style={{ transitionDelay: '0.75s' }}
          >
            <div className="category">
              <h3>
                <img src={toolsIcon} alt="Tools Icon" className="me-2 section-icon" />
                Tools & IDEs
              </h3>
              <ul>
                <li><img src={vscodeIcon} alt="VS Code" />Visual Studio Code</li>
                <li><img src={sublimeIcon} alt="Sublime" />Sublime Text</li>
                <li><img src={githubIcon} alt="GitHub" />Version Control (Git)</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
