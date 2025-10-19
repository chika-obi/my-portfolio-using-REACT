import React from "react";
import "./Hero.css";
import banner from "../../assets/banner2.png"; // ✅ absolute import works with Vite

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          {/* <h1>
            Hi, I’m <span>Chika Obi</span>
          </h1>
          <p>A Passionate Frontend Developer & Designer</p> */}
          <br />  <br />  <br /><br />  <br /><br />  <br />
          <a href="#projects" className="hero-btn">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
