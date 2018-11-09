$(document).ready(function() {
    $( ".menu-burger, .menu-burger-mobile" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        $('.menu').css('display', 'flex');
        $('.menu').css('z-index', '4');
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        } // it`s for delete overlay for mobile-width
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        }
    });
});


$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
}); 
// it`s for refresh the page on a browser resize using (important for menu in account-type pages)