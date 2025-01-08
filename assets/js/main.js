(function ($) {
  "use strict";

  // hero slider
  var swiper = new Swiper(".rt__hero-slider", {
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    touchReleaseOnEdges: true,
    resistanceRatio: 0.5,
  });

  // footer brand slider
  var swiper = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });

  // service slider 
  var swiper = new Swiper(".rt__service-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".rt__service-btn-next",
      prevEl: ".rt__service-btn-prev",
    },
  });

  
  // branding slider
  var swiper = new Swiper(".rt-branding-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,
    keyboard: {
      enabled: false,
    },
  });


})(jQuery);
