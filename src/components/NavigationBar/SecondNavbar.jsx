import React, { useState } from "react";
import Background from "../Background/Background";
import Contact from "../Contact/Contact";
import NavBarItem from "./NavBarItem";
import Projects from "../Projects/Projects";
import Me from "../Me/Me";

function SecondNavbar(){

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
            <div className="container-fluid secondary-navbar-wraper" id="secondary-navbar">
                <div className="container-fluid navbar-container" id="secundary-navbar-container">
                    <NavBarItem  showSection={showSection} className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem  showSection={showSection} className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem  showSection={showSection} className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                {me ? <Me /> : null}
                {projects ? <Projects /> : null}
                {background ? <Background /> : null}
            </div>

    );
};

export default SecondNavbar;