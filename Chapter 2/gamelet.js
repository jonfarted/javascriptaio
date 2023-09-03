/*
Gamelet: a staring point for a gamelet
Author: Jonathan McGhee
Version: 1.1
Instructions:
    Include gamelet.js in an HTML document containing
    and element with an id of 'ball'. The script will
    detect when the left, right, up or down arrow key is
    pressed and will move the ball element accordingly.
*/
const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let positionHorizontal = 0;
let positionVertical = 0;

//Distance the ball travels
const speed = 20;

//handleKeyPress responcs to certain key presses by updating the position
function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    positionHorizontal = positionHorizontal - speed;
  }
  if (e.code === "ArrowRight") {
    positionHorizontal = positionHorizontal + speed;
  }
  if (e.code === "ArrowUp") {
    positionVertical = positionVertical - speed;
  }
  if (e.code === "ArrowDown") {
    positionVertical = positionVertical + speed;
  }
  if (positionHorizontal < 0) {
    positionHorizontal = 0;
  }
  if (positionVertical < 0) {
    positionVertical = 0;
  }
  refresh();
}

//refresh changes the position of the ball
function refresh() {
  ball.style.left = positionHorizontal + "px";
  ball.style.top = positionVertical + "px";
}
