$(function() {
    console.log($(window).width());

    $(".navbar-right li a").mouseover(function(){
        $(this).css({"opacity": "0.5"});
    });

    $(".navbar-right li a").mouseleave(function(){
        $(this).css({"opacity": "1"});
    });
});
