import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import Social from "./Social/Social";
import NavigationBar from "./NavigationBar/NavigationBar";
import Contact from "./Contact/Contact";

function App(){
    return (
        <>
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
           <NavigationBar />
        </div>
        {/* <div ><Contact /></div> */}
        </>
        
    );
};

export default App;