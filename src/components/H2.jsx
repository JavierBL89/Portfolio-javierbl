import React from "react";

/** H2 Component */
function H2(props){
    return <h2 className={props.className} id={props.id}>{props.text}</h2>
};

export default H2;