import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/footer.css';

// Import images
import linkedinIcon from '../images/linkedin.png';
import githubIcon from '../images/github.png';
import emailIcon from '../images/gmail.png';
import facebookIcon from '../images/facebook.png';
import instagramIcon from '../images/instagram.png';
import arrowUpIcon from '../images/up.png';
import whatsappIcon from '../images/whatsapp.png';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  // To add fade-in animation on modal open
  useEffect(() => {
    if (showModal) {
      // Trigger animation after render
      const timer = setTimeout(() => setAnimateModal(true), 10);
      return () => clearTimeout(timer);
    } else {
      setAnimateModal(false);
    }
  }, [showModal]);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setAnimateModal(false);
    // Wait for animation to finish then hide modal
    setTimeout(() => setShowModal(false), 300);
  };

  // Close modal on ESC key press
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [showModal]);

  return (
    <>
      <footer className="footer text-white text-center">
        <h2>Saikumar S</h2>
        <p>Python Full Stack Developer</p>

        <p className="follow-text">Follow Us</p>
        <div className="footer-icons">
          <a href="https://linkedin.com/in/saikumar-s-a18968302" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Saikumar27820" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="mailto:s.saikumar2780@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="https://www.facebook.com/share/1DfnLV53MM/" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/_sai_kumar2_7?igsh=MTIybDh0ZzNzeWtpMg==" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>

        <div className="footer-bottom mt-4">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} <strong>Saikumar S</strong>. All Rights Reserved. | Made with 💙 using React & Bootstrap
          </p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <img src={arrowUpIcon} alt="Scroll to Top" />
      </button>

      {/* WhatsApp floating button */}
      <button
        className="whatsapp-float"
        onClick={openModal}
        aria-label="WhatsApp Coming Soon"
        title="WhatsApp integration coming soon!"
        type="button"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className={`custom-modal-overlay ${animateModal ? 'show' : ''}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={closeModal} // close modal if clicked outside content
        >
          <div
            className={`custom-modal-content ${animateModal ? 'show' : ''}`}
            onClick={(e) => e.stopPropagation()} // prevent modal content click from closing
          >
            <header className="custom-modal-header">
              <h5 id="modalTitle">Coming Soon!</h5>
              <button
                className="custom-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                &times;
              </button>
            </header>
            <div className="custom-modal-body">
              WhatsApp integration is under development. Stay tuned!
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
