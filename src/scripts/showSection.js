import $ from "jquery"

import active from "./active";


/**
 * Function to active the section title selected by the user
 */
function show(section){
    console.log(section);
  // setTimeout to get hold of the html elements when a section is selected
  setTimeout( () => {

  const meSection = $("#me-section .me-container");
  const projectsSection = $("#projects-section .projects-container");
  const backgroundSection = $("#background-section .background-container");

    if(section.id === "me-link"){
        // hide sections
        projectsSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show and scroll to selected section
        meSection.removeClass("hiden");
        document.getElementById('me-section').scrollIntoView();
        active(section);

    }else if(section.id === "projects-link"){
        // hide sections
        meSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show and scroll to selected section
        projectsSection.removeClass("hiden");
        document.getElementById('projects-section').scrollIntoView();
        active(section);

    }else if(section.id === "background-link"){
        // hide sections
        projectsSection.addClass("hiden");
        meSection.addClass("hiden");
       // show and scroll to selected section
        backgroundSection.removeClass("hiden");
        document.getElementById('background-section').scrollIntoView();
        active(section);

    };
    },40);

    };

    export default show;

