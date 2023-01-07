import React from "react";
import SecondNavbar from "../NavigationBar/SecondNavbar";
import {projects} from "../../dataProjects";
import ProjectCard from "./ProjectCard";

function Projects(){

    return (
        <section id="projects-section">
            <div className="container fluid projects-wraper" id="projects-wraper">
                <div className="container-fluid projects-container g-0 hiden" id="projects-container">     
                 {projects.map((project, index) => {
                    return (
                    <ProjectCard
                     key={index}
                     title={project.title}
                     description={project.description}
                     technology={project.technology}
                     url={project.url}
                    />
                    )
                  })
                };
                </div>
            </div>
        </section>
    
    );
};

export default Projects;