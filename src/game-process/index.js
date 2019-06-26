import { Gamer } from '../models'
import { hideDice } from '../view'

export function initGame(gameState) {
  const namePlayer1 = prompt('Кто  будет играть первым?');
  const namePlayer2 = prompt('А вторым?');
  const player1 = new Gamer(namePlayer1,0);
  const player2 = new Gamer(namePlayer2,1);
  gameState.playersList = [player1, player2];
  document.querySelector('#name-0').textContent = player1.name;
  document.querySelector('#name-1').textContent = player2.name;

  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  gameState.scoresForWin = +document.getElementById('input-limit').value || 100

  // diceElement_1.style.display = 'none';
  // diceElement_2.style.display = 'none';
  hideDice();
  gameState.scores = [0, 0];
  gameState.currentScore = 0;
}

export function changePlayer(gameState) {
  gameState.currentScore = 0;
  document.getElementById('current-'+gameState.activePlayerId).textContent = 0;
  document.querySelector(`.player-${gameState.activePlayerId}-panel`).classList.toggle('active');
  gameState.activePlayerId = +!gameState.activePlayerId;
  // diceElement_1.style.display = 'none';
  // diceElement_2.style.display = 'none';
  hideDice()
  document.querySelector(`.player-${gameState.activePlayerId}-panel`).classList.toggle('active');
}
