import 'swiper/css/scrollbar';
import Swiper from 'swiper';

const swiper2 = new Swiper('.swiper2', {
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});

const carouselList = document.querySelector('.carousel-list');
carouselList.addEventListener('click', event => {
  if (
    event.target.tagName != 'IMG' &&
    event.target.tagName != 'P' &&
    event.target.tagName != 'DIV' &&
    !event.target.classList.contains('add-to-cart')
  ) {
    const svgIcon = event.target.closest('button').querySelector('use');
    const currentHref = svgIcon.getAttribute('href');
    if (currentHref === '../../public/symbol-defs.svg#icon-black-heart') {
      svgIcon.setAttribute('href', '../../public/symbol-defs.svg#icon-heart');
      svgIcon.closest('svg').style.fill = '#6c7275';
    } else {
      svgIcon.setAttribute(
        'href',
        '../../public/symbol-defs.svg#icon-black-heart'
      );
      svgIcon.closest('svg').style.fill = 'black';
    }
  }
});
