import React from "react";

import Heading from "./Heading";
import Quote from "./Quote"

import ContactIcon from "../../ContactIcon";

function Hero(){
    return (
        <div className="hero-wrapper" id="hero-wraper">
            <Heading />
            <Quote />
            <ContactIcon className="contact-icon-container" id="contact-icon-1"/>
        </div>
    );
};

export default Hero;