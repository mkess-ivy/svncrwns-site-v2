$(document).ready(function(){

    // Overlay Menu (#overlay-menu for r6 design)
    $("#phase1-overlay-menu").click(function() {
        $(".overlay").addClass("overlay-open");
        $("body").addClass("noScroll");
        $(".phase1-btn").hide();
    });

    // (#overlay-close for r6 design)
    $(".phase1-overlay-close").click(function() {
        $(".overlay").removeClass("overlay-open");
        $("body").removeClass("noScroll");
        $(".phase1-btn").show();
    });

    // Wait for window load
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });

    // Phase 1 Hidden Work Hover Feature
    $(".js-background-trigger").hover(function(){
        $(".phase1-js-background-receiver", this).addClass('hover');
    }
    ,
    function(){
        $(".phase1-js-background-receiver", this).removeClass('hover');
    });
});
