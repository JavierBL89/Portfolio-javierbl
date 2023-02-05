import React from "react";

/** Facebook Icon component */
function FacebookIcon(props){
    return (
        <div className="social-icon-wraper">
        <a href={props.link} id="facebook" target="_blank" rel="noreferrer">
         <i className="fa-brands fa-facebook"></i>
        </a>
        </div>
    )
};

export default FacebookIcon;