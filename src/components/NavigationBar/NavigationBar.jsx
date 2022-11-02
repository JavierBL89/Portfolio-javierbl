import React from "react";
import NavBarItem from "./NavBarItem";
import Section from "./Section";

function NavigationBar(){
    return(
            <div className="container-fluid nav-bar-wraper">
                <div className="container-fluid nav-bar-container">
                    <NavBarItem className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                <Section/>

            </div>
    );
};

export default NavigationBar