import Swiper from 'swiper';
import 'swiper/css';
// import 'swiper/css/pagination';
import { Navigation, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

const swiperBtnNext = document.querySelector('.swiper-button-next');
const swiperBtnPrev = document.querySelector('.swiper-button-prev');

const SwiperProduct = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  modules: [Navigation, Keyboard, Mousewheel, Autoplay],

  //   autoplay: {
  //     delay: 10000,
  //   },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },

  navigation: {
    nextEl: '.sbn',
    prevEl: '.sbp',
  },
});
