import React from "react";

/** Submit button component used to submit contact form */
function SubmitButton(props){
    return <button type="submit" className={props.className} id={props.id} name={props.name}>{props.text}</button>
};

export default SubmitButton;