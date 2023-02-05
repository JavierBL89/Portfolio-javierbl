import React from "react";
import GithubIcon from "./Social/GithubIcon";


function Collapsable(props){
    return(
         <div className="collapsable container-fluid g-0 mt-4">
         <div className="row g-0">
          <div className="col-12 d-flex justify-content-between">
         <a className="" data-bs-toggle="collapse" href={"#collapse" + props.projectId} role="button" aria-expanded="false" aria-controls={props.projectName}>
            Description
          </a>
          <GithubIcon link={props.gitHubUrl} />
         
          </div>
          <div className="collapse" id={"collapse" + props.projectId}>
           <div className="card card-body">
            {props.description}
           </div>
         
          </div>
         </div>
         
         </div>
    )
};

export default Collapsable;