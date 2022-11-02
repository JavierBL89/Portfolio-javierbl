import React from "react";
import LinkedlinIcon from "./LinkedlinIcon";
import GithubIcon from "./GithubIcon";
import FacebookIcon from "./FacebookIcon";


function Social(){
    return(
        <div className="container-fluid social-wraper">
            <div className="container-fluid social-container">
                <LinkedlinIcon />
                <GithubIcon />
                <FacebookIcon />
            </div>
        </div>
    );
};

export default Social;