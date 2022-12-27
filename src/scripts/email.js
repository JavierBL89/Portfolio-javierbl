//jshint:ES6
// alert("pp")

function contactSucceeded(){

    const feedback = document.getElementById("feedback-container");
    const closeForm = document.getElementById("modal-contact");
    const successMessage = `
            <p className="contact-success">
              Thanks very much!
            </p>
            <p>
              I'll get back to you shortly.
            </p>
        `;
    
    setTimeout(function(){
        feedback.innerHTML = successMessage;
    }, 0.700);
    
    setTimeout(function(){
        closeForm.setAttribute("style", "display: none;")
        // closeForm.setAttribute("class", "fadeOut")

    }, 2500);

};

function contactFailed(){

    const feedback = document.getElementById("feedback-container");
    const failedMessage = `<p className="">
            Oh no!.
            Something went wrong, try again later please.
            </p>`;
    
    setTimeout(function(){
        feedback.innerHTML = failedMessage;
    }, 0.700);

};

export {contactSucceeded};
export {contactFailed};