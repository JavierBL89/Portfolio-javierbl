jQuery(($) =>{

    setInterval( () =>{
        const line1 = $(".line1-heading").css("visibility", "visible");
        const line2 = $(".line2-heading").css("visibility", "visible");
        const separator = $(".separator").css("visibility", "visible");
        const img = $(".img-container").css("visibility", "visible");
        const line4 = $(".profesion").css("visibility", "visible");
        const line5 = $(".subject").css("visibility", "visible");
    }, 600);

    setInterval( () =>{
        const quote = $(".quote-wraper").css("display", "block");
    }, 1100);

});