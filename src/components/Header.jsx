// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='container'>
      <header>
        <div className="header-logo">
          <Link to="/home" className='logo'>
            {/* <img src={`${process.env.PUBLIC_URL}/assests/desktop-header-logo.png`} alt="Logo" /> */}
            tenzin
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/about">ABOUT ME</Link></li>
            <li><Link to="/project">PROJECT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
