// Player Logic

function Player(name) {
  this.name = name;
  this.score = 0;
}

let player1 = new Player("player1");
let player2 = new Player("player2");



// Game Logic

function Game() {  //possibly needs player1, player2
  this.players = [player1, player2];
  this.activePlayer = player1; // maybe something different later
  this.currentScore = 0;
  this.gameover = false;
}

Game.prototype.switchPlayers = function() {
  this.activePlayer = this.activePlayer === player1? player2 : player1;
};

Game.prototype.isGameover = function() {
  if (newGame.currentScore === 0) {
    newGame.switchPlayers();
  } else if (this.currentScore + this.activePlayer.score >= 100) {
    console.log(this.activePlayer.name + " is the winner!");
  }
  //return activePlayer.score >= 100;
};



//Floating Functions

let newGame = new Game();

function diceRoller() {
  const min = Math.ceil(1);
  const max = Math.floor(6);
  return  Math.floor(Math.random() * (max - min + 1) + min);
}

function turnScore() {  //possibly needs event in argument
  //event.preventDefault();
  const roll = diceRoller();
  console.log(roll);
  if (roll === 1) {
    newGame.currentScore = 0;
  } else {
    newGame.currentScore = newGame.currentScore + roll;
  }
  newGame.isGameover();
  console.log(newGame.activePlayer);
  return newGame.currentScore;
};

function holdScore() {
  newGame.activePlayer.score = newGame.activePlayer.score + newGame.currentScore;  
}

function newTurn() {
  holdScore();
  newGame.switchPlayers();
  newGame.currentScore = 0;
}

//let currentScore;




