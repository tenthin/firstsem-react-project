// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/home">
              <img src={`${process.env.PUBLIC_URL}/assests/desktop-header-logo.png`} alt="Logo" />
            </Link>
          </div>
          <div className="footer-social">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-square-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tenzinthinley01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/tenthin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-square-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Tenzin Thinley. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
