$(document).ready(function(){

    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
          $(".overlay").toggleClass("overlay-open");
        }, false);
      });
    }

    // Overlay Menu (#overlay-menu for r6 design)
    // $("#phase1-overlay-menu").click(function() {
    //     $(".overlay").addClass("overlay-open");
    //     $("body").addClass("noScroll");
    //     $(".phase1-btn").hide();
    // });

    // (#overlay-close for r6 design)
    // $(".phase1-overlay-close").click(function() {
    //     $(".overlay").removeClass("overlay-open");
    //     $("body").removeClass("noScroll");
    //     $(".phase1-btn").show();
    // });

    // Wait for window load
    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");;
    });

    $('a[href^="#top"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
    });

    // Phase 1 Background Hover
    $(".phase1-js-background-trigger").hover(function(){
        $(".phase1-js-background-receiver", this).addClass('hover');
    }
    ,
    function(){
        $(".phase1-js-background-receiver", this).removeClass('hover');
    });

    $('.phase1_slider').slick ({
        arrows:true,
        autoplay: true,
        prevArrow: '<img src="/assets/images/left_arrow.png" class="caret_slide left" />',
        nextArrow: '<img src="/assets/images/right_arrow.png" class="caret_slide right" />',
        fade:true,
        cssEase:'linear',
        dots: false,
        infinite:true
    });
    $('.phase1_slider_web').slick ({
        arrows:true,
        autoplay:true,
        prevArrow: '<img src="/assets/images/left_arrow.png" class="caret_slide_web left" />',
        nextArrow: '<img src="/assets/images/right_arrow.png" class="caret_slide_web right" />',
        fade:true,
        cssEase:'linear',
        dots: false,
        infinite:true
    });



    // $(".phase1-js-background-trigger").hover(function(){
    //     $(".half_cover", this).addClass('hover');
    // }
    // ,
    // function(){
    //     $(".half_cover", this).removeClass('hover');
    // });
});
