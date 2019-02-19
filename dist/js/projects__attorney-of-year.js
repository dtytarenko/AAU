$(document).ready(function() {
    $( '#for-attorney, #not-attorney' ).click(function() {
        $( '.overlay-main, .popup__attorney').slideToggle('fast');
    });
    $('.popup-close, #overlay-join-aau').click(function() {
        $('.overlay-main, .popup__attorney').slideToggle('fast');
    });
});