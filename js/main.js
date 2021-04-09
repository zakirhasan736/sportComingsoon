(function ($) {
    "use strict";

    jQuery('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "991",
  });


$('.info-bar').on('click', function(){
    $('.extra-info').addClass('info-open');
})
$('.clos-icone').on('click', function(){
    $('.extra-info').removeClass('info-open');
})

/* ==========================================================================
  // header stickey activation
========================================================================== */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 50) {
      $(".header-sticky").removeClass("sticky");
    } else {
      $(".header-sticky").addClass("sticky");
    }
  });


})(jQuery);	    
  /* ==========================================================================
   //custom video player active
  ========================================================================== */
const navbar = document.querySelector( ".navbar" );
a = navbar.querySelectorAll( "a" );


a.forEach( function ( element ) {
    element.addEventListener( "click", function () {
        for ( let i = 0; i < a.length; i++ ) {
            a[ i ].classList.remove( "active" );
        }

        this.classList.add( "active" )
        document.querySelector( ".navbar" ).classList.toggle( "show" );
        $( ".navbar-collapse" ).collapse( "hide" );

    } )
} )