import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import Me from "../Me/Me";
import Projects from "../Projects/Projects";
import Background from "../Background/Background";

function MainNavbar(){

    const [me, setMe] = useState();
    const [projects, setProjects] = useState(false);
    const [background, setbackground] = useState(false);

    function showSection(event) {
        const section = event.target.id;

        if(section === "me-link"){
            setMe(true)
            setProjects(false)
            setbackground(false)
        }else if(section === "projects-link"){
            setMe(false)
            setProjects(true)
            setbackground(false)
        }else if(section === "background-link"){
            setMe(false)
            setProjects(false)
            setbackground(true)
        }
    };
    
    
    return(
            <div className="container-fluid main-navbar-wraper" id="main-navbar">
                <div className="container-fluid main-navbar-container" id="main-navbar-container">
                    <NavBarItem showSection={showSection} link="#me-section" className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem showSection={showSection} link="#projects-section" className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem showSection={showSection} link="#background-section" className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                {me ? <Me /> : null}
                {projects ? <Projects /> : null}
                {background ? <Background /> : null}
            </div>
    );
};

export default MainNavbar;