// 'use strict';
// /*
// PROBLEM
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// */
// let secretNumber = Math.trunc(Math.random() * 20) + 1; //random gives us a number between 0 and 1. by multipling it with 20 we can get up to 19.99999 so that is why we add one. Also truncuate is στρογγυλός - απόλυτος αριθμός. δλδ το 15,798 γινεται 16.
// let score = 20;
// let highscore = 0;
// //document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value); //as we can see from the type of function. Anything we gen from an input field is almost always a string. To solve this problem we are using the Number() function to transform the variable into a number.
//   console.log(typeof guess);

//   // when the input is not a number
//   //   if (!guess) {
//   //     document.querySelector('.message').textContent = 'No number 🥺';
//   //   } else if (guess === secretNumber) {
//   //     // when the input is the correct number
//   //     document.querySelector('.message').textContent = 'Correct Number! 🎉'; // message for the correct number
//   //     document.querySelector('body').style.backgroundColor = '#60b347';
//   //     document.querySelector('.number').style.width = '30rem';
//   //     document.querySelector('.number').textContent = secretNumber;
//   //     if (score > highscore) {
//   //       //highscore configuration
//   //       highscore = score;
//   //       document.querySelector('.highscore').textContent = highscore;
//   //     }
//   //   } else if (guess > secretNumber) {
//   //     // when we are higher than the correct number
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too high! ☝️'; // message
//   //       score--;
//   //       document.querySelector('.score').textContent = score; // showing the score
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost the game! 😭'; // final message
//   //     }
//   //   } else if (guess < secretNumber) {
//   //     // when we are lower than the correct number
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = 'Too low! 👇'; // message
//   //       score--;
//   //       document.querySelector('.score').textContent = score; // showing the score
//   //     } else {
//   //       document.querySelector('.message').textContent = 'You lost the game! 😭'; // final message
//   //     }
//   //   }
//   // });
//   // -------------------------->>>       REFACTORING       <<<--------------------------------
//   if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secretNumber;
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         guess > secretNumber ? 'Too high! ☝️' : 'Too low! 👇';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game! 😭';
//       score = 0;
//       document.querySelector('.score').textContent = score;
//     }
//   }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.message').textContent = 'Start guessing! 💭';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
// /* // I dont like the fact that it works with allerts
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number 🥺';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     alert('Spot on! You guessed the right number!');
//   } else if (guess > secretNumber) {
//     if (guess - secretNumber <= 2) {
//       alert('You are very close! Just a bit too high!');
//     }
//     document.querySelector('.message').textContent = 'Too high! ☝️';
//   } else if (guess < secretNumber) {
//     if (secretNumber - guess <= 2) {
//       alert('You are very close! Just a bit too low!');
//     }
//     document.querySelector('.message').textContent = 'Too low! 👇';
//   }
//   */
// // -------------------------->>>       OPTIMAL REFACTORING       <<<--------------------------------

('use strict');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = newScore => {
  score = newScore;
  document.querySelector('.score').textContent = score;
};

const updateHighscore = () => {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
};

const updateNumberWidth = width => {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number 🥺');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('Correct Number! 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    updateNumberWidth('30rem');
    document.querySelector('.number').textContent = secretNumber;
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

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing! 💭');
  updateScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  updateNumberWidth('15rem');
});
