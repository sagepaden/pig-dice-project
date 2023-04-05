function Player(name) {
  this.name = name;
  this.score = 0;
}

function diceRoller() {
  const min = Math.ceil(1);
  const max = Math.floor(6);
  return  Math.floor(Math.random() * (max - min + 1) + min);
}

let player1 = new Player("player1");

let currentScore;

function turnScore(event) {
  event.preventDefault();
  const roll = diceRoller();
  if (roll === 1) {
    let currentScore = 0;
  } else {
    
  }
}