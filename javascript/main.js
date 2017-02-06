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

  // Hover Menu, show word 'menu'
  // $('.menuButton').hover(
  //     function(){$(this).addClass('menu-text');}
  //   )

    // var iframe = $('#video')[0];
    // var videoFullscreen = document.getElementById("video-fullscreen");
    
    // $('.play').click(function(){
    //   if (iframe.requestFullscreen) {
    //       iframe.requestFullscreen();
    //   }
    //   else if (iframe.msRequestFullscreen) {
    //       iframe.msRequestFullscreen();
    //   }
    //   else if (iframe.mozRequestFullScreen) {
    //       iframe.mozRequestFullScreen();
    //   }
    //   else if (iframe.webkitRequestFullScreen) {
    //       iframe.webkitRequestFullScreen();
    //   }
    // }
    // })

  
});