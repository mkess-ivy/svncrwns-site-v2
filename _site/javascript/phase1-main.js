// jQuery components
// Waypoints
    var $dipper = $('.dipper');
    $dipper.waypoint(function (direction) {
        if (direction == 'down') {
            $('.dipper-alert').addClass('js-dipper-animate');
        } else {
            $('.dipper-alert').removeClass('js-dipper-animate');
        }
    }, {offset: '90%'});

    var $goSlow = $('.goSlow');
    $goSlow.waypoint(function (direction) {
        if (direction == 'down') {
            $goSlow.addClass('js-goslow');
        } else {
            $goSlow.removeClass('js-goslow');
        }
    }, {offset: '30%'});

    var $workFade =  $('.workFade');
    $workFade.waypoint(function (direction) {
        if (direction == 'down') {
            $workFade.addClass('fadeIn');
        } else {
            $workFade.removeClass('fadeIn');
        }
    }, {offset: '20%'});

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

    // Hover Feature
    $('.js_hover_trigger').hover(function(){
        $('.js_bg_receiver_work', this).addClass('hover');
    },function(){
        $('.js_bg_receiver_work', this).removeClass('hover');
    });

    // Hover Feature - Pagination
    $('.js_hover_trigger2').hover(function(){
        $('.js_bg_receiver_work2', this).addClass('hover');
    },function(){
        $('.js_bg_receiver_work2', this).removeClass('hover');
    });

    // Hover Feature - Pagination
    $('.js_hover_trigger_backstage').hover(function(){
        $('.js_bg_receiver_work_backstage', this).addClass('hover');
    },function(){
        $('.js_bg_receiver_work_backstage', this).removeClass('hover');
    });

    // Hover on Backstage Projects
    $('.js-baltimore').hover(function() {
        $('.js-backstage-img').addClass('baltimore');
    }, function() {
        $('.js-backstage-img').removeClass('baltimore');
    });

    $('.js-believing-takes-time').hover(function() {
        $('.js-backstage-img').addClass('believing-takes-time');
    }, function() {
        $('.js-backstage-img').removeClass('believing-takes-time');
    });

    $('.js-cityofgods').hover(function() {
        $('.js-backstage-img').addClass('cityofgods');
    }, function() {
        $('.js-backstage-img').removeClass('cityofgods');
    });

    $('.js-fambma').hover(function() {
        $('.js-backstage-img').addClass('fambma');
    }, function() {
        $('.js-backstage-img').removeClass('fambma');
    });

    $('.js-famwalters').hover(function() {
        $('.js-backstage-img').addClass('famwalters');
    }, function() {
        $('.js-backstage-img').removeClass('famwalters');
    });

    $('.js-humble').hover(function() {
        $('.js-backstage-img').addClass('humble');
    }, function() {
        $('.js-backstage-img').removeClass('humble');
    });

    $('.js-obk').hover(function() {
        $('.js-backstage-img').addClass('obk');
    }, function() {
        $('.js-backstage-img').removeClass('obk');
    });

    $('.js-renegade').hover(function() {
        $('.js-backstage-img').addClass('renegade');
    }, function() {
        $('.js-backstage-img').removeClass('renegade');
    });

    $('.js-warisover').hover(function() {
        $('.js-backstage-img').addClass('warisover');
    }, function() {
        $('.js-backstage-img').removeClass('warisover');
    });

    


    // Wait for window load
    $(window).load(function() {
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

    $(window).scroll(function() {
        if (jQuery('body').height() <= (jQuery(window).height() + jQuery(window).scrollTop())) {
            $('#followwidget').fadeOut("slow");
        }else{
            $("#followwidget").fadeIn("slow");
        }
    });

    // Accordion
    $(".accordion").on("click", ".accordion-header", function() {
        $(this).toggleClass("active").next().slideToggle();
    });
    
    // Sliders
    $('.phase1_slider').slick ({
        arrows:true,
        autoplay: true,
        prevArrow: '<img src="/dist/images/left_arrow.png" class="caret_slide left" />',
        nextArrow: '<img src="/dist/images/right_arrow.png" class="caret_slide right" />',
        fade:true,
        cssEase:'linear',
        dots: false,
        infinite:true
    });
    $('.phase1_slider_web').slick ({
        arrows:true,
        autoplay:true,
        prevArrow: '<img src="/dist/images/left_arrow.png" class="caret_slide_web left" />',
        nextArrow: '<img src="/dist/images/right_arrow.png" class="caret_slide_web right" />',
        fade:true,
        cssEase:'linear',
        dots: false,
        infinite:true
    });
    $('.myslide2').slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '60px',
        arrows: false,
        slidesToShow: 2,
        autoplaySpeed: 1,
        speed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    speed: 300,
                    autoplaySpeed: 3000,
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.journal-featured-slider').slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '80px',
        arrows: false,
        slidesToShow: 2,
        autoplaySpeed: 1,
        speed: 8000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.theme2020-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });

    // simpleLightbox
    $('.imageGallery1 a').simpleLightbox();

    // bottom menu
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    menuTop = document.getElementById( 'cbp-spmenu-s3' ),
    menuBottom = document.getElementById( 'cbp-spmenu-s4' ),
    showLeft = document.getElementById( 'showLeft' ),
    showRight = document.getElementById( 'showRight' ),
    showTop = document.getElementById( 'showTop' ),
    showBottom = document.getElementById( 'showBottom' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    showRightPush = document.getElementById( 'showRightPush' ),
    body = document.body;

showLeft.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeft' );
};
showRight.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
  disableOther( 'showRight' );
};
showTop.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuTop, 'cbp-spmenu-open' );
  disableOther( 'showTop' );
};
showBottom.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( menuBottom, 'cbp-spmenu-open' );
  disableOther( 'showBottom' );
};
showLeftPush.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( body, 'cbp-spmenu-push-toright' );
  classie.toggle( menuLeft, 'cbp-spmenu-open' );
  disableOther( 'showLeftPush' );
};
showRightPush.onclick = function() {
  classie.toggle( this, 'active' );
  classie.toggle( body, 'cbp-spmenu-push-toleft' );
  classie.toggle( menuRight, 'cbp-spmenu-open' );
  disableOther( 'showRightPush' );
};

function disableOther( button ) {
  if( button !== 'showLeft' ) {
    classie.toggle( showLeft, 'disabled' );
  }
  if( button !== 'showRight' ) {
    classie.toggle( showRight, 'disabled' );
  }
  if( button !== 'showTop' ) {
    classie.toggle( showTop, 'disabled' );
  }
  if( button !== 'showBottom' ) {
    classie.toggle( showBottom, 'disabled' );
  }
  if( button !== 'showLeftPush' ) {
    classie.toggle( showLeftPush, 'disabled' );
  }
  if( button !== 'showRightPush' ) {
    classie.toggle( showRightPush, 'disabled' );
  }
}

});


