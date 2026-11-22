import React from "react";
import { BarChart3, ExternalLink, TrendingUp } from "lucide-react";


function Analytics() {
  return (
    <section id="analytics" className="analytics-section">
      <div className="container">

        <div className="analytics-heading">
          <p className="section-label">DATA & VISUALIZATION</p>

          <h2 className="section-title">
            Analytics <span>Portfolio</span>
          </h2>

          <p className="section-description">
            Explore my data visualization and analytics work
            through my Tableau Public profile.
          </p>
        </div>

        <div className="analytics-card">

          <div className="analytics-icon">
            <BarChart3 size={45} />
          </div>

          <div className="analytics-content">
            <h3>Tableau Public</h3>

            <p>
              Explore my Tableau Public profile to view my
              published dashboards, data visualizations,
              and analytics projects.
            </p>

            <div className="analytics-tags">
              <span>Tableau</span>
              <span>Data Visualization</span>
              <span>Dashboard Development</span>
              <span>Data Analytics</span>
            </div>

            <a
              href="https://public.tableau.com/app/profile/habeeb.rilwan/vizzes"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
             <BarChart3 size={19} />
              View Tableau Profile
              <ExternalLink size={17} />
            </a>
          </div>

          <div className="analytics-decoration">
            <TrendingUp size={100} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Analytics;