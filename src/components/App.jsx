import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import Social from "./Social/Social";
import NavigationBar from "./NavigationBar/NavigationBar";

function App(){
    return (
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
           <NavigationBar />
        </div>
    );
};

export default App;