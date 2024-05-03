const verticalBtn = document.getElementById('vertical');
const horizontalBtn = document.getElementById('horizontal');
const buttonList = document.querySelector('.shop-filter-list');
const productslist = document.querySelector('.shop-products-list');

buttonList.addEventListener('click', e => {
  console.log(e.target.closest('button'));
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

if (window.innerWidth < 768) {
  productslist.classList.remove('nine-style');
}

const fullShopFilterList = document.querySelector('.full-shop-filter-list');
const nineBtn = document.getElementById('nine');
const fourBtn = document.getElementById('four');
const verticalDeskBtn = document.getElementById('vertical-desk');
const horizontalDeskBtn = document.getElementById('horizontal-desk');
console.log(verticalDeskBtn);

fullShopFilterList.addEventListener('click', e => {
  if (e.target.closest('button') == verticalDeskBtn) {
    console.log(horizontalBtn);
    productslist.classList.remove('nine-style');

    nineBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.add('active-filter-button');
    productslist.classList.remove('horizontal-style');
  } else if (e.target.closest('button') == horizontalDeskBtn) {
    productslist.classList.remove('nine-style');

    horizontalDeskBtn.classList.add('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
    nineBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    productslist.classList.add('horizontal-style');
  } else if (e.target.closest('button') == fourBtn) {
    productslist.classList.remove('nine-style');

    fourBtn.classList.add('active-filter-button');
    productslist.classList.remove('horizontal-style');
    nineBtn.classList.remove('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
  } else {
    nineBtn.classList.add('active-filter-button');
    horizontalDeskBtn.classList.remove('active-filter-button');
    verticalDeskBtn.classList.remove('active-filter-button');
    fourBtn.classList.remove('active-filter-button');
    productslist.classList.add('nine-style');
  }
});
