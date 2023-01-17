
jQuery(function($){

  setTimeout(function () {

    /**
     * Function to hide and show MAIN NAVBAR on scroll
     */
     const handleMainNavbar = function() {
      const sections1 = $("#main-navbar-container").children();
      var y = window.scrollY;
    // Show main navbar on scrollup
     for(let section of sections1){
        if (y > 400) {
          $(section).slideUp("slow")
        } else {
        //   myID.className = "cta hide"
        }
      }

    // Hide main navbar on scrollup
      for(let section of sections1){
        if (y < 400) {
          $(section).slideDown("slow")
        } else {
        //   myID.className = "cta hide"
        }
      };


      };
    
      /**
     * Function to Show and hide SECOND NAVBAR on scroll
     */
      const handleSecondNavbar = function() {
        const sections2 = $("#secundary-navbar-container").children();
        var y = window.scrollY;

      // Show second navbar on scrolldown
       for(let section of sections2){
          if (y > 400) {
            $(section).slideDown("slow");
            $("#contact-icon-2").css("display", "block").attr("class", "animate__animated animate__slideInDown");
            $("#contact-icon-1").fadeOut("slow")
            activeSection();
          } else {
          //   myID.className = "cta hide"
          }
        }

      // Hide second navbar on scrollup
        for(let section of sections2){
          if (y < 400) {
            $(section).slideUp("slow");
            $("#contact-icon-1").slideDown("slow");
            $("#contact-icon-2").css("display", "none").fadeOut("slow");
          } else {
          //   myID.className = "cta hide"
          }

        }


      }

  /**
   * Function to active section title
   */
     function activeSection(){
      const sections2 = $("#secundary-navbar-container").children();
        var location = window.location.toString();
        var url = location.split("/")[3];
            if(url === "#me-section"){
                $(sections2[0]).addClass("puta")
                $(sections2[0]).css("border", "none");

            }else if(url === "#projects-section"){
                $(sections2[1]).css("border", "none");
            }else if(url === "#background-section"){
                $(sections2[2]).css("border", "none");
            }


    };
    window.addEventListener("scroll", handleMainNavbar);
    window.addEventListener("scroll", handleSecondNavbar);
    


}, 250);

});
  
  

  