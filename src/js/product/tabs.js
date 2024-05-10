import Accordion from 'accordion-js';

const productAccordion = new Accordion('.accordion-container', {
  showMultiple: true,
});

const arrow = document.querySelectorAll('.tabs-arrow');
const accordion = document.querySelector('.accordion-container');
const tabsAccordion = document.querySelectorAll('.tabs-accordion');
const acTabsText = document.querySelectorAll('.ac-tabs-text');

accordion.addEventListener('click', event => {
  console.log(event.target.closest('button'));
  const button = event.target.closest('button');
  if (button && button.tagName === 'BUTTON') {
    if (button.id === 'ac-trigger-2') {
      arrow[0].classList.toggle('rotate');
      arrow[0].classList.toggle('arrow-active');
      tabsAccordion[0].classList.toggle('tabs-accordion-active');
      acTabsText[0].classList.toggle('ac-tabs-text-active');
    } else if (button.id === 'ac-trigger-3') {
      arrow[1].classList.toggle('rotate');
      arrow[1].classList.toggle('arrow-active');
      tabsAccordion[1].classList.toggle('tabs-accordion-active');
      acTabsText[1].classList.toggle('ac-tabs-text-active');
    } else if (button.id === 'ac-trigger-4') {
      arrow[2].classList.toggle('rotate');
      arrow[2].classList.toggle('arrow-active');
      tabsAccordion[2].classList.toggle('tabs-accordion-active');
      acTabsText[2].classList.toggle('ac-tabs-text-active');
    }
  }
});

if (window.innerWidth >= 768) {
  accordion.style.display = 'none';
}

const tabsList = document.querySelector('.tabs-list');
const tabs = document.querySelectorAll('.tabs-list p');
const review = document.querySelector('.review-container');
const something = document.querySelector('.something');

tabsList.addEventListener('click', event => {
  if (event.target.tagName === 'P') {
    for (let tab of tabs) {
      tab.classList.remove('active-tab');
    }
    event.target.classList.add('active-tab');
    if (
      event.target.textContent === 'Questions' ||
      event.target.textContent === 'Additional info'
    ) {
      review.style.display = 'none';
      something.style.display = 'block';
    } else {
      review.style.display = 'block';
      something.style.display = 'none';
    }
  }
});
const emojiPanel = document.getElementById('emojiPanel');
const emojiInput = document.getElementById('emojiInput');
const emoji = document.querySelectorAll('.emoji');
const form = document.getElementById('form');

if (window.innerWidth >= 1024) {
  emojiInput.addEventListener('mouseover', () => {
    emojiPanel.style.display = 'flex';
  });

  document.addEventListener('click', event => {
    if (
      event.target != emojiPanel &&
      event.target != emojiInput &&
      event.target != emoji[0] &&
      event.target != emoji[1] &&
      event.target != emoji[2] &&
      event.target != emoji[3] &&
      event.target != emoji[4] &&
      event.target != emoji[5]
    ) {
      emojiPanel.style.display = 'none';
    }
  });
}
