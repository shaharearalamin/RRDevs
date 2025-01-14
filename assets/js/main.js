(function ($) {
  "use strict";

  // magnificPopup start
  $(".popup-hero-vedio").magnificPopup({
    type: "iframe",
  });

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
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".rt__service-btn-next",
      prevEl: ".rt__service-btn-prev",
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // testimonials slider
  var swiper = new Swiper(".rt__tes-slider", {
    loop: true,
    speed: 1000,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
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
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
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

  // header sticky
  let headersticky = document.querySelector("header");
  window.onscroll = function () {
    let scrollNav = window.scrollY;
    if (scrollNav >= 200) {
      headersticky.classList.add("headersticky");
    } else {
      headersticky.classList.remove("headersticky");
    }
  };

  // testimonials img perspective
  const container = document.getElementById("imageContainer");
  const image = document.getElementById("perspectiveImage");

  container.addEventListener("mousemove", (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener("mouseleave", () => {
    image.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

  // contactForm img perspective
  const container1 = document.getElementById("imageContainer1");
  const image1 = document.getElementById("perspectiveImage1");

  container1.addEventListener("mousemove", (event) => {
    const rect = container1.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image1.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener("mouseleave", () => {
    image1.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

  // blog img-1 perspective
  const container2 = document.getElementById("imageContainer2");
  const image2 = document.getElementById("perspectiveImage2");

  container2.addEventListener("mousemove", (event) => {
    const rect = container2.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image2.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container2.addEventListener("mouseleave", () => {
    image2.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

  // blog img-2 perspective
  const container3 = document.getElementById("imageContainer3");
  const image3 = document.getElementById("perspectiveImage3");

  container3.addEventListener("mousemove", (event) => {
    const rect = container3.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image3.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container3.addEventListener("mouseleave", () => {
    image3.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
  // blog img-3 perspective
  const container4 = document.getElementById("imageContainer4");
  const image4 = document.getElementById("perspectiveImage4");

  container4.addEventListener("mousemove", (event) => {
    const rect = container4.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image4.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container4.addEventListener("mouseleave", () => {
    image4.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
  // blog img-4 perspective
  const container5 = document.getElementById("imageContainer5");
  const image5 = document.getElementById("perspectiveImage5");

  container5.addEventListener("mousemove", (event) => {
    const rect = container5.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    image5.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container5.addEventListener("mouseleave", () => {
    image5.style.transform = "rotateX(0deg) rotateY(0deg)";
  });

  // custom mouse move
  const circle = document.querySelector(".rt__mouse-cursor");
  let mouseX = 0,
    mouseY = 0;
  let circleX = 0,
    circleY = 0;
  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
  function animate() {
    circleX += (mouseX - circleX) * 0.1;
    circleY += (mouseY - circleY) * 0.1;
    circle.style.left = `${circleX}px`;
    circle.style.top = `${circleY}px`;
    requestAnimationFrame(animate);
  }
  animate();

  // back to top btn
  const scrollBtn = document.getElementById("scrollBtn");
  scrollBtn.style.display = "none";
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; 
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight; 
    const scrollPercent = Math.round((scrollTop / docHeight) * 100); 
    if (scrollTop > 0) {
      scrollBtn.style.display = "flex"; 
    } else {
      scrollBtn.style.display = "none";
    }
    scrollBtn.style.setProperty("--scroll-progress", `${scrollPercent}%`);
    if (scrollPercent >= 100) {
      scrollBtn.textContent = "↑"; 
    } else {
      scrollBtn.textContent = `${scrollPercent}%`; 
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // code for navbar offcanvas
$(function () {
  $(".offcanvasDropdown a").click(function (event) {
    var submenu = $(this).next(".submenu");
    submenu.toggleClass("show");

    // Specific icon toggle
    $(this).find(".submenuicon").toggleClass("show2");
    event.stopPropagation();
  });

  $(document).click(function (event) {
    if (!$(event.target).closest(".offcanvasDropdown").length) {
      $(".submenu").removeClass("show");
      $(".submenuicon").removeClass("show2"); // Close all icons
    }
  });

  $(".offcanvasDropdown").click(function (event) {
    event.stopPropagation();
  });
});

// code for navbar offcanvas


  // counters about and fact
  const createOdometer = (el, value) => {
    const odometer = new Odometer({
      el: el,
      value: 0,
    });
    let hasRun = false;
    const options = {
      threshold: [0, 0.9],
    };
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!hasRun) {
            odometer.update(value);
            hasRun = true;
          }
        }
      });
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  };
  
  const counter1 = document.querySelector(".subscribers-odometer");
  createOdometer(counter1, 10);
  const counter2 = document.querySelector(".videos-odometer");
  createOdometer(counter2, 200);
  const projectsOdometer = document.querySelector(".projects-odometer");
  createOdometer(projectsOdometer, 500);
  const projectsOdometer1 = document.querySelector(".projects-odometer1");
  createOdometer(projectsOdometer1, 300);
  const projectsOdometer2 = document.querySelector(".projects-odometer2");
  createOdometer(projectsOdometer2, 600);
})

(jQuery);
