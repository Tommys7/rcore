$(document).ready(function(){

    $(document).on("scroll", function(){
        if
            ($(document).scrollTop() > 50){
                $(".header-wrap").addClass("shrink");
            }
        else
            {
                $(".header-wrap").removeClass("shrink");
            }
    })

    $(document).on("scroll", function(){
        if
            ($(document).scrollTop() > 50){
                $(".header-menu__logo").addClass("shrink-logo");
            }
        else
            {
                $(".header-menu__logo").removeClass("shrink-logo");
            }
    })



    $('.main-slider').slick({
      
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.main-slider__prevArrow'),
        nextArrow: $('.main-slider__nextArrow')
      });


});