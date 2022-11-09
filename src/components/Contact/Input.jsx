import React from "react";


function Input(props){
    return (
        <input
        className={props.className}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        />
    )
};

export default Input;