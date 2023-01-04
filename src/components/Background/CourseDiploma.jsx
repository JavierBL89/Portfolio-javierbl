import React from "react";


function CourseDiploma(props){
    return(
        <a href={props.href} className={props.className} id={props.id} target="_blank" rel="noreferrer">See diploma</a>
    );
};

export default CourseDiploma;