import React from "react";
import Heading from "./Heading";
import Quote from "./Quote";
import Social from "./Social/Social";

function App(){
    return (
        <div className="container-fluid main-wraper">
           <Social />
           <Heading />
           <Quote/>
        </div>
    );
};

export default App;