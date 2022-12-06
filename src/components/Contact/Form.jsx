import React, { useRef } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";

import emailjs from '@emailjs/browser';
import {contactSucceeded, contactFailed} from "../../scripts/email";

function Form(props){

  const form = useRef();


  const contact = async (e) => {
    e.preventDefault();
    const feedback = document.getElementById("feedback-container");
    feedback.innerHTML = `<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
  sendEmail(e);
};

  const sendEmail = (e) => {
    emailjs.sendForm("service_jfve60n", "template_4e5hfpl", form.current, 'OZrs4ez3UyYpOI5wC')
    .then((result) => {
          console.log(result.text);
          console.log(result);
          if(result.status === 200){
            console.log("puta");
            contactSucceeded();
          }else{
            contactFailed();
          }
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <form ref={form} onSubmit={contact} className="form-group" id={props.id} action={props.action} method={props.method}>
        <Input placeholder="Name..." className="form-control" id="name" name="from_name"/>
        <Input placeholder="Subject..." className="form-control" id="subject" name="subject"/>
        <TextArea placeholder="Message..." className="message form-control" id="message" name="message"/>
        <div className="feedback-container" id="feedback-container">
            <SubmitButton
              className="btn btn-light"
              id="submit-form"
              name="submit-form"
              text="Give Shout"
              />
            </div>
      </form>
      )
};

export default Form;
