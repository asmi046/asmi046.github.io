jQuery(document).ready(function ($) {

  $('.main-bnr .container').slick({
    dots: true,
    arrows: false
  });
  

  $('.tovar_slider').slick({
    prevArrow: '<div class="slider-arrow slider-bizi-prev"></div>',
    nextArrow: '<div class="slider-arrow slider-bizi-next"></div>',
    arrows: true,
    dots: true
  });


  $('.reviews-slider').slick({

    prevArrow: '<div class="slider-arrow slider-arrow-prev"></div>',
    nextArrow: '<div class="slider-arrow slider-arrow-next"></div>',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 1,
        }
    },
  ]
  });


  $('.hamburger').click(function () {
    $('.mob-menu').css('bottom', '0');
  });
  $('.close-menu').click(function () {
    $('.mob-menu').css('bottom', '140%');
  });
});
