import React from "react";
import scissorHandsLeft from "../images/scissors-left.png";
import paperHandsLeft from "../images/paper-left.png";
import rockHandsLeft from "../images/rock-left.png";
import scissorHandsRight from "../images/scissors-right.png";
import paperHandsRight from "../images/paper-right.png";
import rockHandsRight from "../images/rock-right.png";
import "./Play.css";

let win = 0;
let draw = 0;
let lose = 0;
let counter = -1;

function Play(props) {
  let yourChoice = props.data;
  console.log(yourChoice);
  let robotChoice = getRandomChoice();
  console.log(robotChoice);
  let result = WinOrLose(yourChoice, robotChoice);
  return (
    <div>
      <div>
        <a className="score">
          {win}-{draw}-{lose}
        </a>
      </div>
      <div className="result">
        <img src={require(`../images/${yourChoice}-left.png`)} />
        <img src={require(`../images/${robotChoice}-right.png`)} />
      </div>
    </div>
  );
}
//
// yeye mb, they used to be returns, but we need else if
function WinOrLose(yourChoice, robotChoice) {
  let result = "win";
  let randomChoice = robotChoice;
  counter += 1;
  if (counter <= 0) {
    return;
  }

  // if yourChoice is passed as a string
  if (randomChoice == yourChoice) {
    result = "draw";
  } else if (yourChoice == "rock" && randomChoice == "paper") {
    result = "lose";
  } else if (yourChoice == "paper" && randomChoice == "scissors") {
    result = "lose";
  } else if (yourChoice == "scissors" && randomChoice == "rock") {
    result = "lose";
  }

  if (result == "win") {
    win += 1;
  } else if (result == "lose") {
    lose += 1;
  } else {
    draw += 1;
  }
  return;
}

function getRandomChoice() {
  let cpuChoiceValue = Math.floor(Math.random() * 3); // gives 0,1,2
  // uncomment below if you just want numbers instead of strings
  // return cpuChoiceValue
  let cpuChoice = "";
  switch (cpuChoiceValue) {
    case 0:
      cpuChoice = "rock";
      break;
    case 1:
      cpuChoice = "paper";
      break;
    case 2:
      cpuChoice = "scissors";
      break;
  }
  return cpuChoice;
}

export default Play;
