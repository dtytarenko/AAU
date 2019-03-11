$(document).ready(function() {
    $( '#for-attorney, #not-attorney' ).click(function() {
        $( '.overlay-main, .popup__attorney').slideToggle('fast');
    });
    $('.popup-close, #overlay-join-aau').click(function() {
        $('.overlay-main, .popup-wrap').slideToggle('fast');
    });

});

$(document).ready(function() {
    $('.vote__list-btn').click(function() {
        $('.overlay-main, .popup__vote').slideToggle('fast');
    });

    $('#popup-сlose, .overlay-main').click(function() {
        $('.overlay-main, .popup__vote').slideToggle('fast');
    });
});
