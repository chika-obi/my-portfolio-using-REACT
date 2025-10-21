import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="ab">
            Hello! I'm <strong>Chika-Obi</strong>, a passionate 
            <strong> Frontend Developer</strong> and 
            <strong> Tech Educator</strong> focused on creating 
            user-friendly, responsive, and visually appealing digital experiences.
          </p>
          <p className="ab">
            My journey started with a deep curiosity for how things work on the web. 
            Over time, I’ve honed my skills in <strong>React</strong>, 
            <strong> JavaScript</strong>, and modern UI/UX principles to build 
            clean, accessible, and high-performing applications.
          </p>
          <p className="ab">
            Beyond coding, I love mentoring beginners in technology and helping them 
            gain confidence in software development. My goal is to combine 
            creativity and logic to craft meaningful solutions that inspire others.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <h4>💻 Tech Stack</h4>
              <p>React, JavaScript, HTML, CSS, Git, Vite</p>
            </div>
            <div className="highlight">
              <h4>🎯 Core Values</h4>
              <p>Creativity, Growth, and Excellence</p>
            </div>
            <div className="highlight">
              <h4>🌍 Vision</h4>
              <p>Building digital experiences that empower learning and innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
