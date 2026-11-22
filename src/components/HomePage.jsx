import React from "react";
import {
  Mail,
  MapPin,
  Download,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profilePic from "../assets/profile.jpeg";

function Home() {
  return (
    <section id="home" className="home-section">

      <div className="home-container">

        <div className="home-content">

          <p className="welcome-text">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1>
            Hi, I'm <span>Habeeb Rilwan</span>
          </h1>

          <h2>
            Software Developer | ETL & Data Analytics Enthusiast
          </h2>

          <p className="home-description">
            Software Developer with 4+ years of experience in Python,
            SQL, PL/SQL, REST APIs, database management, and data processing.
            Experienced in data migration, system integration, and
            full-stack application development.
            
            Currently expanding my expertise in ETL processes,
            Tableau dashboards, and Data Analytics.
          </p>

          <div className="home-buttons">

            <a href="#projects" className="primary-button">
              Explore My Work
            </a>

            <a
              href="/Habeeb_Rilwan_Resume.pdf"
              download
              className="secondary-button"
            >
              <Download size={18} />
              Download Resume
            </a>

          </div>

          <div className="social-links">

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} />
            </a>

            <a href="mailto:rhrrilwan619@gmail.com">
              <Mail />
            </a>

          </div>

        </div>

        <div className="home-profile">

          <div className="profile-card">

          <div className="profile-image-container">
  <img
    src={profilePic}
    alt="Habeeb Rilwan - Software Developer"
    className="profile-image"
  />
</div>

            <h3>Habeeb Rilwan</h3>

            <p>Software Developer</p>

            <div className="profile-location">
              📍 Riyadh, Saudi Arabia
            </div>

            <div className="profile-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>ETL</span>
              <span>Tableau</span>
              <span>React</span>
            </div>

          </div>

        </div>

      </div>

      <a href="#about" className="scroll-down">
        <ArrowDown />
        Scroll to explore
      </a>

    </section>
  );
}

export default Home;