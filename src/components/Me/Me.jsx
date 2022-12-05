import React from "react";
import Hobbies from "../Hobbies/Hobbies";
import SecondNavbar from "../NavigationBar/SecondNavbar";


function Me(){
    return (
            <section id="me-section" >
                {/* <div className="container-fluid section-wraper">
                    <div className="container-fluid section-container"> */}
                    {/* <SecondNavbar /> */}

                    <div className="container-fluid me-container hiden" id="me-container">
                        <div className="section-content-container">
                            <p>Left my country 4 years ago in search of a better future.</p>
                            <p>During this time i have self tought the language of english, how to play guitar,
                            and became a <strong>Junior Web Developer</strong> in this last 2 years.</p>
            
                            <div className="quote2-container ">
                               <h6>Determination and discipline is key for achieving goals</h6>
                            </div>
                            
                        </div>
                        <Hobbies/>
                    </div>
                {/* </div>
                </div> */}
            </section>
    );
};

export default Me;