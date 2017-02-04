$(document).ready(function(){
  
  // Smooth Scroll
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });

  // Overlay Menu
  $("#overlay-menu").click(function() {
    $(".overlay").addClass("overlay-open");
    $("body").addClass("noScroll");
  });

  $(".overlay-close").click(function() {
    $(".overlay").removeClass("overlay-open");
    $("body").removeClass("noScroll");
  });

  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

  
});