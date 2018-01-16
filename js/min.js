$(function () {
    'use strict';
    var navbarT = $(".navbar").innerHeight();
    $(".slide2").height($(window).height() - navbarT);
    // fatured 
    $(".feature-work ul li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md-3').css('opacity', 1);
        } else {
            $('.shuffle-imgs .col-md-3').css('opacity', 0.09);
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });

});