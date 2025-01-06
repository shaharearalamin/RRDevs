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

  // brand slider
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
})(jQuery);
