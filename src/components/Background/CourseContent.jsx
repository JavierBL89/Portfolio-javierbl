import React from "react";

/**
 * This Component is a link used 
 * to show course content
 */
function CourseContent(props){
    return(
        <a href={props.href} className={props.className} id={props.id}>{props.text}</a>
    );
};

export default CourseContent;