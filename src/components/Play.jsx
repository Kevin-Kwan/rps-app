import React from 'react';
import scissorHandsLeft from '../images/scissors-left.png';
import paperHandsLeft from '../images/paper-left.png';
import rockHandsLeft from '../images/rock-left.png';
import scissorHandsRight from '../images/scissors-right.png';
import paperHandsRight from '../images/paper-right.png';
import rockHandsRight from '../images/rock-right.png';

function Play(props) {
  console.log(props.data);
  let yourChoice = props.data;
  let robotChoice = getRandomChoice();
  // let result = WinOrLose(yourChoice, robotChoice);
  return (
    <div>
      <img src={require(`../images/${yourChoice}-left.png`)} />
      <img src={require(`../images/${robotChoice}-right.png`)} />
      {/* render scoreboard here and pass result? */}
      {/* im not sure how ruperto wants to do the rendering stuff */}
    </div>
  );
}
//
// yeye mb, they used to be returns, but we need else if
function WinOrLose(yourChoice, robotChoice) {
  let result = 'win';
  let randomChoice = robotChoice;

  // if yourChoice is passed as a string
  if (randomChoice == yourChoice) {
    result = 'draw';
  } else if (yourChoice == 'rock') {
    if (randomChoice == 'paper') {
      result = 'lose';
    }
  } else if (yourChoice == 'paper') {
    if (randomChoice == 'scissors') {
      result = 'lose';
    }
  } else if (yourChoice == 'scissors') {
    if (randomChoice == 'rock') {
      result = 'lose';
    }
  }
  return result;
}

function getRandomChoice() {
  let cpuChoiceValue = Math.floor(Math.random() * 3); // gives 0,1,2
  // uncomment below if you just want numbers instead of strings
  // return cpuChoiceValue
  let cpuChoice = '';
  switch (cpuChoiceValue) {
    case 0:
      cpuChoice = 'rock';
      break;
    case 1:
      cpuChoice = 'paper';
      break;
    case 2:
      cpuChoice = 'scissors';
      break;
  }
  return cpuChoice;
}

function setDisplay(shot, cpuChoice) {
  return (
    <div>
      <img src="shot var + left link" />
      <img src="cpu var + right link" />
    </div>
  );
}
export default Play;
