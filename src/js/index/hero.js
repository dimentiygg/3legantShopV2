import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  Pagination,
  Autoplay,
} from 'swiper/modules';

const swiperBtnNext = document.querySelector('.swiper-button-next');
const swiperBtnPrev = document.querySelector('.swiper-button-prev');

if (window.innerWidth <= 1024) {
  swiperBtnNext.style.display = 'none';
  swiperBtnPrev.style.display = 'none';
}

const aboutMeSwiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,
  modules: [Navigation, Keyboard, Mousewheel, Pagination, Autoplay],

  autoplay: {
    delay: 3000,
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
  pagination: {
    enabled: true,
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      navigation: {
        nextEl: '.sbn',
        prevEl: '.sbn',
      },
    },
  },
});
