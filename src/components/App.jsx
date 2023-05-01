import React from "react";

import Social from "./Social/Social";
import Contact from "./Contact/Contact";
import MainNavbar from "./NavigationBar/MainNavbar";
import ContactIcon from "../ContactIcon";
import Hero from "./Hero/Hero";


function App(){
    return (
        <>
        <div className="container-fluid main-wraper">
        <Social />
        <Hero /> 
        <MainNavbar />
        <ContactIcon className="contact-icon-container" id="contact-icon-2"/>
        </div>
        <div ><Contact /></div>
        </>
        
    );
};

export default App;