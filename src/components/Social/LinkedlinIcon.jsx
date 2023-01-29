import React from "react";


function LinkedlinIcon(props){
    return (
        <div className="social-icon-wraper">
        <a href={props.link} id="linkedin" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        </div>
    )
    
};

export default LinkedlinIcon;