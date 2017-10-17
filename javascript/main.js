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
  // - if the screen size equals tablet
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

  // Reveal logo after certain scroll height
  $('#js-menu').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#js-menu').fadeIn("slow");
    }
    else {
      $('#js-menu').fadeOut("fast");
    }
  });

  // Reveal mobile menu after certain scroll height
  $('#js-home-top').hide();
  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      $('#js-home-top').fadeIn("slow");
    }
    else {
      $('#js-home-top').fadeOut("fast");
    }
  });
  
  // Catalog Hover Feature
  $(".js-background-trigger").hover(function(){
   $(".js-background-receiver", this).addClass('hover');
  }
  , 
  function(){
     $(".js-background-receiver", this).removeClass('hover');
  });

  // Menu Close
  $('#nav-icon1').click(function(){
    $(this).toggleClass('open');
    $('.overlay').toggleClass('overlay-open');
    $('body').toggleClass('noScroll');
  });

  // Slider
  $('.svn-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    nextArrow: '<div class="slick-next"></div>',
    prevArrow: '<div class="slick-prev"></div>'
  });

// Design System Menu
var $side_menu_trigger = $('#nav-trigger'),
  $content_wrapper = $('.main-content'),
  $navigation = $('.fly-in');

//open-close lateral menu clicking on the menu icon
$side_menu_trigger.on('click', function(event) {
  event.preventDefault();

  $side_menu_trigger.toggleClass('is-clicked');
  $navigation.toggleClass('menu-open');
  $content_wrapper.toggleClass('menu-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    $('body').toggleClass('overflow-hidden');
  });
  $('#side-nav').toggleClass('menu-open');

  //check if transitions are not supported - i.e. in IE9
  if ($('html').hasClass('no-csstransitions')) {
    $('body').toggleClass('overflow-hidden');
  }
});

//close lateral menu clicking outside the menu itself
// $content_wrapper.on('click', function(event) {
//   if (!$(event.target).is('#menu-trigger, #menu-trigger span')) {
//     $side_menu_trigger.removeClass('is-clicked');
//     $navigation.removeClass('menu-open');
//     $content_wrapper.removeClass('menu-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
//       $('body').removeClass('overflow-hidden');
//     });
//     $('#side-nav').removeClass('menu-open');
//     //check if transitions are not supported
//     if ($('html').hasClass('no-csstransitions')) {
//       $('body').removeClass('overflow-hidden');
//     }

//   }
// });

//open (or close) submenu items in the lateral menu. Close all the other open submenu items.
// $('.item-has-children').children('.js-link').on('click', function(event) {
  // event.preventDefault();
  // $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('.js-link').removeClass('submenu-open').next('.sub-menu').slideUp(200);
//   $(this).toggleClass('submenu-open');
// });

$('.corn').click( function () {
  $('#side-nav .corn-sub').toggleClass('submenu-open');
});
$('.tomato').click( function () {
  $('#side-nav .tomato-sub').toggleClass('submenu-open');
});
    
  
});