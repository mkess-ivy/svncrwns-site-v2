$(document).ready(function ($) {

  $("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(4500)
    .end()
    .appendTo('#slideshow');
},  6000);

}); 