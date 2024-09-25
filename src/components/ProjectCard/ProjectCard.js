import React from "react";
import "./ProjectCard.css";
function ProjectCard({
  title,
  description,
  technologies,
  liveDemo,
  github,
  date,
  image,
}) {

  return (
    <div className="project-card-container">
      <h2 className="project-card-title">{title}</h2>
      <img src={image} alt="Projectsimage" className="project-card-image" />
      <p className="project-card-descritpion">{description}</p>
      <span className="project-card-technologies">{technologies}</span>
      <a
        href={liveDemo}
        className="project-card-live-demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo : {liveDemo}
      </a>
      <a
        href={liveDemo}
        className="project-card-github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Link : {github}
      </a>
      <span className="project-card-date">{date}</span>
    </div>
  );
}

export default ProjectCard;
