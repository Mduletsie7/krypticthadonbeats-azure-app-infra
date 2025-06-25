import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-description">
          Please Use My Email Below If You Need Any Support
        </p>
        <div className="email-container">
          <a 
            href="mailto:SuperStarObeatz@gmail.com" 
            className="email-link"
          >
            krypticthadonbeats@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;