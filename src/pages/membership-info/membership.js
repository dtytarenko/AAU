$(document).ready(function() {
    $( "#join-aau" ).click(function() {
        $( "#overlay-join-aau, .popup__join-aau").slideToggle('fast');
    });
    $('.popup-close, #overlay-join-aau').click(function() {
        $('#overlay-join-aau, .popup__join-aau').slideToggle('fast');
    });

    $( "#join-kma-aau" ).click(function() {
        $( "#overlay-join-kma-aau, .popup__join-kma-aau").slideToggle('fast');
    });
    $('.popup-close, #overlay-join-kma-aau').click(function() {
        $( "#overlay-join-kma-aau, .popup__join-kma-aau").slideToggle('fast');
    });
});

