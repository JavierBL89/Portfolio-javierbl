import React from "react";
import LinkedlinIcon from "./LinkedlinIcon";
import GithubIcon from "./GithubIcon";
import FacebookIcon from "./FacebookIcon";


function Social(){
    return(
        <div className="container-fluid social-wraper">
            <div className="container-fluid social-container">
                  <LinkedlinIcon link="https://www.linkedin.com/in/javier-bastande-198022189/"/>
                  <GithubIcon link="https://github.com/JavierBL89"/>
                  <FacebookIcon link="https://www.facebook.com/JavierBastandeLeon"/>
            </div>
        </div>
    );
};

export default Social;