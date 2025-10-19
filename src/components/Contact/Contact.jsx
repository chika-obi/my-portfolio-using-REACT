import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-intro">
        Have a project, collaboration, or idea in mind? I’d love to hear from you.
      </p>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Your message has been sent successfully.");
        }}
      >
        <div className="form-group">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>

        <textarea placeholder="Your Message" required></textarea>

        <motion.button
          type="submit"
          className="send-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}

export default Contact;
