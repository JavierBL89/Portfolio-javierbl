import React from "react";



function Collapsable(props){
    return(
         <div className="collapsable">
         <p>
         <a className="" data-bs-toggle="collapse" href={"#collapse" + props.projectid} role="button" aria-expanded="false" aria-controls={props.projectName}>
            Description
          </a>
         </p>
         <div className="collapse" id={"collapse" + props.projectid}>
           <div className="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
           </div>
         
          </div>
         </div>
    )
};

export default Collapsable;