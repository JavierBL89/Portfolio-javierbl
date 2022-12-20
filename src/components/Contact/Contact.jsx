import React from "react";
import H1 from "../H1";
import H3 from "../H3";
import Form from "./Form";


function Contact(){


    return(
        <section id="contact">
          <div className="modal-contact" id="modal-contact">
            <div className="container-fluid g-0 contact-wraper" id="contact-wraper">
                 <div className="close-container"> <i id="close" className="fa-solid fa-xmark"></i></div>
                <div className="container-fluid contact-container text-center">
                <img src="https://img.icons8.com/clouds/80/null/add-message.png" alt="send-mesage"/>
                <H3 className="mb-5" text="Give me a shout!"/>
                <Form id="contact-form" action="#" method="GET"/>
                </div>
            </div>
          </div>
        </section>
    )
};

export default Contact;