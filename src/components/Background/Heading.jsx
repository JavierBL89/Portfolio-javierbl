import React from "react";

/** Heading component for Background section headings  */
function Heading(props){
    return  <h2 data-aos="fade-up-right" className={props.className}>{props.text}</h2>         
};

export default Heading;