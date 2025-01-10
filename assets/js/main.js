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

  


  // testimonials slider 
  var swiper = new Swiper(".rt__tes-slider", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".rt__tes-btn-next",
      prevEl: ".rt__tes-btn-prev",
    },
  });


  //  blog
  var swiper = new Swiper(".rt-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rt-blog-next-btn",
      prevEl: ".rt-blog-prev-btn",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
        // spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        // spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });

   // branding slider top 
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

  // footer brand slider
  var swiper = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    spaceBetween: 40,
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

})(jQuery);
