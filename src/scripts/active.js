import $ from "jquery"


/**
 * Function to active the section title selected by the user
 */
function active(section){

    const options = $("#secundary-navbar-container").children();
    
    const meSection = $("#me-section .me-container");
    const projectsSection = $("#projects-section .projects-container");
    const backgroundSection = $("#background-section .background-container");

    if(section.id === "me-link"){
        // hide sections
        projectsSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show selected section
        meSection.removeClass("hiden");
        // meSection.addClass("show");
       // active section title
        options[0].setAttribute("style", "border: none;");
        options[1].removeAttribute("style");
        options[2].removeAttribute("style");  

    }else if(section.id === "projects-link"){
        // hide sections
        meSection.addClass("hiden");
        meSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show selected section
        projectsSection.removeClass("hiden")
       // active section title
        options[0].removeAttribute("style");
        options[1].setAttribute("style", "border: none;");
        options[2].removeAttribute("style");

    }else if(section.id === "background-link"){
        // hide sections
        projectsSection.addClass("hiden");
        meSection.addClass("hiden");
       // show selected section
        backgroundSection.removeClass("hiden");
       // active section title
        options[0].removeAttribute("style");
        options[1].removeAttribute("style");
        options[2].setAttribute("style", "border: none;");

    };
    
};

export default active;