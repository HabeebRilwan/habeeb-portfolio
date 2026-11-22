import {
  Code2,
  Database,
  BarChart3,
  Globe,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
const projects = [
  {
    number: "01",
    title: "CMS Application",
    category: "Web Development",
    description:
      "Worked on CMS application development, production support, database validation, REST API integration and application maintenance.",
    technologies: ["Python", "SQL", "REST API", "MySQL"],
    icon: Code2,
    type: "cms",
  },
  {
    number: "02",
    title: "BSF ICP Data Migration",
    category: "Data Engineering",
    description:
      "Contributed to banking data migration and system integration, including SQL and PL/SQL scripts for data extraction, validation and reconciliation.",
    technologies: ["SQL", "PL/SQL", "Data Migration", "ETL Concepts"],
    icon: Database,
    type: "migration",
  },
  {
    number: "03",
    title: "Survey Application",
    category: "Application Development",
    description:
      "Developed Python and Django-based application functionality, REST APIs, data processing and database integrations.",
    technologies: ["Python", "Django", "MongoDB", "JavaScript"],
    icon: BarChart3,
    type: "survey",
  },
  {
    number: "04",
    title: "Personal Developer Portfolio",
    category: "Frontend Development",
    description:
      "Designed and developed a responsive personal portfolio to showcase software development experience, technical skills and analytics projects.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    icon: Globe,
    type: "portfolio",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="projects-heading">
          <p className="section-label">MY RECENT WORK</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of my software development, database
            management and data processing work.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="project-card" key={project.number}>

                <div className={`project-preview ${project.type}`}>

                  <div className="preview-top">
                    <span>PROJECT {project.number}</span>
                    <ArrowUpRight size={20} />
                  </div>

                  <div className="preview-icon">
                    <Icon size={48} />
                  </div>

                  <h3>{project.title}</h3>

                  <p>{project.category}</p>

                </div>

                <div className="project-information">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href="#contact">
                      Discuss Project
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                </div>

              </article>
            );
          })}

        </div>

        <div className="projects-footer">
          <p>Interested in working together?</p>

          <a href="#contact" className="primary-button">
            Let's Connect
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;