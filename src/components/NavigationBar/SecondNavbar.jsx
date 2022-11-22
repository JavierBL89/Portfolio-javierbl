import React, { useState } from "react";
import Background from "../Background/Background";
import Contact from "../Contact/Contact";
import NavBarItem from "./NavBarItem";
import Projects from "../Projects/Projects";
import Me from "../Me/Me";

function SecondNavbar(){

    return(
            <div className="container-fluid secondary-navbar-wraper" id="secondary-navbar">
                <div className="container-fluid navbar-container">
                    <NavBarItem   className="nav-item me-link" id="me-link" text="ME"/>
                    <NavBarItem   className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                    <NavBarItem   className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                </div>
            </div>

    );
};

export default SecondNavbar;