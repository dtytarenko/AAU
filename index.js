$(document).ready(function() {

    $('.intro-slider').slick({
        dots: true,
        dotsClass: "intro-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand'
    });
    $('.event-link__slider-js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 1500,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 1300,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
            }
        }
    ]
    });
});