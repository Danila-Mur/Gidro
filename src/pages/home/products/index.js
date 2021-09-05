import Swiper, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "./index.sass";

Swiper.use([Navigation, Autoplay]);
const introSwiper = new Swiper(".products__slider ", {
  direction: "horizontal",
  spaceBetween: 30,
  // speed: 1000,
  slidesPerView: 4,
  // centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  loopAdditionalSlides: 0,
  navigation: {
    nextEl: ".swiper-button-next--products",
    prevEl: ".swiper-button-prev--products"
  }
  // autoplay: {
  //   delay: 5000
  // }
});

$(".product-item__favorite").on("click", function() {
  $(this).toggleClass("product-item__favorite--active");
});
