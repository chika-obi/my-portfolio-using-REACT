import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kpanuku, nice to meet. I would like to connect with you!`
  );

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

      <div className="contact-container">
        {/* LEFT COLUMN - FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <motion.button
            type="submit"
            className="send-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* RIGHT COLUMN - CONTACT INFO */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📞 Phone: <a href="tel:+2349049332849">+234-904-933-2849</a></p>
          <p>💬 WhatsApp: 
            <a
              href={`https://wa.me/2347035260890?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              +234-703-526-0890
            </a>
          </p>
          <p>✉️ Email: <a href="mailto:kpanukuchikaobi@gmail.com">kpanukuchikaobi@gmail.com</a></p>
          <p>🌐 Website: <a href="https://chika-obi.github.io/my_portfolio/" target="_blank" rel="noopener noreferrer">https://chika-obi.github.io/my_portfolio/</a></p>
          <p>📍 Location: Port Harcourt,Rivers State, Nigeria</p>
          <p>🕒 Available: Mon–Fri, 9am–6pm</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
