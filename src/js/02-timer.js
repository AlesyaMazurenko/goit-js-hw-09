// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');

const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),   
    minutes: document.querySelector('[data-minutes]'), 
    seconds: document.querySelector('[data-seconds]')
}

const btnStart = document.querySelector('button[data-start]');
const dataInput = document.querySelector('#datetime-picker');
const today = new Date();
let delayDate = null;

btnStart.addEventListener('click', onStartBtn);
btnStart.disabled = true;

// 1. Потрібно задати дедлайн
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) { 
         delayDate = selectedDates[0];
        if (today > delayDate) {
            Notify.failure('Please choose a date in the future');
            return;
        } 
        btnStart.disabled = false;
        console.log(delayDate);
   },
};

flatpickr('input#datetime-picker', options);

//Вираховуэм дельту
function onStartBtn() {
    btnStart.disabled = true;
    timerFunc = setInterval(() => {
        const delta = delayDate - new Date();
        console.log(delta);

        if (delta >= 0) {
            const timerCount = convertMs(delta);
            timerOnScreen(timerCount, refs);
        } else {
            clearInterval(timerFunc);
        }
    }, 1000);
}

//Для подсчета значений используй готовую функцию convertMs, где ms - разница между конечной и текущей датой в миллисекундах.
function convertMs(delta) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(delta / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((delta % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((delta % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((delta % day) % hour) % minute) / second));
    console.log(days);
    console.log(hours);
    console.log(minutes);
    console.log(seconds); 
    // console.log(days, hours, minutes, seconds);
  return { days, hours, minutes, seconds };
}
 
// Перебираемо обекти і виводимо в текстове поле по спільному клю
function timerOnScreen( { days, hours, minutes, seconds }, refs) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}
       
//В интерфейсе таймера необходимо добавлять 0 если в числе меньше двух символов
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}





