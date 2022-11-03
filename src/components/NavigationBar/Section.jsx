import React from "react";
import NavBarItem from "./NavBarItem";



function Section(){

    return(
        <section id="me">
            <div className="container-fluid section-wraper" >
                <div className="container-fluid section-container me-section">
                    <div className="container-fluid secondary-navbar-wraper" id="secondary-navbar">
                        <div className="container-fluid navbar-container">
                            <NavBarItem className="nav-item me-link" id="me-link" text="ME"/>
                            <NavBarItem className="nav-item projects-link" id="projects-link" text="PROJECTS"/>
                            <NavBarItem className="nav-item background-link" id="background-link" text="BACKGROUND"/>
                        </div>
    
                    </div>
                    <div className="section-content-container">
                        <p>Left my country 4 years ago in search of a better future.</p>
                        <p>During this time i have self tought the language of english, how to play guitar
                        and became a <strong>Junior Web Developer</strong> in this last 2 years.</p>

                        <div className="quote2-container ">
                           <h6>Determination and discipline is key for achieving goals</h6>
                           <p>My goal no is you hiring me</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section;