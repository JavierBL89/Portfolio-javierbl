import React from "react";
import Hobbies from "../Hobbies/Hobbies";

/** This component holds Me section content */
function Me(){
    return (
            <section id="me-section" >
                    <div className="container-fluid me-container" id="me-container">
                        <div className="section-content-container">
                            <p>My adventure in Ireland started early in 2019. I left home in pursuit of a better future, and growing as a person.</p>
                            <p>During this time I have self taught the language of English, how to play guitar,
                            and became a <strong>Junior Web Developer</strong> in these last 2 years.</p>

                            <p>The Pandemic was a turning point in my life as well, and I certanly made the most of the time out of it.</p>

                            <p>I now combine a part time job with a part time course in IT to keep learning, and enhancing my developer skills.</p>
            
                            <div className="quote2-container ">
                               <h6>Determination and discipline is key for achieving goals</h6>
                            </div>
                            
                        </div>
                        <Hobbies/>
                    </div>
            </section>
    );
};

export default Me;