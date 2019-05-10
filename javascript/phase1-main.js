
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
                    slidesToShow: 2
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
    $('.journal-featured-slider').slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '80px',
        arrows: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
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
});


