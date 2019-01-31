
$(document).ready(function() {
    $( ".committee-list__item" ).click(function() {
        $(this).children( ".committee-list__item-descr--wraper").slideToggle( "slow");
        $(this).children( ".committee-list__item-descr--wraper").css('display', 'flex');
        $(this).toggleClass('active');
    });
});
