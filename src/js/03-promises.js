import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');

const form1 = document.querySelector('form');
const delayInput = form1.querySelector('[name="delay"]');
const delayStep = form1.querySelector('[name="step"]');
const delayAmount = form1.querySelector('[name="amount"]');

form1.addEventListener('submit', onSubmitForm);


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        // Reject
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
} 

function onSubmitForm(evt) {
  evt.preventDefault();

  let delayTime = Number(delayInput.value);
  const stepTime = Number(delayStep.value);
  const amountNumber = Number(delayAmount.value);

  for (let i = 0; i <= amountNumber; i += 1) {
    createPromise(i, delayTime)
      .then(data => Notify.success(data))
      .catch(data => Notify.failure(data));
    
    delayTime += stepTime;
  };
}

