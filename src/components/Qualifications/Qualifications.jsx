import React from "react";
import "./Qualifications.css";

function Qualifications() {
  return (
    <section className="qualifications" id="qualifications">
      <h2 className="qualifications-title">Qualifications & Achievements</h2>
      <p className="qualifications-intro">
        My academic background, professional certifications, and research contributions
        reflect my dedication to continuous learning and excellence.
      </p>

      <div className="qualifications-container">
        {/* Education */}
        <div className="qualification-section">
          <h3>🎓 Education</h3>
          <ul>
            <li>
              <strong>Member</strong> – Nigeria Computer Society <i>MNSC</i>, 2023
            </li>
            <li>
              <strong>MSc Computer Science</strong> – Rivers State University, 2023 <br />
              Focus: Software Engineering & Systems Design
            </li>
            <li>
              <strong>BSc Computer Science</strong> – University of Port Harcourt, 2014
            </li>
             
          </ul>
        </div>

        {/* Certifications */}
        <div className="qualification-section">
          <h3>🏅 Certifications</h3>
          <ul>
            <li>Microsoft Business Analysis (Coursera Scholarship) – 2025</li>
            <li>Google Data Analytics Certificate – 2024</li>
            <li>Frontend Web Development (Coursera-META) – 2023</li>
             <li>Scrum Fundamentals <i>SFC</i> – 2023</li>
          </ul>
        </div>

        {/* Publications */}
        <div className="qualification-section">
          <h3>📚 Publications</h3>
          <ul>
            <li>
              “An Efficient Algorithm for Group Communication in a Distributed Computing Environment” – 2023
            </li>
            <li>Upcoming: Research on Digital Transformation in Real Estate (PhD proposal)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
