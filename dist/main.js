$( document ).ready(function() {
    $( ".menu-burger" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        $('.menu').css('display', 'flex');
    });
    
    $( ".menu__close" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
    });
});