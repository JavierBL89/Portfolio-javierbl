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
                    <div className="row d-flex w-100 g-0">
                        <div className="col-6 col-md-4">                    
                            <NavBarItem  showSection={showSection} className="nav-item me-link" id="me-link" text="ME"/>
                        </div>
                        <div className="col-6 col-md-4">
                            <NavBarItem  showSection={showSection} className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                        </div>
                        <div className="col-12 col-md-4">
                            <NavBarItem  showSection={showSection} className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SecondNavbar;