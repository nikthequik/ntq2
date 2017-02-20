$(function() {
    console.log($(window).width());

    $(window).scroll(function() {
        $(".collapse").collapse("hide");
    });

    $(".nav-link").click(function() {
        $(".collapse").collapse("hide");
    });

    $(".navbar-brand").click(function() {
        $(".collapse").collapse("hide");
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
