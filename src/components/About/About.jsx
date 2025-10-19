import { motion } from "framer-motion";
import "./About.css";
import profileImg from "../../assets/profile.jpg";



function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* Left: Image */}
        <motion.div
          className="about-image"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          
        >
          <img src={profileImg} alt="Profile" />
          
        </motion.div>

        {/* Right: Text */}
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I'm <strong>Chika-Obi</strong>, a passionate <strong>Frontend Developer</strong> 
            and <strong>Tech Educator</strong> who loves transforming ideas into 
            functional, beautiful digital experiences.
          </p>
          <p>
            With a background in <strong>Computer Science</strong> and a strong drive 
            for innovation, I build scalable, interactive, and modern web applications 
            that focus on user experience and performance.
          </p>
          <p>
            Outside coding, I enjoy teaching, mentoring young tech enthusiasts, 
            and exploring ways to use technology to make education more accessible.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
