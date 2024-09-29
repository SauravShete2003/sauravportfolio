import React from "react";
import "./ProjectCard.css";
import githubImg from "./../../assests/github.png";
import hosting from "./../../assests/host.png";
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
      <p className="project-card-descritpion">{description} </p>
      <span className="project-card-technologies">{technologies.join()}</span>
      <div className="project-card-links">
        <div className="auth-link-container">
          <a
            href={liveDemo}
            className="auth-links"
            target="_blank"
            rel="noopener noreferrer" >
            <img src={hosting} className="auth-link-img" alt="Live demo icon" /> Live Demo</a>
        </div>
        <div className="auth-link-container">
          <a
            href={github}
            className="auth-links-github"
            target="_blank"
            rel="noopener noreferrer">
            <img src={githubImg} className="auth-link-img" alt="GitHub icon" /> GitHub Link </a>
        </div>
      </div>
      <span className="project-card-date">{date}</span>
    </div>
  );
}

export default ProjectCard;
