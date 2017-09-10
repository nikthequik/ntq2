$(function() {

    /* Mobile Nav Collapse */
    var animate = true;
    $(window).scroll(function() {
        $('.collapse').collapse('hide');
        console.log($(window).scrollTop());
        
    });

    $('.nav-link a').click(function() {
        $('.collapse').collapse('hide');
    });

    $('.navbar-brand').click(function() {
        $('.collapse').collapse('hide');
    });

    $(window).scroll(function() {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= 700 && animate) {
            $('#clashmash h1').addClass('animated fadeInLeft');
        }
    });

    /* Smooth Scrolling */

    $('a[href*="#"]:not([href="#project-carousel"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (this.hash === '') {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            }

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                console.log(target.offset().top);
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    /* Prevent Jumping */

    var setHeight = function() {
        var vpht = $(window).height();
        $('#intro, #aboutme, #clashmash, #calculator, #vgquiz').height(vpht - 130);
        $('#aboutme, #clashmash, #calculator, #vgquiz').height(vpht - 30);
    }

    setHeight();
    

}); //END
