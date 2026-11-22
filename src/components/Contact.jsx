import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="contact-heading">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>

          <p className="section-description contact-description">
            Open to software development, Python, database management,
            and data analytics opportunities. Let's connect and discuss
            how we can work together.
          </p>
        </div>

        <div className="contact-grid">

          <a href="mailto:rhrrilwan619@gmail.com" className="contact-card">
            <div className="contact-icon">
              <Mail size={25} />
            </div>
            <h3>Email</h3>
            <p>rhrrilwan619@gmail.com</p>
          </a>

          <a href="tel:+966530751548" className="contact-card">
            <div className="contact-icon">
              <Phone size={25} />
            </div>
            <h3>Saudi Arabia</h3>
            <p>+966 530751548</p>
          </a>

          <a href="tel:+918056204972" className="contact-card">
            <div className="contact-icon">
              <Phone size={25} />
            </div>
            <h3>India</h3>
            <p>+91 80562 04972</p>
          </a>

          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={25} />
            </div>
            <h3>Location</h3>
            <p>Riyadh, Saudi Arabia</p>
          </div>

        </div>

        <div className="contact-socials">

          <a
            href="https://linkedin.com/in/habeeb-rilwan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href="https://github.com/HabeebRilwan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a href="mailto:rhrrilwan619@gmail.com" aria-label="Email">
            <Mail size={22} />
          </a>

        </div>

        <div className="contact-bottom">
          <h3>Have an opportunity or project in mind?</h3>

          <a
            href="mailto:rhrrilwan619@gmail.com?subject=Portfolio%20Contact"
            className="primary-button"
          >
            Let's Connect
            <ExternalLink size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;