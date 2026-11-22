import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Developer (Contract)",
    company: "IntelliiPRO Technologies",
    location: "Riyadh, Saudi Arabia",
    duration: "September 2025 – March 2026",
    description:
      "Worked on CMS development, production support, database validation, REST API integration and application maintenance.",
    responsibilities: [
      "Resolved application bugs and production issues.",
      "Performed SQL query optimization and database indexing.",
      "Integrated REST APIs and validated application data.",
      "Supported deployments, testing and technical documentation.",
    ],
    technologies: ["Python", "SQL", "REST API", "MySQL", "Git"],
  },
  {
    role: "Software Developer",
    company: "Keel Info Solutions",
    location: "Chennai, India | BSF Client Project, Riyadh",
    duration: "July 2023 – April 2025",
    description:
      "Contributed to enterprise application development and the Banque Saudi Fransi Integrated Corporate Portal data migration project.",
    responsibilities: [
      "Developed SQL and PL/SQL scripts for data extraction and validation.",
      "Supported banking data migration and system integration.",
      "Worked with Django and Node.js REST API integrations.",
      "Investigated data synchronization issues and supported production operations.",
    ],
    technologies: ["Python", "Django", "SQL", "PL/SQL", "Node.js", "REST API"],
  },
  {
    role: "Junior Software Developer",
    company: "Coda Technology and Solutions",
    location: "Chennai, India",
    duration: "October 2021 – June 2023",
    description:
      "Worked on Python-based application development, survey applications, data processing and database integration.",
    responsibilities: [
      "Developed backend functionality using Python and Django.",
      "Created and maintained REST APIs.",
      "Performed data transformation and processing.",
      "Worked with databases and application integrations.",
    ],
    technologies: ["Python", "Django", "MongoDB", "JavaScript", "SQL"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-label">MY PROFESSIONAL JOURNEY</p>

        <h2 className="section-title">Work Experience</h2>

        <p className="section-description">
          My professional experience in software development,
          database management and enterprise application support.
        </p>

        <div className="experience-timeline">
          {experiences.map((job, index) => (
            <div className="experience-card" key={index}>
              <div className="experience-icon">
                <Briefcase size={22} />
              </div>

              <div className="experience-content">
                <h3>{job.role}</h3>

                <h4>{job.company}</h4>

                <div className="experience-meta">
                  <span>
                    <Calendar size={15} /> {job.duration}
                  </span>

                  <span>
                    <MapPin size={15} /> {job.location}
                  </span>
                </div>

                <p>{job.description}</p>

                <ul>
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="technology-list">
                  {job.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;