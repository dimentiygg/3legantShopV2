import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const mobileCloseBtn = document.querySelector('.mobile-close-button');
const backdrop = document.querySelector('.backdrop ');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerButton = document.querySelector('.burger-button');
const closeAnnouncement = document.querySelector('.close-button');
const announcement = document.querySelector('.announcement');
const announcementBtn = document.querySelector('.header-button');
const headerNavMenu = document.querySelector('.header-nav-menu');
if (window.innerWidth < 768) {
  announcementBtn.style.display = 'none';
  headerNavMenu.style.display = 'none';
} else {
  announcementBtn.style.display = 'flex';
  burgerButton.style.display = 'none';
}

closeAnnouncement.addEventListener('click', event => {
  announcement.style.display = 'none';
});

burgerButton.addEventListener('click', event => {
  backdrop.classList.add('is-open');
  backdrop.classList.remove('hidden');
  mobileMenu.classList.add('menu-open');
  mobileMenu.classList.remove('menu-close');
});

mobileCloseBtn.addEventListener('click', event => {
  backdrop.classList.add('hidden');
  mobileMenu.classList.add('menu-close');
  mobileMenu.classList.remove('menu-open');
  backdrop.classList.remove('is-open');
});

const aboutMeAccordion = new Accordion('.accordion-wrapper', {
  showMultiple: true,
});

const arrow = document.querySelectorAll('.arrow');
const accordion = document.querySelector('.accordion-wrapper');
accordion.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (button && button.tagName === 'BUTTON') {
    if (button.id === 'ac-trigger-0') {
      arrow[0].classList.toggle('rotate');
    } else if (button.id === 'ac-trigger-1') {
      arrow[1].classList.toggle('rotate');
    }
  }
});
