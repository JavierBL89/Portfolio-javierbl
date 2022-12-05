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

function App(){
    return (
        <>
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
           <MainNavbar />
           {/* <Me />
           <Projects />
           <Background /> */}
        </div>
        {/* <div ><Contact /></div> */}
        </>
        
    );
};

export default App;