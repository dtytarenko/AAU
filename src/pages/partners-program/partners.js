$(document).ready(function() {
    $( ".partners-join" ).click(function() {
        $( ".overlay-main, .popup-wrap").slideToggle('fast');
    });
    $('.popup-close, .overlay-main').click(function() {
        $( ".overlay-main, .popup-wrap").slideToggle('fast');
    });
});

