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

  // Background Video
  var banner = document.querySelector('.banner');
  var bannerVideo = document.querySelector('.banner__video');

  if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    banner.style.backgroundImage = 'url("' + bannerVideo.poster + '")';
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    bannerVideo.style.display = 'none';
  }

  


  // Catalog Page - remove classes to get desired desktop view
  // Pseudocode

  // if the screen size equals tablet
  // find #photo5, remove .catalog_photo-group, add .catalog_photo-5
  // find #photo6, remove .catalog_photo-group2, add .catalog_photo-6
  if (window.matchMedia("(min-width: 700px)").matches) {
    $("#js-photo5").removeClass('catalog_photo-group');
    $("#js-photo5").addClass('catalog_photo-5');
    $("#js-photo6").removeClass('catalog_photo-group-2');
    $("#js-photo6").removeClass('catalog_photo-group');
    $("#js-photo6").addClass('catalog_photo-6');
    $("#js-photo7").removeClass('catalog_photo-group');
    $("#js-photo7").addClass('catalog_photo-7');
  } 
  else {
    $("#js-photo5").removeClass('catalog_photo-5');
    $("#js-photo5").addClass('catalog_photo-group');
    $("#js-photo6").removeClass('catalog_photo-6');
    $("#js-photo6").addClass('catalog_photo-group');
    $("#js-photo6").addClass('catalog_photo-group-2');
    $("#js-photo7").removeClass('catalog_photo-7');
    $("#js-photo7").addClass('catalog_photo-group');
  }

  // Reveal Back to top icon after certain scroll height
  $('#js-backtop').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#js-backtop').fadeIn("slow");
    }
    else {
      $('#js-backtop').fadeOut("fast");
    }
  });


  // Scroll Reveal Class
  window.sr = ScrollReveal();
  sr.reveal('.foo', { duration: 500, opacity: 0.1 });

});