function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let setColor;

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
}
btnStop.setAttribute('disabled', '');
btnStart.addEventListener('click', () => {
  setColor = setInterval(changeColor, 1000);
  btnStart.setAttribute('disabled', '');
  btnStop.removeAttribute('disabled');
});

btnStop.addEventListener('click', () => {
  clearTimeout(setColor);
  btnStop.setAttribute('disabled', '');
  btnStart.removeAttribute('disabled');
});
