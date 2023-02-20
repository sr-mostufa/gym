$(function(){
    "use strict";

    // Banner slider start
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        dots: true,
      });

      // About video js start
      $('.venobox').venobox({
        spinner: 'cube-grid',
        spinColor: '#ff0909'

      });
      
// Menu fix js start
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 200){
      $('.main_menu').addClass('menu_fix');
  }
  else{
      $('.main_menu').removeClass('menu_fix');
  }


});


$('.backtop').click(function(){
  $('html, body').animate({
      scrollTop: 0,
  }, 2000);
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();

  if(scrolling > 200){
      $('.backtop').fadeIn();
  }
  else{
      $('.backtop').fadeOut();
  }


});
      // Test slider start

      $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,
        dots:true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:false,
              arrows:false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
           
            }
          }
         
        ]
      });


    //  Counter js start
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
    


      // Team slider start
      $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
       
      ]

      });


      // Active js start

      $('.maim_menu ul li a').on('click', function(){
        $('.maim_menu ul li a').removeClass('active');
        $(this).toggleClass('active');
      
      });

      

});