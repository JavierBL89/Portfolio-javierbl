import React, { useState } from "react";
import SecondNavbar from "./NavigationBar/SecondNavbar";
import Me from "./Me/Me";
import Background from "./Background/Background";
import Projects from "./Projects/Projects";

function Section (){

    return (
            <div className="container-fluid section-wraper" >
                <div className="container-fluid section-container">
                <SecondNavbar/>
                <Me/>
                <Projects/>
                <Background/>
                </div>
                
            </div>
    );
};

export default Section;