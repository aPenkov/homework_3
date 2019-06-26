const diceElement_1 = document.querySelector('#dice_1');
const diceElement_2 = document.querySelector('#dice_2');

export function hideDice(){
  diceElement_1.style.display = 'none';
  diceElement_2.style.display = 'none';
}

export function displayDice() {
  diceElement_1.style.display = 'block';
  diceElement_2.style.display = 'block';
}

export function loadDiceImage(dice_1, dice_2) {
  diceElement_1.src = `dice-${dice_1}.png`;
  diceElement_2.src = `dice-${dice_2}.png`;
}
