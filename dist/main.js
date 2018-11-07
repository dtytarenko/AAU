$( document ).ready(function() {
    $( ".menu" ).hide();
    $( ".menu-burger" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
    });
    
    $( ".menu-close" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
    });
});