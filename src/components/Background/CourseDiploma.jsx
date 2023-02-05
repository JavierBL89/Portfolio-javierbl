import React from "react";


/**
 * This Component is a link used 
 * to show course diploma
 */
function CourseDiploma(props){
    return(
        <a href={props.href} className={props.className} id={props.id} target="_blank" rel="noreferrer">See diploma</a>
    );
};

export default CourseDiploma;