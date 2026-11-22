import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo">
          HABEEB<span>.</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#analytics">Analytics</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-button">
          Let's Connect
        </a>

      </div>
    </nav>
  );
}

export default Navbar;