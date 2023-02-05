import React from "react";

/** H1 Component */
function H1(props){
    return <h1 className={props.className} id={props.id}>{props.text}</h1>
};

export default H1;