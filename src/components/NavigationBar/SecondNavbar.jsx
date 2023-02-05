import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import active from "../../scripts/active";


/** Secondary navbar component */
function SecondNavbar(){

    function showSection(event) {
        active(event.target);            
        };
    
    return(
            <div className="container-fluid secondary-navbar-wraper" id="secondary-navbar">
                <div className="container-fluid navbar-container" id="secundary-navbar-container">
                    <NavBarItem  showSection={showSection} className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem  showSection={showSection} className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem  showSection={showSection} className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
            </div>
    );
};

export default SecondNavbar;