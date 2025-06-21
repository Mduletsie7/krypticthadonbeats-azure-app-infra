import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero" role="banner" aria-label="Hero section featuring Kryptic Tha Don">
      <div className="hero-container">
        <div className="hero-content">
          <header className="hero-text">
            <h1>
              <span className="hero-brand">Kryptic</span> Tha Don
            </h1>
            <p className="hero-description">
              Music Producer from Cape Town, South Africa with a passion for Hip-Hop.
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Hero;