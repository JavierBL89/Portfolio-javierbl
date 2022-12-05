import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import Me from "../Me/Me";
import Projects from "../Projects/Projects";
import Background from "../Background/Background";
import Section from "../Section";
import show from "../../showSection";

function MainNavbar(){

    const [section, setSection] = useState(false);
    const [puta, setkk] = useState();

    function showSection(event) {
        show(event.target);
        setSection(true);
        
    };
    
    
    return(
            <div className="container-fluid main-navbar-wraper" id="main-navbar">
                <div className="container-fluid main-navbar-container" id="main-navbar-container">
                    <NavBarItem showSection={showSection} className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem showSection={showSection} link="#projects-section" className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem showSection={showSection} link="#background-section" className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                {section ? <Section /> : null}
            </div>
    );
};

export default MainNavbar;