import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
  const days = padStart(value.days);
  const hours = padStart(value.hours);
  const minutes = padStart(value.minutes);
  const seconds = padStart(value.seconds);

  return { days, hours, minutes, seconds };
}
function padStart(value) {
  let date = value.toString();

  if (date.length == 1) {
    date = '0' + date;
  }
  return date;
}

const btn = document.querySelector('[data-start]');
btn.setAttribute('disabled', '');
let dateSet;
let selectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (new Date() - selectedDates[0] > 0) {
      window.alert('Please choose a date in the future');
      btn.setAttribute('disabled', '');
    } else {
      dateSet = selectedDates[0] - new Date();
      selectedDate = selectedDates[0];
      btn.removeAttribute('disabled');
    }
  },
};

flatpickr('#datetime-picker', options);

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

function changeTime() {
  let date = addLeadingZero(convertMs(dateSet));
  dateSet = selectedDate - new Date();
  if (selectedDate - new Date() > 0) {
    days.textContent = date.days;
    hours.textContent = date.hours;
    minutes.textContent = date.minutes;
    seconds.textContent = date.seconds;
  } else {
    days.textContent = '00';
    hours.textContent = '00';
    minutes.textContent = '00';
    seconds.textContent = '00';
  }
  return date;
}

btn.addEventListener('click', () => {
  setInterval(changeTime, 100);
});
