import React from "react";
import {
  Code,
  Database,
  BarChart,
  Workflow,
  Server,
  Wrench
} from "lucide-react";

function Skills() {

  const skillGroups = [
    {
      title: "Programming & Development",
      icon: <Code />,
      skills: ["Python", "JavaScript", "Django", "Flask", "React.js", "Node.js"]
    },
    {
      title: "Database & SQL",
      icon: <Database />,
      skills: ["Oracle PL/SQL", "MySQL", "PostgreSQL", "MongoDB", "SQL Optimization"]
    },
    {
      title: "ETL & Data Engineering",
      icon: <Workflow />,
      skills: ["Data Extraction", "Data Transformation", "Data Loading", "Data Migration", "Data Validation", "Batch Processing"]
    },
    {
      title: "Data Analytics",
      icon: <BarChart />,
      skills: ["Tableau", "Data Visualization", "KPI Reporting", "Python Analysis", "Excel"]
    },
    {
      title: "Backend & APIs",
      icon: <Server />,
      skills: ["REST APIs", "API Integration", "Postman", "Authentication"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-heading">
        <p className="section-subtitle">WHAT I WORK WITH</p>
        <h2>Technical <span>Skills</span></h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">

              {group.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;