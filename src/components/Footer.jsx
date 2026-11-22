import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Habeeb <span>Rilwan</span></h2>
          <p>
            Software Developer | Python | SQL | Data Analytics
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#analytics">Analytics</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/habeeb-rilwan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/HabeebRilwan"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a href="mailto:rhrrilwan619@gmail.com" aria-label="Email">
            <Mail />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Habeeb Rilwan.
          All Rights Reserved.
        </p>

        <a href="#home" className="back-to-top">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>

    </footer>
  );
}

export default Footer;