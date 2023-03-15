'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
var score = 20; //generates random number between 1 and 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const submit = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number !');
    document.querySelector('.number').textContent = secretNumber; //display the Secret Number After guessing it correctly
    document.querySelector('.highscore').textContent = score; //diplay score as a highscore
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High !' : '📉 Too low');
      score = score - 1;
      document.querySelector('.score').textContent = score; //To print the current score after decreasing it by 1
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
};

const reset = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};
document.querySelector('.check').addEventListener('click', submit);
document.querySelector('.again').addEventListener('click', reset);
