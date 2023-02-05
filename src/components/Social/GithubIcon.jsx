import React from "react";

/** GitHub Icon component */
function GithubIcon(props){
    return (
        <div className="social-icon-wraper">
        <a href={props.link} id="github" target="_blank" rel="noreferrer">
           <i className="fa-brands fa-github"></i>
        </a>
        </div>
    )
};

export default GithubIcon;