const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

//робимо кнопку не активною
stopButton.disabled = true;

startButton.addEventListener('click', onStartButton);
stopButton.addEventListener('click', onStopButton);

function onStartButton() {
    stopButton.removeAttribute('disabled');
    startButton.disabled = true;

    // змінюємо колір фону по таймеру 1сек

 const timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

// function setNewColor

function onStopButton() {
    startButton.removeAttribute('disabled');
    
    stopButton.disabled = true;

    //знімаємо таймер
     clearInterval(timerId);
}

// Функция рандомного цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
