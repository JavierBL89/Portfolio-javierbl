import React from "react";
import H3 from "../H3";


function Hobbies(){
    return (
        <div className="container-fluid hobbies-wraper" id="hobbies-wraper">
            <div className="container-fluid hobbies-container text-center" id="hobbies-container">
                <div className="row">
                <div className="hobbies-title-container">
                  <H3 className="hobbies-title text-start" text="I enjoy..."/>

                </div>
                    <div className="col-6 col-lg-4">
                        <div className="row">
                            <div className="col">
                            <img src="https://img.icons8.com/external-filled-outline-icons-maxicons/55/null/external-guitar-summer-holiday-filled-outline-filled-outline-icons-maxicons.png" alt="guitar-playing"/>                                                        </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <img src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/55/null/external-Tennis-entertainment-and-hobbies-smashingstocks-flat-smashing-stocks.png" alt="playing-tennis"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg-4">
                        <div className="row">
                            <div className="col">
                            <img src="https://img.icons8.com/external-flat-lima-studio/60/null/external-gym-hotel-flat-lima-studio.png" alt="working-out"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                            <img src="https://img.icons8.com/bubbles/65/null/literature.png" alt="reading-books"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="row">
                            <div className="col-6 col-lg-4">
                            <img src="https://img.icons8.com/external-avoca-kerismaker/52/null/external-Coding-Laptop-software-development-avoca-kerismaker.png" alt="programming"/>
                            <p>
                            <i id="new-hobbie">(new hobbie)</i>
                            </p>
                            </div>
                            <div className="col-6 col-lg-4">
                            <img src="https://img.icons8.com/external-stickers-smashing-stocks/60/null/external-Learning-creativity-stickers-pack-stickers-smashing-stocks.png" alt="learning"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                            <div className="col-12 col-md-12 text-center personality-quote">
                               Definetly a cat person type.
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;