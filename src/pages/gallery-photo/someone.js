$('.portfolio-slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    
  });
  
  
  $('.portfolio-slides').slickLightbox({
    itemSelector        : 'a',
    navigateByKeyboard  : true,
    asNavFor: '.slider-nav'
  });