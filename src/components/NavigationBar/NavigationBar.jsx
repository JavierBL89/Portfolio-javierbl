import React from "react";
import NavBarItem from "./NavBarItem";

function NavigationBar(){
    return(
        <div className="container-fluid nav-bar-wraper">
            <div className="container-fluid nav-bar-container">
                <NavBarItem className="nav-item me-link" id="me-link" text="ME"/>
                <NavBarItem className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                <NavBarItem className="nav-item background-link" id="background-link" text="BACKGROUND"/>
            </div>
        </div>
    );
};

export default NavigationBar