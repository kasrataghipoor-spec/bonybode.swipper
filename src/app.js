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
var swiperOne = new Swiper(".categorySwiper2", {
  slidesPerView: "auto", // مهم: به جای عدد ثابت
  spaceBetween: 12, // فاصله مناسب بین اسلایدها
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // اضافه کردن breakpoints برای ریسپانسیو
  breakpoints: {
    // موبایل
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
    },
    // موبایل بزرگ
    480: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    // تبلت
    768: {
      slidesPerView: 2.5,
      spaceBetween: 15,
    },
    // دسکتاپ کوچک
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    // دسکتاپ بزرگ
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
