import React from "react";

/** 
 * Heading component to display Hero text
 */
function Heading(){
    return (
        <div className="container-fluid heading-wraper">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-12 col-lg-6 heading-container">
                    <p className="line1-heading">Hey</p>
                    <p className="line2-heading">I'm Javier</p>
                    <div className="separator"></div>
                    <h1 className="profesion"><span className="junior">Junior</span> WEB DEVELOPER</h1>
                    <h2 className="subject">FULL STACK</h2>
                </div> 
                <div className="col-12 col-lg-6">
                   <div className="img-container">
                   </div>
                </div>
              </div>
                
            </div>
        </div>
    );
};

export default Heading;