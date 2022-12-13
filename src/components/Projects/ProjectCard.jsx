import React from "react";
import {projects} from "../../dataProjects";


function ProjectCard(props){

    return (

                <div className="container-fluid project-card">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                           <div className="project-card-head">
                            <div className="row g-0 w-100 project-card-head">
                                 <h6>{props.title}</h6>
                                <div className="col-sm-12 col-lg-12 project-img"></div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-lg-6">
                        <div className="project-card-body">
                                <div className="row g-0">
                                     <div className="col-12 project-description">
                                     <small>{props.description}
                                         </small> 
                                      </div>
                                      <div className="col-12 d-lg-none project-tech">
                                          {props.technology?.map((tech, index) => {
                                            return (<img key={index} src={tech.icon} alt={tech.name}/>)
                                          })}
                                      </div>
                                 </div>
                                 <div className="row w-100">
                                 
                                 </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 d-none d-lg-flex project-tech-large">
                        {props.technology?.map((tech, index) => {
                            return (<img key={index} src={tech.icon} alt={tech.name}/>)
                            })}
                    </div>
            </div>

    );
};

export default ProjectCard;