import React from "react";
import Heading from "./Heading";
import Course from "./Course";
import Contact from "../Contact/Contact";
import SecondNavbar from "../NavigationBar/SecondNavbar";


function Background(){
    return (
        <section id="background-section">

                    <div className="container-fluid background-wraper " id="background-wraper">
                        <div className="container-fluid background-container hiden" id="background-container">
                            <Heading className="background-heading" text="IT"/>
                            <Course />
                            <Course />
                            <div className="dots d-flex text-start">
                               <div className="dot"></div>
                               <div className="dot"></div>
                               <div className="dot"></div>
                            </div>
                            <Heading className="background-heading" text="Hospitality Industry"/>
                            
                            <div className="hospitality-container-wraper">
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
                                <p className="me-5">I am now changing career as i always wanted, and <em>building software solutions </em>
                                  is want to do.</p>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default Background;