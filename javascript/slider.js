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

  // Partner Slider
  $('.partner-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    dots: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  });

  $('.comingsoon-hero').slick({
    infinite: true,
    autoplay: true,
    dots: false,
    arrows: false,
    speed: 500,
    fade: true
  });

});