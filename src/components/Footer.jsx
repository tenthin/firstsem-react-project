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
              <i class="fa-brands fa-square-instagram"></i>
              {/* <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> */}
              <i class="fa-brands fa-linkedin"></i>
              {/* <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a> */}
              <i class="fa-brands fa-square-github"></i>
              {/* <a href="https://www.github.com" target="_blank" rel="noreferrer">GitHub</a> */}
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
