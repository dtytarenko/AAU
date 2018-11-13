$(document).ready(function () {


    $('.intro__slide-item').slick();

    // var header = $(".header");
    // var closeBtnContainer = $('.close-btn-container');

    // $(window).on('scroll', function () { 
    //     if ($(this).scrollTop() > 50) {
    //         header.addClass('fixed')
    //         closeBtnContainer.addClass('scrolled')
    //     }
    //     else {
    //         header.removeClass('fixed')
    //         closeBtnContainer.removeClass('scrolled')
    //     }
    // });

    // $("#lang-list > ul > li > a").click(function() {
    //     $(this).find("~ ul").stop().slideToggle("slov");
    // });
    
    
    

    // $('.js-partners-slider').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: false,
    //     speed: 700,
    //     // prevArrow: $('.js-prev-arr'),
    //     // nextArrow: $('.js-next-arr'),
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     slidesToShow: 6,
    //     slidesToScroll: 6,
    //     responsive: [
    //         {
    //             breakpoint: 1025,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // });

    // $('.js-event-link-slider').slick({
    //     arrows: false,
    //     dots: true,
    //     infinite: false,
    //     speed: 700,
    //     // prevArrow: $('.js-prev-arr'),
    //     // nextArrow: $('.js-next-arr'),
    //     autoplay: true,
    //     autoplaySpeed: 6000,
    //     slidesToShow: 8,
    //     slidesToScroll: 8,
    //     responsive: [
    //         {
    //             breakpoint: 1441,
    //             settings: {
    //                 slidesToShow: 6,
    //                 slidesToScroll: 6
    //             }
    //         },
    //         {
    //             breakpoint: 1025,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 4
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2
    //             }
    //         }
    //     ]
    // });


    // $('.zoom-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     closeOnContentClick: false,
    //     closeBtnInside: false,
    //     mainClass: 'mfp-with-zoom mfp-img-mobile',
    //     image: {
    //         verticalFit: true,
    //         titleSrc: function(item) {
    //             return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
    //         }
    //     },
    //     gallery: {
    //         enabled: true
    //     },
    //     zoom: {
    //         enabled: true,
    //         duration: 300,
    //         opener: function(element) {
    //             return element.find('img');
    //         }
    //     }
    // });





    // $('.popup-youtube').magnificPopup({
    //     disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false
    // });

    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     var target = $(this).attr('href');
    //     $(target).velocity('scroll', {
    //         duration: 1500,
    //         offset: -70,
    //         easing: 'ease-in-out'
    //     });
    // });
})