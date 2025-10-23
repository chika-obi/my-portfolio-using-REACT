import React from "react";
import "./Hero.css";
import heroImage from "../../assets/qrCode4.png"; // 👈 your image path here

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay">
        <div className="hero-container">
          {/* Left side — text and button */}
          <div className="hero-content">
            
            <a href="#projects" className="hero-btn">
              View My Work
            </a>
          </div>

          {/* Right side — image */}
          <div className="hero-image">
            <img src={heroImage} alt="Hero visual" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
