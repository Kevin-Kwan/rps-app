import logo from "./logo.svg";
import scissorButton from "./images/scissors-button.png";
import paperButton from "./images/paper-button.png";
import rockButton from "./images/rock-button.png";
import Play from "./components/Play";
import { useState, useEffect } from "react";
import "./App.css";

let shot = "rock";
let currentRound = 0;

function App() {
  const [round, setRound] = useState("0");

  useEffect(() => {
    console.log(round, "- Has changed");
  }, [round]);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <header className="App-header">Score</header>
      </div>
      <div>
        <Play data={shot} />
      </div>
      <a className="Selection-text">Select Rock, Paper, or Scissors Below</a>
      <div className="Buttons-container">
        <button onClick={rockSelection}>
          <img src={rockButton} alt="Rock Button" />
        </button>
        <button onClick={paperSelection}>
          <img src={paperButton} alt="Paper Button" />
        </button>
        <button onClick={scissorsSelection}>
          <img src={scissorButton} alt="Scissors Button" />
        </button>
      </div>
    </div>
  );

  function rockSelection() {
    shot = "rock";
    currentRound += 1;
    setRound(currentRound);
    console.log("Button Rock");
  }

  function paperSelection() {
    shot = "paper";
    setRound((currentRound += 1));
  }

  function scissorsSelection() {
    shot = "scissors";
    setRound((currentRound += 1));
  }
}

export default App;
