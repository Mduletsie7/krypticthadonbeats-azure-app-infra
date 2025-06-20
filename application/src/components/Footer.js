// Footer.jsx
import React from 'react';
import '../styles/Footer.css';

// Store current year as variable
// this will allow dynamic year update in footer so no need to update in code every year
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>Kryptic Tha Don &copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
