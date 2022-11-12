import React from "react";


function CourseContent(props){
    return(
        <a href={props.href} className={props.className} id={props.id}>{props.text}</a>
    );
};

export default CourseContent;