import $ from "jquery"


function show(section){
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

    }else if(section.id === "projects-link"){
        // hide sections
        meSection.addClass("hiden");
        backgroundSection.addClass("hiden");
       // show and scroll to selected section
        projectsSection.removeClass("hiden");
        document.getElementById('projects-section').scrollIntoView();

    }else if(section.id === "background-link"){
        // hide sections
        projectsSection.addClass("hiden");
        meSection.addClass("hiden");
       // show and scroll to selected section
        backgroundSection.removeClass("hiden");
        document.getElementById('background-section').scrollIntoView();
    };
    },50);

    };

    export default show;

