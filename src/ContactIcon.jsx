import React from "react";


function ContactIcon(props){

    return (
        <div className={props.className} id={props.id}>
            <button type="button" className="contact-icon-button g-0" id="contact-icon-button">
            <img id="puta" src="https://img.icons8.com/clouds/80/null/add-message.png" alt="send-mesage"/>

            </button>

        </div>
    );
};

export default ContactIcon;