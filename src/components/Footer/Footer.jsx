import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        <h2 className="footer-logo">Kpanuku Chika-Obi</h2>
        <p className="footer-text">
          Designing and building impactful web experiences with React and creativity 🚀
        </p>

        <div className="footer-socials">
          <a
            href="https://github.com/chika-obi"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="mailto:yourmail@example.com"
            className="social-link"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <p className="footer-copy">
          © {currentYear} Kpanuku Chika-Obi. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
