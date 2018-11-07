$( document ).ready(function() {
    $( ".menu-burger" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        $('.menu').css('display', 'flex');
        $('.menu').css('z-index', '4');
        $('.overlay').slideToggle("slow");
    });
    
    $( ".menu__close, .overlay" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        $('.overlay').slideToggle("slow");
    });
});