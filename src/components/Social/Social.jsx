import React from "react";
import LinkedlinIcon from "./LinkedlinIcon";
import GithubIcon from "./GithubIcon";
import FacebookIcon from "./FacebookIcon";


function Social(){
    return(
        <div className="container-fluid social-wraper">
            <div className="container-fluid social-container">
                <a href="https://www.linkedin.com/in/javier-bastande-198022189/" id="linkedin" target="_blank" rel="noreferrer">
                  <LinkedlinIcon />
                </a>
                <a href="https://github.com/JavierBL89" id="github" target="_blank" rel="noreferrer">
                  <GithubIcon />
                </a>
                <a href="https://www.facebook.com/JavierBastandeLeon" id="facebook" target="_blank" rel="noreferrer">
                  <FacebookIcon />
                </a>
            </div>
        </div>
    );
};

export default Social;