jQuery(($) => {

    // function contact(){
        
        const contactIcon = $(".contact-icon-container img");

        for(let icon of contactIcon){
            icon.addEventListener("click", function (){
                // $("#contact-wraper").fadeIn("slow").addClass("modal");
                console.log("E");
                $("#modal-contact").fadeIn("slow").css("display", "block");
                // $("#contact-icon-2").animate({left: "100px";});
                // puta();
            });
        }

    // function puta (){
        const closeForm = $("#close");

        closeForm.on("click", function(){
            $("#modal-contact").fadeOut("slow").css("display", "none");
        })
    // }
        
        
    // };
});