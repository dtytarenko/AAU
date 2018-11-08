$('.menu-btn').on('click', function (e) {
    $(this).toggleClass('opened')
    $('.bottom__nav').slideDown();
        if ($(this).hasClass('opened')) {
    $('.bottom__nav').slideDown();
    } else $('.bottom__nav').slideUp();
});
