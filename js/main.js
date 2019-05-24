$(document).ready(function(){
   
   //Header animation

    function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active  py-lg-2').removeClass(' py-lg-4');
        } else {
            $('header').removeClass('header-active  py-lg-2').addClass(' py-lg-4');
        }
    }
   
   //animation 
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }

    animateHeader();
    animation();

    $(window).scroll(function () {
        animateHeader();
        animation();
    });

//hamburger animate
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
    });

    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


   
   
   //Owl carousel
   
   if($('.owl-carousel').length > 0){
       //lead-slider
       $('.lead-slider').owlCarousel({
           items:1,
           nav:true,
           dots:true,
           loop:true,
           navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],
           autoplay:true
       }); 
       
      $('.slider-testimonial').owlCarousel({
          dots:true,
          nav:false,
          loop:true,
          responsive:{
              0:{
                  items:1
              },
              576:{
                  items:2,
                  margin:30
              }
          }
      });
       
   }
    
    
    
    
    
    
    
    
    
});//document ready end


