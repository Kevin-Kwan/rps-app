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
let startFlag = false;

function Play(props) {
  let yourChoice = props.data;
  let robotChoice = getRandomChoice();
  let result = WinOrLose(yourChoice, robotChoice);
  return (
    <div>
      <div>
        <a className="Score">
          {win}-{draw}-{lose}
        </a>
      </div>
      <div className="Result-images">
        {result === "win" ? (
          <div className="Win-container">
            <img
              src={require(`../images/${yourChoice}-left.png`)}
              className="Win"
              alt="Player Result"
            />
            <img
              src={require(`../images/${robotChoice}-right.png`)}
              alt="CPU Result"
            />
          </div>
        ) : result === "lose" ? (
          <div className="Lose-container">
            <img
              src={require(`../images/${yourChoice}-left.png`)}
              alt="Player Result"
            />
            <img
              src={require(`../images/${robotChoice}-right.png`)}
              className="Lose"
              alt="CPU Result"
            />
          </div>
        ) : (
          <div className="Draw-container">
            <img
              src={require(`../images/${yourChoice}-left.png`)}
              alt="Player Result"
            />
            <img
              src={require(`../images/${robotChoice}-right.png`)}
              alt="CPU Result"
            />
          </div>
        )}
      </div>
    </div>
  );
}
//
// yeye mb, they used to be returns, but we need else if
function WinOrLose(yourChoice, robotChoice) {
  let result = "TBD";
  let randomChoice = robotChoice;

  if (startFlag !== true) {
    startFlag = true;
    return;
  }
  result = "win";

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
  return result;
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
