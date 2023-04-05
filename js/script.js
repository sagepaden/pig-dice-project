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
let player2 = new Player("player2");

function Game() {  //possibly needs player1, player2
  this.players = [player1, player2];
  this.activePlayer = 0; // maybe something different later
  this.currentScore = 0;
  this.gameover = false;
}
Game.prototype.gameover = function() {
  return activePlayer.score >= 100;
}

//let currentScore;
let newGame = new Game();

function turnScore() {  //possibly needs event in argument
  //event.preventDefault();
  const roll = diceRoller();
  console.log(roll);
  if (roll === 1) {
    newGame.currentScore = 0;
  } else {
    newGame.currentScore = newGame.currentScore + roll;
  }
  return newGame.currentScore;
}

