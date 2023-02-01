import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import ReactPlayer from "react-player";
import Collapsable from "../../Collapsable";
import GithubIcon from   "../Social/GithubIcon.jsx";


function ProjectCard(props){

    useEffect(() => {
        AOS.init();    
     }, [])

    return (

            <div className="container-fluid project-card">
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                       <div className="project-card-head">
                        <div className="row g-0 w-100 project-card-head">
                             <h6 data-aos="fade-down-right" data-aos-once="true">{props.title}</h6>
                            <div data-aos="fade-down-right" data-aos-once="true" className="col-sm-12 col-lg-12 project-img">
                             <div className="screen" >
                             <a href={props.url} id={"project_" + props.id} target="_blank" rel="noreferrer"><img src={props.image} alt={props.title}></img></a>
                             </div>
                             <div className="screen-base"></div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                    <div className="project-card-body">
                            <div  className="row g-0">
                            {/* <Collapsable 
                              gitHubUrl={props.gitHubUrl} 
                              projectId={props.id}
                              description={props.description}
                              /> */}

                                 <div data-aos="fade-down-right" className="col-12 project-description">
                                 <small>{props.description}
                                     </small> 
                                  </div>
                                  <div className="col-12 d-lg-none project-tech">
                                        
                                    <GithubIcon link={props.gitHubUrl}/>
                                  </div>
                             </div>
                             <div className="row w-100">
                             
                             </div>
                        </div>
                    </div>
                    
                </div>
                <div  className="col-12 d-none d-lg-flex project-tech-large">
                    {props.technology?.map((tech, index) => {
                        return (<img key={index} src={tech.icon} alt={tech.name}/>)
                        })}
                </div>
                <div className="project-separator"></div>
            </div>

    );
};

export default ProjectCard;