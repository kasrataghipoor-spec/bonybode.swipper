var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    speed: 100,
  },
});
var swiperOne = new Swiper(".categorySwiper", {
  slidesPerView: 6,
  spaceBetween: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiperOne = new Swiper(".categorySwiper3", {
  slidesPerView: "auto",
  spaceBetween: 8, 
  loop: false,      
  freeMode: true,   
  breakpoints: {
    // موبایل
    0: {
      slidesPerView: "auto",
      spaceBetween: 8,
    },
    // دسکتاپ
    1024: {
      slidesPerView: "auto", 
      spaceBetween: 8,
    }
  }
});
var swiperOne = new Swiper(".categorySwiper2", {
  slidesPerView: "auto", 
  spaceBetween: 12, 
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // اضافه کردن breakpoints برای ریسپانسیو
  breakpoints: {
   
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
   
    480: {
      slidesPerView: 1.7,
      spaceBetween: 12,
    },
   
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
   
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    
    1280: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  }
});
var swiperOne = new Swiper(".readyCards", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperOne = new Swiper(".bestSaleCards", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
