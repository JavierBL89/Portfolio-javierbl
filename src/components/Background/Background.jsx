import React from "react";
import Heading from "./Heading";
import Course from "./Course";


function Background(){
    return (
        <section id="background-section">
            <div className="container-fluid background-wraper" id="background-wraper">
                <div className="container-fluid background-container" id="background-container">
                    <Heading className="background-heading" text="IT"/>
                    <Course />
                    <Course />
                    <div className="separator"></div>
                    <Heading className="background-heading mb-4" text="Hospitality Industry"/>
                    <p>
                        I got my very first job in a Restaurant at the age of 16,
                        right after graduating in Secundary School.
                    </p>
                    <p>Since then i have worked in many restaurants on the front house,
                    achieving to be Assistant Manager in 2 ocassions starting as a waiter.
                    Currently i work part-time
                    in <a href="https://www.onepico.com/" target="blank" id="one-pico">One Pico Restaurant</a>
                    , Dublin.
                    </p>
                    <p>I am changing career as i always wanted to do, and bringing software solutions
                    to people is want to do.</p>
                </div>
            </div>
        </section>

    
    );
};

export default Background;