import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../style/contact.css';

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  const handleResumeClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="container mt-5" id="contact">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 className="section-titlee text-center fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          Get In Touch
        </h2>
        <p className="text-muted" style={{ fontSize: '1.1rem' }}>
          Ready to start a conversation? I'd love to hear from you. Let's discuss how we can work together.
        </p>
      </div>

      <div className="row justify-content-center">
        {/* Left Side: Contact Info */}
        <div className="col-md-6 mb-4 d-flex align-items-stretch">
          <div className="contact-card contact-info w-100">
            <h3 className="mb-4">Contact Information</h3>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-primary me-3" size="lg" />
              <span>89*****378</span>
            </div>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-info me-3" size="lg" />
              <span>s.saikumar2780@gmail.com</span>
            </div>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-3" size="lg" />
              <span>Kanyakumari</span>
            </div>

            <button className="btn btn-primary mt-4" onClick={handleResumeClick}>
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6 mb-4 d-flex align-items-stretch">
          <div className="contact-cardd contact-cardd w-100">
            <h3 className="mb-4">Send a Message</h3>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Your full name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="emailAddress">Email Address</label>
                <input type="email" className="form-control" id="emailAddress" placeholder="your.email@example.com" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" placeholder="Project inquiry, collaboration, etc." />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Tell me about your project or how we can work together..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Custom Modal Overlay */}
      <div
        className={`custom-modal-overlay ${showModal ? 'show' : ''}`}
        onClick={handleClose}
      >
        <div
          className={`custom-modal-content ${showModal ? 'show' : ''}`}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="custom-modal-header">
            <h5 id="modal-title">Resume Download</h5>
            <button
              type="button"
              className="custom-modal-close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          <div className="custom-modal-body">
            <p>Resume download feature coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
