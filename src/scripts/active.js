import $ from "jquery"


/**
 * Function to active the section title selected by the user
 */
function active(section){

    const options = $("#secundary-navbar-container > .row").children();
    
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
        options[0].setAttribute("style", "font-weight: 600");
        options[1].setAttribute("style", "font-weight: 400");;
        options[2].setAttribute("style", "font-weight: 400");;  

    }else if(section.id === "projects-link"){
        // hide sections
        meSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show selected section
        projectsSection.removeClass("hiden")
       // active section title
        options[0].setAttribute("style", "font-weight: 400");
        options[1].setAttribute("style", "font-weight: 600");
        options[2].setAttribute("style", "font-weight: 400");

    }else if(section.id === "background-link"){
        // hide sections
        projectsSection.addClass("hiden");
        meSection.addClass("hiden");
       // show selected section
        backgroundSection.removeClass("hiden");
       // active section title
        options[0].setAttribute("style", "font-weight: 400");
        options[1].setAttribute("style", "font-weight: 400");
        options[2].setAttribute("style", "font-weight: 600");

    };
    
};

export default active;