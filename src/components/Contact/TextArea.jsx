import React from "react";

/** Textarea component used in contact form */
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