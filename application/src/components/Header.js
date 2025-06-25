// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { to: "LeaseBeats-section", label: "Lease Beats" },
    { to: "production-credits", label: "Credits" },
    { to: "contact-container", label: "Contact" }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        <div className="header__logo">
          <img 
            className="header__logo-image" 
            src="https://krypticthadonstorage.blob.core.windows.net/media/images/logo.png" 
            alt="Kryptic Tha Don"
            loading="eager"
          />
          <h1 className="header__logo-text">KRYPTIC THA DON</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__nav-list">
            {navigationItems.map((item) => (
              <li key={item.to} className="header__nav-item">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="header__nav-link"
                  activeClass="header__nav-link--active"
                  spy={true}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`header__menu-button ${isMobileMenuOpen ? 'header__menu-button--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="header__menu-button-line"></span>
          <span className="header__menu-button-line"></span>
          <span className="header__menu-button-line"></span>
        </button>

        {/* Mobile Navigation */}
        <nav 
          id="mobile-navigation"
          className={`header__mobile-nav ${isMobileMenuOpen ? 'header__mobile-nav--open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className="header__mobile-nav-list">
            {navigationItems.map((item) => (
              <li key={item.to} className="header__mobile-nav-item">
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="header__mobile-nav-link"
                  onClick={closeMobileMenu}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;