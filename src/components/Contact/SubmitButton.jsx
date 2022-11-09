import React from "react";


function SubmitButton(props){
    return <button type="submit" className={props.className} id={props.id} name={props.name}>{props.text}</button>
};

export default SubmitButton;