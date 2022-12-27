import React from "react";


function TextArea(props){
    return (
        <textarea
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
        />
    )
};

export default TextArea;