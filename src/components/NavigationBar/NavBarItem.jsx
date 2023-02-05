import React from "react";

/** Navbar items Coomponent */
function NavBarItem(props){

    /** Function to pass in the selected section when 
     * clicked to showSection() */
    function handleClick(e) {
        props.showSection(e);
    };

    return(
            <div onClick={handleClick} className="navbar-item-box">
                <a href={props.link}><p className={props.className} id={props.id}>{props.text}</p></a>
            </div>
        
    );
};

export default NavBarItem;