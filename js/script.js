// Player Logic

function Player(name) {
  this.name = name;
  this.score = 0;
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");


// Game Logic

function Game() {  //possibly needs player1, player2
  this.players = [player1, player2];
  this.activePlayer = player1; // maybe something different later
  this.currentScore = 0;
  this.gameover = false;
  this.roll = 0;
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
  newGame.roll = roll;
  //document.getElementById("previous-roll-number").innerText = "Previous roll: " + roll;
  if (roll === 1) {
    newGame.currentScore = 0;
  } else {
    newGame.currentScore = newGame.currentScore + roll;
  }
  newGame.isGameover();
  console.log(newGame.activePlayer);
  //return newGame.currentScore;
  
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

function updateCurrentScore() {
  turnScore();
  document.getElementById("active-player").innerText = "Active player: " + newGame.activePlayer.name;
  document.getElementById("previous-roll-number").innerText = "Previous roll: " + newGame.roll;
  let activeTurnScore = newGame.currentScore;
  document.getElementById("turn-score").innerText = "Turn score: " + activeTurnScore;
  let activePlayerScore = newGame.activePlayer.score;
  document.getElementById("active-player-score").innerText = "Active player current score: " + activePlayerScore;
}

function changePlayers() {
  newTurn();
  document.getElementById("active-player").innerText = "Active player: " + newGame.activePlayer.name;
  document.getElementById("previous-roll-number").innerText = "Previous roll: " + newGame.roll;
  let activeTurnScore = newGame.currentScore;
  document.getElementById("turn-score").innerText = "Turn score: " + activeTurnScore;
  let activePlayerScore = newGame.activePlayer.score;
  document.getElementById("active-player-score").innerText = "Active player current score: " + activePlayerScore;
}

function handleGameButtons() {
  document.querySelector("button.roll-button").addEventListener("click", updateCurrentScore);
  document.querySelector("button.hold-button").addEventListener("click", changePlayers);
  document.querySelector("button.reset-button").addEventListener("click", scoreReset);
};

window.addEventListener("load", function () {
  handleGameButtons();
})