import React from "react";


function CourseDescrip(props){
    return(
        <ul>
            <li>{props.text}</li>
            <li>{props.qualification}</li>
        </ul>

    );
};

export default CourseDescrip;