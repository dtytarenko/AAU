$(document).ready(function() {
    $( ".menu-burger, .menu-burger-mobile" ).click(function() {
        $( ".menu, .overlay").slideToggle( "slow");
        $('.menu').css('display', 'flex');
        $('.menu').css('z-index', '4');
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu, .overlay" ).slideToggle( "slow");
    });
}); 