$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scrollin');
    } else {
        $('nav').removeClass('scrollin');
    }
});

$(window).load(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('scrollin');
    } else {
        $('nav').removeClass('scrollin');
    }
});

$( ".question" ).click(function() {
  $( this ).toggleClass( "open" );
});

$(document).ready(function() {
    $('.flexslider-featureslider').flexslider({
        animation: "slide",
        //                controlNav: "thumbnails",
        controlsContainer: $(".flex-control-nav"),
        customDirectionNav: $(".flex-control-nav a"),
        manualControls: ".flex-control-nav li",
        useCSS: false,
        start: function() {
            var height = $('body > section.featureslider > div.flexslider-controls').height();
            $('body > section.featureslider > div.flexslider-controls').css('margin-top', -height - 20);
            console.log(height);
        }
    });
});

$(document).ready(function() {
    $('.testimonials-flex').flexslider({
        animation: "slide",
        //                controlNav: "thumbnails",
        controlsContainer: $(".testimonial-control-nav"),
        customDirectionNav: $(".testimonial-control-nav a"),
        manualControls: ".testimonial-control-nav li",
        useCSS: false,
        start: function() {}
    });
});

$(document).ready(function() {
    (function() {

        // store the slider in a local variable
        var $window = $(window),
            flexslider;

        // tiny helper function to add breakpoints
        function getGridSize() {
            return (window.innerWidth < 600) ? 2 :
                (window.innerWidth < 900) ? 3 : 5;
        }

        $(function() {
            SyntaxHighlighter.all();
        });

        $window.load(function() {
            $('.support-banners').flexslider({
                animation: "slide",
                animationLoop: true,
                itemWidth: 210,
                itemMargin: 5,
                minItems: getGridSize(), // use function to pull in initial value
                maxItems: getGridSize() // use function to pull in initial value
            });
        });

        // check grid size on resize event
        $window.resize(function() {
            var gridSize = getGridSize();

            flexslider.vars.minItems = gridSize;
            flexslider.vars.maxItems = gridSize;
        });
    }());
});

 function youtubeResize() {
      $.each($('.embedded-video iframe'), function(){
        $(this).css('height', ($(this).width())*0.62);    //16:9 & padding
      });
    };

  $(window).bind('resize', function() { youtubeResize(); });
  $(document).ready(function(){ youtubeResize(); });