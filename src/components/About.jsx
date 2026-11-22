import React from "react";

function About() {
  return (
    <section id="about" className="section about-section">

      <div className="section-heading">
        <p className="section-subtitle">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">

        <div className="about-text">

          <h3>Software Developer & Data Enthusiast</h3>

          <p>
            I am a Software Developer with over four years of experience
            in software development, database management, SQL programming,
            and data processing.
          </p>

          <p>
            Throughout my professional journey, I have worked on
            enterprise applications, banking data migration,
            REST API integrations, production support, and
            database optimization.
          </p>

          <p>
            I have experience working with Python, Django, React.js,
            Node.js, SQL, PL/SQL, MySQL, PostgreSQL, and MongoDB.
          </p>

          <p>
            I am currently strengthening my knowledge of ETL,
            Tableau, data visualization, and business analytics
            to expand my career into data-focused roles.
          </p>

        </div>

        <div className="about-details">

          <div className="detail-card">
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>

          <div className="detail-card">
            <h3>Python</h3>
            <p>Backend Development</p>
          </div>

          <div className="detail-card">
            <h3>SQL</h3>
            <p>Database Management</p>
          </div>

          <div className="detail-card">
            <h3>ETL</h3>
            <p>Data Processing</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;