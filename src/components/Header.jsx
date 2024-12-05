// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className="header-logo">
          <Link to="/home">
            <img src={`${process.env.PUBLIC_URL}/assests/desktop-header-logo.png`} alt="Logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
