import React from "react";
import NavBarItem from "./NavBarItem";
import Section from "../Sections/Section";

function NavigationBar(){
    return(
            <div className="container-fluid main-navbar-wraper" id="main-navbar">
                <div className="container-fluid navbar-container">
                    <NavBarItem className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
                <Section/>

            </div>
    );
};

export default NavigationBar