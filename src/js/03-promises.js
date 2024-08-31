function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    new Promise((ok, e) => setTimeout(ok => ok(), delay, ok))
      .then(() => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(() => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  } else {
    new Promise((ok, e) => setTimeout(e => e(), delay, e))
      .then(() => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(() => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
const delay = document.querySelector('[name="delay"]'); //pierwsze opóźnienie w milisekundach,
const step = document.querySelector('[name="step"]'); //stopień zwiększenia opóźnienia dla każdej kolejnej obietnicy
const amount = document.querySelector('[name="amount"]'); //ilosc obietnic

const btn = document.querySelector('[type="submit"]');

btn.addEventListener('click', e => {
  e.preventDefault();
  for (let i = 0; i < parseInt(amount.value); i++) {
    // console.log(delay.textContent);
    createPromise(i + 1, parseInt(delay.value) + i * parseInt(step.value));
  }
});
