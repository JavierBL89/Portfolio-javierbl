import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import Section from "./SecondNavbar";
import Me from "../Me/Me";
import Projects from "../Projects/Projects";
import Background from "../Background/Background";

function MainNavbar(){

    const [me, setMe] = useState(false);
    const [projects, setProjects] = useState(false);
    const [background, setackground] = useState(false);
    

    function showSection(section) {
        if(section === "me-link"){
            setMe(true)
        }else if(section === "projects-link"){

        }else if(section === "background-link"){
            
        }
    };

    return(
            <div className="container-fluid main-navbar-wraper" id="main-navbar">
                <div className="container-fluid navbar-container">
                    <NavBarItem showSection={showSection} href="#me-section" className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem showSection={showSection} href="#projects-section" className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem showSection={showSection} href="#background-section" className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                <Me />
                <Projects />
                <Background />
            </div>
    );
};

export default MainNavbar;