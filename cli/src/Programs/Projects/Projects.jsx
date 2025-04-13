import "./projects.css";
import projects from "./projects.json";

export const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => window.open(project.github, "_blank")}
          >
            <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span className="project-tag" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
                onClick={(e) => e.stopPropagation()}
              >
                View GitHub
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Live
                </a>
              )}
            </div>
            </div>
            {project.status && (
              <p className="project-status">{project.status}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
