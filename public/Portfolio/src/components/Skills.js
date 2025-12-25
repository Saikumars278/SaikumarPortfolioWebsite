import React from 'react';
import '../style/skill.css';

// Skill Icons
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

// Section Icons
import frontendIcon from '../images/Frontend.png';
import backendIcon from '../images/backend.png';
import databaseIcon from '../images/database.png';
import toolsIcon from '../images/ide.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="section-titlee text-center fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          Technical Skills
        </h2>
        <p className="text-center text-muted mb-5" style={{ fontSize: '1.1rem' }}>
          A comprehensive overview of my technical expertise across frontend, backend, and database technologies.
        </p>

        <div className="row">
          {/* Frontend */}
          <div className="col-md-3">
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

          {/* Backend */}
          <div className="col-md-3">
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

          {/* Database */}
          <div className="col-md-3">
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

          {/* Tools & IDEs */}
          <div className="col-md-3">
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
