(function($) {
  "use strict";

  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_state_open');
    });
  });

  $(document).ready(function() {
    // Swiper
    const mySwiper = new Swiper('.swiper-container', {
      resistanceRatio: 0.7,
      spaceBetween: 30,
      effect: 'fade',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
    
    // Video Animations
    VideoAnimations.init();
  });

  AOS.init();
})(jQuery);
