import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "A responsive and animated portfolio website built with React, Vite, and Framer Motion.",
      tech: ["React", "Vite", "CSS"],
      link: "#",
    },
    {
      id: 2,
      title: "Student Dashboard",
      description:
        "A web-based student management app featuring authentication, course tracking, and reports.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 3,
      title: "E-Commerce UI",
      description:
        "A modern e-commerce interface with product search, cart preview, and checkout animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-intro">
        A few of my recent works demonstrating my love for clean design,
        efficient code, and smooth user experience.
      </p>

      <div className="projects-grid">
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
