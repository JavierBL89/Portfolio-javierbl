import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import Social from "./Social/Social";
import Contact from "./Contact/Contact";
import MainNavbar from "./NavigationBar/MainNavbar";
import SecondNavbar from "./NavigationBar/SecondNavbar";

function App(){
    return (
        <>
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
           <MainNavbar />
        </div>
        {/* <div ><Contact /></div> */}
        </>
        
    );
};

export default App;