/*
GAME RULES:

- The game has 2 playersList, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
import { initGame, changePlayer } from './game-process'
import { loadDiceImage, displayDice } from './view'


const RESET_VALUE = 2;

const gameState = {
  scores: [0, 0],
  currentScore: 0,
  playersList: [],
  activePlayerId: 0,
  scoresForWin: 100,
}

initGame(gameState);

document.querySelector('.btn-roll').addEventListener('click', function() {
  let dice_1 = Math.floor(Math.random() * 6) + 1;
  let dice_2 = Math.floor(Math.random() * 6) + 1;

  loadDiceImage(dice_1, dice_2);
  displayDice();

  if (dice_1 !== RESET_VALUE && dice_2 !== RESET_VALUE && dice_1 !== dice_2) {
    gameState.currentScore += dice_1 + dice_2;
    document.getElementById('current-'+gameState.activePlayerId).textContent = gameState.currentScore;
    if (gameState.scores[gameState.activePlayerId] + gameState.currentScore >= gameState.scoresForWin) {
      if (!!localStorage.getItem(gameState.playersList[gameState.activePlayerId].name)) {
        let winCount = (+localStorage.getItem(gameState.playersList[gameState.activePlayerId].name)+1);
        localStorage.setItem(gameState.playersList[gameState.activePlayerId].name, winCount);
      }else {
        localStorage.setItem(gameState.playersList[gameState.activePlayerId].name, 1)
      }
      alert(`Player ${gameState.playersList[gameState.activePlayerId].name} won!!!`);
    }
    
  } else {
    changePlayer(gameState);
  }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
  gameState.scores[gameState.activePlayerId] += gameState.currentScore;
  document.querySelector(`#score-${gameState.activePlayerId}`).textContent = gameState.scores[gameState.activePlayerId];
  changePlayer(gameState);
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame(gameState);
});

document.querySelector('.btn-winners').addEventListener('click', function() {
  let winnersList = ''
  Object.keys(localStorage).sort((key, prevKey) => { 
    return (+localStorage.getItem(prevKey) - +localStorage.getItem(key)) }).forEach((el) => {
      winnersList +=`${el} : ${localStorage.getItem(el)}\n`
    })
  alert(winnersList)
});
