import React from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";


function Form(props){
    return (
        <form className="form-group" id={props.id} action={props.action} method={props.method}>
        <Input placeholder="Name..." className="form-control" name=""/>
        <Input placeholder="Subject..." className="form-control" name=""/>
        <TextArea placeholder="Message..." className="message form-control" name="message"/>
        <SubmitButton
          className="btn btn-light"
          id="submit-form"
          name="submit-form"
          text="Give Shout"
          />
      </form>
      )
};

export default Form;