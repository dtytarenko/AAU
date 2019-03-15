$('.slider__preview').slick({
  arrows: false,
  asNavFor: '.slider__nav',
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 300
});

  $('.slider__nav').slick({
    arrows: true,
    asNavFor: '.slider__preview',
    dots: false,
    focusOnSelect: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    speed: 0,
    swipe: false,
    vertical: true
  });


$(document).ready(function() {
  $('.photo__slider-wrap').click(function() {
      $(this).addClass('active');
      $('.overlay-main').slideUp("slow");
  });
});