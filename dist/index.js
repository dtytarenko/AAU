
$(document).ready(function() {
    $( ".menu-burger" ).click(function() {
        $( ".menu-block-left, .menu-block-right").slideToggle( "slow");
        // $('.menu').css('display', 'flex');

        // $('.menu').css('z-index', '4');
        // if(window.innerWidth >= 321) {
        //     $('.overlay').slideToggle("slow");
        // } // it`s for delete overlay for mobile-width
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        }
    });
});

$(document).ready(function () {
    $('.intro-slider').slick({
        dots: true,
        dotsClass: "intro-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});



$(document).ready(function () {
    $('.js-partners-slider').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
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
            slidesToScroll: 1
            }
        }
    ]
    });
});


$(document).ready(function () {
    $('.event-link__slider-js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true, 
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1250,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }]
    });
})
