const buttons = document.querySelectorAll('.btn-circle');
const scoreElement = document.getElementById('score')
const choises = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoise = undefined;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoise = button.getAttribute('data-choise')
    checkWinner();
  })
})

const checkWinner = () => {
  const computerChoise = randomChoise();
  if(userChoise === computerChoise) {
    // empate
    console.log('empate')
  }else if (userChoise === 'paper' && computerChoise==='rock'
  || userChoise === 'rock' && computerChoise === 'scissors'
  || userChoise === 'scissors' && computerChoise === 'paper'){
    // gana jugador
    updateScore(1)
    console.log('winner')
  }else {
    // gana maquina
    updateScore(-1)
    console.log('OAAAAA Perdiste paaa')
  }
}

const updateScore = (value) => {
  score += value;
  scoreElement.innerText = score;
}

const randomChoise = () => {
  return choises[Math.floor(Math.random() * choises.length)];
}
