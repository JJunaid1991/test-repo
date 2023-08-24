//create variables for each object so its easier to the system to recognize.
var objectOne = "rock";
var objectTwo = "paper";
var objectThree = "scissors";
var msgWin = `you won`

//create a function to check if player wins computer.

var doPlayerWinsComputer = function (getComputerGuess, input) {
  if (input == "paper" && getComputerGuess == `rock`) || (input == "stone" && getComputerGuess == `scissors`) || (input == "rock" && getComputerGuess == `scissors`);
  return `The Computer Chose ${getComputerGuess}, Congratulations, you won!`;
};
//create a function to check if Computer Wins Player.
var doComputerWinsPlayer = function (getComputerGuess, input) {
  if (input == "rock" && getComputerGuess == `paper`) || (input == "scissors" && getComputerGuess == `stone`) || (input == "paper" && getComputerGuess == `rock`)
   return `The Computer Chose ${getComputerGuess} and your guess was ${input}  you lost!`;
};

//create a function to check if player draws with the computer.
var doPlayerDrawComputer = function (getComputerGuess, input) {
  if (input == getComputerGuess);
  return `The Computer Chose ${getComputerGuess} and your guess was ${input} its a Draw, try again!`;
};

var main = function (input) {
  var computerGuess = getComputerGuess();
  var computerWinsPlayer = doPlayerWinsComputer()
  if (input > computerGuess) {
    return msgWin } 
    var computerWinsPlayer = doPlayerWinsComputer();
  var computerLosesPlayer = doComputerWinsPlayer();
  var computerDrawsPlayer = doPlayerDrawComputer();
if (input != objectOne || input != objectTwo || input != objectThree)
  var myOutputValue =
    "Please input either Rock, Paper or Scissors to play the game!";
    return myOutputValue;
};
//create a function for random computer guesses.
var getComputerGuess = function () {
  var randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return objectOne;
  }
  if (randomNum == 1) {
    return objectTwo;
  }
  return objectThree;
};
