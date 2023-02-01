'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number entered';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You won!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high!!';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low!!';
  }
});
