const verticalBtn = document.getElementById('vertical');
const horizontalBtn = document.getElementById('horizontal');
const buttonList = document.querySelector('.shop-filter-list');
const productslist = document.querySelector('.shop-products-list');

buttonList.addEventListener('click', e => {
  if (e.target.closest('button') == verticalBtn) {
    horizontalBtn.classList.remove('active-filter-button');
    verticalBtn.classList.add('active-filter-button');
    productslist.classList.remove('horizontal-style');
  } else {
    horizontalBtn.classList.add('active-filter-button');
    verticalBtn.classList.remove('active-filter-button');
    productslist.classList.add('horizontal-style');
  }
});

const fullShopFilterList = document.querySelector('.full-shop-filter-list');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const verticalDeskBtn = document.getElementById('vertical-desk');
const horizontalDeskBtn = document.getElementById('horizontal-desk');

if (window.innerWidth < 767) {
  productslist.classList.remove('nine-style');
} else {
  verticalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
}

fullShopFilterList.addEventListener('click', e => {
  if (e.target.closest('button') == verticalDeskBtn) {
    verticalDeskBtn.getElementsByTagName('svg')[0].style.fill = 'black';
    nineBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    fourBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    horizontalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    nineBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    fourBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    horizontalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    productslist.classList.remove('nine-style');
    productslist.classList.remove('four-style');
    nineBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.add('active-filter-button');
    productslist.classList.remove('horizontal-style');
  } else if (e.target.closest('button') == horizontalDeskBtn) {
    verticalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    nineBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    fourBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    horizontalDeskBtn.getElementsByTagName('svg')[0].style.fill = 'black';
    nineBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    fourBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    verticalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    productslist.classList.remove('nine-style');
    productslist.classList.remove('four-style');
    horizontalDeskBtn.classList.add('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
    nineBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    productslist.classList.add('horizontal-style');
  } else if (e.target.closest('button') == fourBtn) {
    verticalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    nineBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    fourBtn.getElementsByTagName('svg')[0].style.fill = 'black';
    horizontalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    nineBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    horizontalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    verticalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    productslist.classList.remove('nine-style');
    fourBtn.classList.add('active-filter-button');
    productslist.classList.remove('horizontal-style');
    productslist.classList.add('four-style');
    nineBtn.classList.remove('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
  } else {
    verticalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    nineBtn.getElementsByTagName('svg')[0].style.fill = 'black';
    fourBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    horizontalDeskBtn.getElementsByTagName('svg')[0].style.fill = '#6c7275';
    fourBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    horizontalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    verticalDeskBtn
      .getElementsByTagName('svg')[0]
      .classList.remove('active-filter-svg');
    productslist.classList.remove('four-style');
    productslist.classList.remove('horizontal-style');
    nineBtn.classList.add('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    productslist.classList.add('nine-style');
  }
});

const filterBtn = document.querySelector('.mobile-filter-button');
const filters = document.querySelector('.desktop-filters');

filterBtn.addEventListener('click', e => {
  filters.classList.remove('desktop-filters-close');
  filters.classList.add('desktop-filters-open');
  document.querySelector('.shop-filter-button').style.display = 'none';
});

window.addEventListener('click', e => {
  if (
    filters.classList.contains('desktop-filters-open') &&
    !filters.contains(e.target) &&
    e.target.closest('button') !== filterBtn
  ) {
    filters.classList.add('desktop-filters-close');
    document.querySelector('.shop-filter-button').style.display = 'block';
  }
});

const shopProductsList = document.querySelector('.shop-products-list');

shopProductsList.addEventListener('click', event => {
  if (
    event.target.tagName != 'IMG' &&
    event.target.tagName != 'P' &&
    event.target.tagName != 'DIV' &&
    !event.target.classList.contains('add-to-cart')
  ) {
    const svgIcon = event.target.closest('button').querySelector('use');
    const currentHref = svgIcon.getAttribute('href');
    if (currentHref === './public/symbol-defs.svg#icon-black-heart') {
      svgIcon.setAttribute('href', './public/symbol-defs.svg#icon-heart');
      svgIcon.closest('svg').style.fill = '#6c7275';
    } else {
      svgIcon.setAttribute('href', './public/symbol-defs.svg#icon-black-heart');
      svgIcon.closest('svg').style.fill = 'black';
    }
  }
});
