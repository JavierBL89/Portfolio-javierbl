import React from "react";


function CourseContent(props){
    return(
        <a href={props.href} className={props.className} id={props.id}>See skills learned</a>
    );
};

export default CourseContent;