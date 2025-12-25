import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import '../style/contact.css';
import ResumePDF from '../components/Saikumar S.pdf';

const Contact = () => {
  // Animation Refs
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contactCardRef = useRef(null);
  const formCardRef = useRef(null);

  // Visibility State
  const [visible, setVisible] = useState({
    title: false,
    subtitle: false,
    contact: false,
    form: false
  });

  // Scroll Fade Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(prev => ({
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
      contactCardRef.current,
      formCardRef.current
    ];

    elements.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Form Data Handling
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formDataWithTime = {
      ...formData,
      time: new Date().toLocaleString()
    };

    emailjs
      .send(
        'service_u226o99',
        'template_vkavx5o',
        formDataWithTime,
        'MLkkCdDRqCMIpHVPp'
      )
      .then(
        () => {
          setStatusMessage('Message sent successfully!');
          setFormData({
            fullName: '',
            emailAddress: '',
            subject: '',
            message: ''
          });
        },
        () => {
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="container mt-5" id="contact">

      {/* Title — 0s */}
      <h2
        ref={titleRef}
        data-anim="title"
        className={`section-titlee fw-bold mb-3 text-center fade-up ${
          visible.title ? 'show' : ''
        }`}
        style={{ fontSize: '2.5rem', transitionDelay: '0s' }}
      >
        Get In Touch
      </h2>

      {/* Subtitle — 0.15s */}
      <p
        ref={subtitleRef}
        data-anim="subtitle"
        className={`text-muted mb-5 text-center fade-up ${
          visible.subtitle ? 'show' : ''
        }`}
        style={{ fontSize: '1.1rem', transitionDelay: '0.15s' }}
      >
        Ready to start a conversation? I'd love to hear from you. Let's discuss how we can work together.
      </p>

      <div className="row justify-content-center">

        {/* Contact Info — 0.3s */}
        <div
          ref={contactCardRef}
          data-anim="contact"
          className={`col-md-6 mb-4 d-flex fade-up ${visible.contact ? 'show' : ''}`}
          style={{ transitionDelay: '0.3s' }}
        >
          <div className="contact-card contact-info w-100">
            <h3 className="mb-4">Contact Information</h3>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faPhone} className="text-primary me-3" size="lg" />
              <span>8925428378</span>
            </div>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} className="text-info me-3" size="lg" />
              <span>s.saikumar2780@gmail.com</span>
            </div>

            <div className="icon-box d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger me-3" size="lg" />
              <span>Kanyakumari</span>
            </div>

            <a
              href={ResumePDF}
              download="Saikumar_Saikumar.pdf"
              className="btn btn-primary mt-4"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Form — 0.45s */}
        <div
          ref={formCardRef}
          data-anim="form"
          className={`col-md-6 mb-4 d-flex fade-up ${visible.form ? 'show' : ''}`}
          style={{ transitionDelay: '0.45s' }}
        >
          <div className="contact-cardd w-100">
            <h3 className="mb-4">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  placeholder="your.email@example.com"
                  value={formData.emailAddress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Project inquiry, collaboration, etc."
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>

              {statusMessage && <p className="mt-3">{statusMessage}</p>}

            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
