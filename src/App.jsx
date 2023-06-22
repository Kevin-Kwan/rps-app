import logo from './logo.svg';
import scissorButton from './images/scissors-button.png';
import paperButton from './images/paper-button.png';
import rockButton from './images/rock-button.png';
import Play from './components/Play';
import { useState } from 'react';

import './App.css';

let shot = 'rock';

function App() {
  const [choice, setChoice] = useState('rock');
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Play data={choice} />
      </div>
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
    shot = 'rock';
    setChoice(shot);
  }

  function paperSelection() {
    shot = 'paper';
    setChoice(shot);
  }

  function scissorsSelection() {
    shot = 'scissors';
    setChoice(shot);
  }
}

export default App;
