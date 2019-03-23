$(document).ready(function() {
    $( ".menu-burger, .menu-burger-mobile" ).click(function() {
        $( ".menu, .overlay").slideToggle( "slow");
        $('.menu').css('display', 'flex');
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu, .overlay" ).slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').style.display = "none";
        }
    });

    $(document).ready( function () {
        $('#table_id').DataTable();
    } );
});

$('.personal-info__city > option:first').hide();




$(document).ready(function() {
    $(".personal-info__tel-confirm").click(function() {
        $( ".overlay-main, .submit-tel__first-step").slideToggle( "fast");
    }); 
    $(".popup-close").click(function() {
        $(this).parents(".popup-wrap").slideToggle( "fast");
        $(".overlay-main").slideToggle("fast");
    });
});