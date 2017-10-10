$(document).ready(function() {
	
  // SVNCRWNS Slider
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

  $('.slide-slider').slick({
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 500,
    cssEase: 'linear'
  });

  $('.slider-for-film-slick').slick({
    speed: 1000,
    arrows: true,
    nextArrow: '<div class="slick-next"></div>',
    prevArrow: '<div class="slick-prev"></div>',
    cssEase: 'linear'
  });

});