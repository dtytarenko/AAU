$(document).ready(function() {
    $( ".forget-password" ).click(function() {
        $( ".overlay-main, .popup__forget-pasword").slideToggle('fast');
    });
    $('.popup-close, .overlay-main').click(function() {
        $('.popup__forget-pasword, .overlay-main').slideToggle('fast');
    });
});

