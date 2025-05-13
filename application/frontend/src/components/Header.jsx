// Header.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className='website-logo' src='https://krypticmusicportfolio.s3.amazonaws.com/images/logo.png' alt='Kryptic Tha Don logo'></img>
        <h1 className='logo-text'>KRYPTIC THA DON</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="LeaseBeats-section" smooth={true} duration={500}>Lease Beats</Link></li>
          <li><Link to="notable-credits" smooth={true} duration={500}>Credits</Link></li>
          <li><Link to="rw-contact-form" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
