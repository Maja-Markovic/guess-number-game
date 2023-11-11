//Elements
let btnGuess = document.getElementById('btn-guess');
let btnAgain = document.getElementById('btn-play-again');
let outputMessage = document.getElementById('message');
let allContent = document.querySelector('.content');

let number = Math.floor(Math.random() * 15) + 1;

//Functions
function checkInput() {
  let userInput = document.getElementById('input-number').value;
  if (userInput > number) {
    outputMessage.innerHTML = 'Broj je veliki, probaj neki manji';
  } else if (userInput < number) {
    outputMessage.innerHTML = 'Broj je mali, probaj neki veći';
  }
  if (userInput == number) {
    outputMessage.innerHTML = `Broj je tačan! ✔️🎉 Zamislila sam broj ${number}.`;
    btnAgain.classList.remove('hidden');
    allContent.classList.add('hidden');
  }
}

function reloadWindow() {
  window.location.reload();
}

//EventListener
btnGuess.addEventListener('click', checkInput);

btnAgain.addEventListener('click', reloadWindow);
