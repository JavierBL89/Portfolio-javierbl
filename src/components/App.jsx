import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import Social from "./Social/Social";
import Contact from "./Contact/Contact";
import MainNavbar from "./NavigationBar/MainNavbar";
import SecondNavbar from "./NavigationBar/SecondNavbar";
import Me from "./Me/Me";
import Projects from "./Projects/Projects";
import Background from "./Background/Background";
import ContactIcon from "../ContactIcon";

function App(){
    return (
        <>
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
           <ContactIcon className="contact-icon-container" id="contact-icon-1"/>
           <ContactIcon className="contact-icon-container" id="contact-icon-2"/>
           <MainNavbar />
           {/* <Contact /> */}
        </div>
        <div ><Contact /></div>
        </>
        
    );
};

export default App;