jQuery(($) => {
    
        const contactIcon = $(".contact-icon-container img");
        const contactForm = document.getElementById("contact-form");
        const feedbackContainer = document.getElementById("feedback-container");

        for(let icon of contactIcon){
            icon.addEventListener("click", function (){
                $("#modal-contact").fadeIn("slow").css("display", "block");
                // Reset form initial values and submit button
                feedbackContainer.innerHTML = `<button 
                                        type="submit"
                                        class="btn btn-light"
                                        id="submit-form"
                                        name="submit-form">
                                        Give Shout
                                        </button>
                                        `;
               contactForm.reset();
            });
        }
        
        // Close contact modal on click
        const closeForm = $("#close");
        closeForm.on("click", function(){
            $("#modal-contact").fadeOut("slow").css("display", "none");
        })

});