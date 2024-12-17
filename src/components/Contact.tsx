import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/benxu-/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/benhxu" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;