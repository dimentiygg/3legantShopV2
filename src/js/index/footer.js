const copyright = document.querySelector('.copyright-text');
const copyrightMobile = document.querySelector('.copyright-mobile');
const privacyLIST = document.querySelector('.privacy-list-desktop');
const privacyWrapper = document.querySelector('.privacy-wrapper');

console.log(copyright);
if (window.innerWidth < 1023) {
  copyright.style.display = 'none';
  privacyLIST.style.display = 'none';
} else {
  copyright.style.display = 'none';
  copyrightMobile.style.display = 'none';
  privacyWrapper.style.display = 'none';
}
