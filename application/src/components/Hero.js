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
              Mdumisi Kelvin Letsie, also known as Kryptic Tha Don, 
              is a hip-hop music producer from Cape Town, South Africa. 
              With a deep passion for Hip-Hop, he creates instrumentals that speak to artists looking for originality and soul.
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Hero;