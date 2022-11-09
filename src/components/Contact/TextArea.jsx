import React from "react";


function TextArea(props){
    return (
        <textarea
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        />
    )
};

export default TextArea;