import React, {useState } from "react";

function NavBarItem(props){

    
    function handleClick(e) {
        const section = props.id
        console.log(props.showSection(section));
    };

    return(
            <div onClick={handleClick} className="navbar-item-box">
                <p className={props.className} id={props.id}>{props.text}</p>
            </div>
        
    );
};

export default NavBarItem;