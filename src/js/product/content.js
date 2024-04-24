const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const button = document.querySelector('.timer');
console.log(days);
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  for (let key in value) {
    if (value[key] >= 0 && value[key] < 10) {
      value[key] = value[key].toString().padStart(2, '0');
    }
  }
  return value;
}

const targetTime = Date.now() + 225845005;

const timer = setInterval(() => {
  const value = addLeadingZero(convertMs(targetTime - Date.now()));

  days.textContent = `${value.days}`;
  hours.textContent = `${value.hours}`;
  minutes.textContent = `${value.minutes}`;
  seconds.textContent = `${value.seconds}`;
  if (targetTime - Date.now() <= 999) {
    clearInterval(timer);
  }
}, 1000);

const contentListItems = document.querySelectorAll('.content-item');
const contentColor = document.querySelector('.content-color');
const contentColorList = document.querySelector('.content-color-list');

const source1 = document.getElementById('mySource1');
const source2 = document.getElementById('mySource2');
const source3 = document.getElementById('mySource3');

const images = document.querySelectorAll('.swiper-slide img');

const black = '../../img/products/mobile/black_tray_table@2x.png';
const red = '../../img/products/mobile/red_tray_table_color@12x.png';
const sand = '../../img/products/mobile/sand_tray_table_color@12x.png';
const white = '../../img/products/mobile/white_tray_table_color@12x.png';

let colorArr = [black, sand, red, white];

// contentColor.textContent = color[2].dataset.color;
// console.log(color[0].dataset.color);

contentColorList.addEventListener('click', event => {
  contentColor.textContent = event.target.closest('li').dataset.color;

  for (let i = 0; i < 4; i++) {
    if (
      contentListItems[i].dataset.color ===
      event.target.closest('li').dataset.color
    ) {
      for (let item of contentListItems) {
        item.classList.remove('content-active');
      }

      console.log(contentListItems[i].dataset.color);

      contentListItems[i].classList.add('content-active');

      for (let img of images) {
        img.src = colorArr[i];
        source1.srcset = colorArr[i];
        source2.srcset = colorArr[i];
        source3.srcset = colorArr[i];
      }
    }
  }
});
