// Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Kryptic Tha Don © {currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
