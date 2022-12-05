import React, { useState } from "react";
import SecondNavbar from "./NavigationBar/SecondNavbar";
import Me from "./Me/Me";
import Background from "./Background/Background";
import Projects from "./Projects/Projects";

function Section (props){

  // const [me, setMe] = useState(false);
  // const [projects, setProjects] = useState(false);
  // const [background, setbackground] = useState(false);

  // function show(puta){

  //   if(puta === "me-link"){
  //     console.log("ttt");
  //     setMe(true)
  //     setProjects(!true)
  //     setbackground(!true)
      
  // }else if(props.choice === "projects-link"){
  //     setMe(false)
  //     setProjects(!true)
  //     setbackground(false)
  // }else if(props.choice === "background-link"){
  //     setMe(false)
  //     setProjects(false)
  //     setbackground(!true)
  // };

  // };

    
    return (
            <div className="container-fluid section-wraper" >
                <div className="container-fluid section-container">
                  <SecondNavbar/>
                <Me/>
                <Projects/>
                <Background/>
                </div>
                
            </div>
    );
};

export default Section;