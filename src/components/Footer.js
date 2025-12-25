// import React, { useEffect, useState } from 'react';
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
  const whatsappNumber = "918925428378"; // WhatsApp number with country code
  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

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
        onClick={openWhatsApp}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        type="button"
      >
        <img src={whatsappIcon} alt="WhatsApp" />
      </button>
    </>
  );
};

export default Footer;
