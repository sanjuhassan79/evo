(function($){
"use strict";

$('#uiux-progress').circleProgress({
    value: 0.75,
    size: 200,
    thickness: 8,
   fill:'#6928D9',
   startAngle:-1.70,
   emptyFill:'#15154C',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(73 * progress) + '<i>%</i>');
  });
  $('#uiux-progress2').circleProgress({
    value: 0.85,
    size: 200,
    thickness: 8,
   fill:'#1573FF',
   startAngle:-1.70,
   emptyFill:'#15154C',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(85 * progress) + '<i>%</i>');
  });
  $('#uiux-progress3').circleProgress({
    value: 0.48,
    size: 200,
    thickness: 8,
   fill:'#16FFDB',
   startAngle:-1.70,
   emptyFill:'#15154C',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(48 * progress) + '<i>%</i>');
  });
  $('#uiux-progress4').circleProgress({
    value: 0.69,
    size: 200,
    thickness: 8,
   fill:'#BAFF26',
   startAngle:-1.70,
   emptyFill:'#15154C',
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('.parcentage').html(Math.round(69 * progress) + '<i>%</i>');
  });

 // stycky header
 $(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('header').addClass('neel');
  }
  else
  {
    $('header').removeClass('neel');
  }
  
})

 // counter JS
    $('.your-class').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });


 // isotope JS
    var $grid =  $('.isotope-grid').isotope({
      // set itemSelector so .grid-sizer is not used in layout
      itemSelector: '.portfolio-grid',
      percentPosition: true,
      masonry: {
         // use element for option
       columnWidth: '.portfolio-grid'
       }
       })
  
  
       $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });
  
 // typed JS
 var typed = new Typed(".type", {
  strings: [
    "Designer.",
    "Founder."
  ],
  typeSpeed: 90,
  backSpeed: 90,
  loop: true,
  cursorChar: '',
});


// Fancy-box
$('[data-fancybox="gallery"]').fancybox({
  animationEffect: "zoom-in-out",
  transitionEffect: "slide",
 
});


    // offcanvas menu
    $(".huber-icon img").on('click', function(){
      $(".offcanvas-menu").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".menu-close, .offcanvas-menu-overlay").on('click', function(){
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });



 // wow JS

    new WOW().init();




     // parallax JS
     var scene = document.getElementById('layer-1');
     var parallaxInstance = new Parallax(scene);
      // parallax JS
      var scene = document.getElementById('layer-2');
      var parallaxInstance = new Parallax(scene);
       // parallax JS
     var scene = document.getElementById('layer-3');
     var parallaxInstance = new Parallax(scene);
      // parallax JS
      var scene = document.getElementById('layer-4');
      var parallaxInstance = new Parallax(scene);
      // parallax JS
      var scene = document.getElementById('layer-5');
      var parallaxInstance = new Parallax(scene);

})(jQuery);



