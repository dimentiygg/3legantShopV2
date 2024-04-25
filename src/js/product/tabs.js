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
