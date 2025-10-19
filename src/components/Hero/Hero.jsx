import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Background gradient animation */}
      <motion.div
        className="hero-bg"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1>
          Hi, I'm <span className="highlight">Chika-Obi</span>
        </h1>
        <p>
          A passionate <strong>Frontend Developer</strong> and <strong>Tech Educator</strong> creating interactive and elegant web experiences.
        </p>

        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
