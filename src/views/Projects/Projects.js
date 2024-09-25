import "./Projects.css";
import ProjectData from "../../data/ProjectData";
import ProjectCard from './../../components/ProjectCard/ProjectCard'
function Projects() {
  return (
    <div id="projects">
      <h1 style={{color : "#004D40" , fontWeight : "500"}}>Projects</h1>
      <div className="project-conatiner">
        {ProjectData.map((project, index) => {
          const { title, description, technologies, liveDemo, github, date , image} =
            project;
            return(
                <ProjectCard
                key={index}
                title={title}
                image={image}
                description={description}
                technologies={technologies}
                liveDemo={liveDemo}
                github={github}
                date={date}
                />
            )
        })}
      </div>
    </div>
  );
}

export default Projects;
