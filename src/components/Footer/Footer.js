import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-logo">BETA</div> {/* Changed from APOLLO to BETA */}
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} BETA. Precision & Performance. {/* Changed from Apollo to BETA */}
        </div>
        <div className="footer-socials">
          <a href="#!" aria-label="LinkedIn">LI</a>
          <a href="#!" aria-label="Twitter">TW</a>
          <a href="#!" aria-label="Instagram">IN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
