"use strict";
/* 
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number! 🎉";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";

    // when player wins
  } else if (guess === answer) {
    console.log(document.querySelector(".message").textContent);
    document.querySelector(".message").textContent = "Correct number! 🎉";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = answer;

    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // when guess is wrong
  } else if (guess !== answer) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      if (guess > answer) {
        document.querySelector(".message").textContent = "📈 Too High!";
      } else {
        document.querySelector(".message").textContent = "📉 Too Low!";
      }
    } else {
      document.querySelector(".message").textContent = "You lost the game! 😩";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".number").textContent = "?";
});

////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and answer variables
3. Restore the initial conditions of the message, number, score and guess and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK
*/
