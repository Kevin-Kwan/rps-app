import React from 'react';

function Play(props) {}

function WinOrLose(yourChoice) {
  let result = 'win';
  let randomChoice = getRandomChoice();
  // if yourChoice is passed in as an number

  // if yourChoice is passed as a string
  if (randomChoice == yourChoice) {
    result = 'draw';
  }
  if (yourChoice == 'rock') {
    if (randomChoice == 'paper') {
      result = 'lose';
    }
  }
  if (yourChoice == 'paper') {
    if (randomChoice == 'scissors') {
      result = 'lose';
    }
  }
  if (yourChoice == 'scissors') {
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
export default Play;
