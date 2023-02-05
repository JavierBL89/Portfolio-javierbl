import React from "react";

/** Input component used in contact form */
function Input(props){
    return (
        <input
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
        />
    )
};

export default Input;