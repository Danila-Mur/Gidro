import Swiper, { Navigation, Pagination, Autoplay } from "swiper/core";
import "swiper/css";
import "./index.sass";

let menu = ["", "", "", "", "", ""];
Swiper.use([Navigation, Pagination, Autoplay]);
const introSwiper = new Swiper(".swiper", {
  direction: "horizontal",
  // speed: 1000,
  slidesPerView: 1,
  // centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  loopAdditionalSlides: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
  // autoplay: {
  //   delay: 5000
  // }
});
