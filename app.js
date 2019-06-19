/*
GAME RULES:

- The game has 2 playersList, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const RESET_VALUE = 2;
let scores = [0, 0];
let activePlayerId = 0;
let current = 0;
const diceElement_1 = document.querySelector('#dice_1');
const diceElement_2 = document.querySelector('#dice_2');
let scoresForWin;
let playersList = [];

function Gamer(name,id) {
  this.score = 0;
  this.name = name;
  this.id = id;

  this.getScore = () =>{
    return this.score;
  }

  this.setScore = (score) => {
    this.score += score;
    return this.score;
  }
  this.resetScore = () => {
    this.score = 0
  }
}



const initGame = () => {
  const namePlayer1 = prompt('Кто  будет играть первым?');
  const namePlayer2 = prompt('А вторым?');
  const player1 = new Gamer(namePlayer1,0);
  const player2 = new Gamer(namePlayer2,1);
  playersList = [player1, player2];
  document.querySelector('#name-0').textContent = player1.name;
  document.querySelector('#name-1').textContent = player2.name;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  scoresForWin = +document.getElementById('input-limit').value
  if (scoresForWin == 0) {
    scoresForWin = 100
  }
  diceElement_1.style.display = 'none';
  diceElement_2.style.display = 'none';
  scores = [0, 0];
  current = 0;
}

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  let dice_1 = Math.floor(Math.random() * 6) + 1;
  let dice_2 = Math.floor(Math.random() * 6) + 1;
  console.log(`${dice_1} ${dice_2}`)

  diceElement_1.src = `dice-${dice_1}.png`;
  diceElement_2.src = `dice-${dice_2}.png`;

  diceElement_1.style.display = 'block';
  diceElement_2.style.display = 'block';

  if (dice_1 !== RESET_VALUE && dice_2 !== RESET_VALUE && dice_1 !== dice_2) {
    current += dice_1 + dice_2;
    document.getElementById('current-'+activePlayerId).textContent = current;
    playersList[activePlayerId].setScore(current)
    if (scores[activePlayerId] + current >= scoresForWin) {
       alert(`Player ${activePlayerId} won!!!`);
    }
    
  } else {
    changePlayer();
  }
});

const changePlayer = () => {
  current = 0;
  playersList[activePlayerId].resetScore();
  document.getElementById('current-'+activePlayerId).textContent = 0;
  document.querySelector(`.player-${activePlayerId}-panel`).classList.toggle('active');
  activePlayerId = +!activePlayerId;
  diceElement_1.style.display = 'none';
  diceElement_2.style.display = 'none';
  document.querySelector(`.player-${activePlayerId}-panel`).classList.toggle('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayerId] += current;
  document.querySelector(`#score-${activePlayerId}`).textContent = scores[activePlayerId];
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});
