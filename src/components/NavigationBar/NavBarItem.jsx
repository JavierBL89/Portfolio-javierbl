import React from "react";


function NavBarItem(props){
    return(
        <div className="navbar-item-box">
            <p className={props.className} id={props.id}>{props.text}</p>
        </div>
    );
};

export default NavBarItem;