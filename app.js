$(function() {
    console.log($(window).width());

    /* Mobile Nav Collapse */

    $(window).scroll(function() {
        $(".collapse").collapse("hide");
    });

    $(".nav-link a").click(function() {
        $(".collapse").collapse("hide");
    });

    $(".navbar-brand").click(function() {
        $(".collapse").collapse("hide");
    });

    /* Smooth Scrolling */

    $('a[href*="#"]:not([href="#project-carousel"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            console.log(this.hash);
            if (this.hash === "") {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
                return false;
            }
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
}); //END
