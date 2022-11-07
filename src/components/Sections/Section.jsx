import React from "react";
import NavBarItem from "../NavigationBar/NavBarItem";
import Projects from "../Projects/Projects";
import Me from "./Me";


function Section(){

    return(
            <div className="container-fluid section-wraper" >
                <div className="container-fluid section-container">
                    <div className="container-fluid secondary-navbar-wraper" id="secondary-navbar">
                        <div className="container-fluid navbar-container">
                            <NavBarItem className="nav-item me-link" id="me-link" text="ME"/>
                            <NavBarItem className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                            <NavBarItem className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                        </div>
                    </div>
                <Me/>
                <Projects/>
                </div>
            </div>
    );
};

export default Section;