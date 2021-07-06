const buttons = document.querySelectorAll('.pick');
const scoreElement = document.getElementById('score')
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset');
const userSelect = document.getElementById('user-select');
const computerSelect = document.getElementById('computer-select');
const result = document.getElementById('win');
const rulesModal = document.getElementById('rules-modal');
const closeModal = document.getElementById('close-modal');
const openModal = document.getElementById('open-rules');
const choises = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoise = undefined;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoise = button.getAttribute('data-choise');
    checkWinner();
  })
})

reset.addEventListener('click', () => {
  main.style.display = 'flex';
  selection.style.display = 'none';
})

openModal.addEventListener('click', () => {
  rulesModal.style.display = 'flex';
})

closeModal.addEventListener('click', () => {
  rulesModal.style.display = 'none';
})

const checkWinner = () => {
  const computerChoise = randomChoise();
  //update the view when user choise
  updateSelection(userSelect,userChoise);
  updateSelection(computerSelect,computerChoise)
  if(userChoise === computerChoise) {
    // empate
    result.innerText = 'DRAW'
    console.log('empate')
  }else if (userChoise === 'paper' && computerChoise==='rock'
  || userChoise === 'rock' && computerChoise === 'scissors'
  || userChoise === 'scissors' && computerChoise === 'paper'){
    // gana jugador
    updateScore(1)
    result.innerText = 'WIN';
  }else {
    // gana maquina
    updateScore(-1)
    result.innerText = 'LOST';
  }

  main.style.display = 'none';
  selection.style.display = 'flex';
}

const updateScore = (value) => {
  score += value;
  scoreElement.innerText = score;
}

const randomChoise = () => {
  return choises[Math.floor(Math.random() * choises.length)];
}

const updateSelection = (selectionEl,choise) => {
  //class reset to options
  selectionEl.classList.remove('btn-paper');
  selectionEl.classList.remove('btn-rock');
  selectionEl.classList.remove('btn-scissors');

  //update the img for the btn
  const img = selectionEl.querySelector('img');
  selectionEl.classList.add(`btn-${choise}`);
  img.src = `./images/icon-${choise}.svg`;
  img.alt = choise;
}