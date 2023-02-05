import React from "react";
import {projects} from "../../dataProjects";
import ProjectCard from "./ProjectCard";

/** 
 * Project Component holds the projects section
 * and create a project card for every project 
 * document in dataProjects.js file.
 */
function Projects(){

    return (
        <section id="projects-section">
            <div className="container fluid projects-wraper" id="projects-wraper">
                <div className="container-fluid projects-container g-0 hiden" id="projects-container">     
                 {projects.map((project, index) => {
                    return (
                    <ProjectCard
                     key={index}
                     id={index}
                     title={project.title}
                     description={project.description}
                     url={project.url}
                     gitHubUrl={project.gitHubUrl}
                     technology={project.technology}
                     image={project.image}
                    />
                    )
                  })
                }
                </div>
            </div>
        </section>
    
    );
};

export default Projects;