![image](https://github.com/Anastasios3/Simple-Guess-My-Number-Game/assets/117446378/f8459cdc-2766-4827-8d0a-f2d99697b997)


Still Needs Improvements
//I'm too tired. It will be ready by Saturday 11/05/2024 morning
----> done!

'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
const guessEl = document.querySelector('.guess');

const displayMessage = message => {
  messageEl.textContent = message;
};

const updateScore = newScore => {
  score = newScore;
  scoreEl.textContent = score;
};

const updateHighscore = () => {
  if (score > highscore) {
    highscore = score;
    highscoreEl.textContent = highscore;
  }
};

const updateStyles = (backgroundColor, numberWidth) => {
  bodyEl.style.backgroundColor = backgroundColor;
  numberEl.style.width = numberWidth;
};

const resetGame = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateScore(20);
  displayMessage('Start guessing! 💭');
  numberEl.textContent = '?';
  guessEl.value = '';
  updateStyles('#222', '15rem');
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    displayMessage('No number 🥺');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    updateStyles('#60b347', '30rem');
    numberEl.textContent = secretNumber;
    updateHighscore();
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high! ☝️' : 'Too low! 👇');
      updateScore(score - 1);
    } else {
      displayMessage('You lost the game! 😭');
      updateScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', resetGame);


