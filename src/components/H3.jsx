import React from "react";

/** H3 Component */
function H3(props){
    return <h3 className={props.className} id={props.id}>{props.text}</h3>
};

export default H3;