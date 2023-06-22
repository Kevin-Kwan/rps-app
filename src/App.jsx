import logo from "./logo.svg";
import scissorButton from "./images/scissors-button.png";
import paperButton from "./images/paper-button.png";
import rockButton from "./images/rock-button.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
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
}

function rockSelection() {
  console.log("rock Clicked");
}

function paperSelection() {
  console.log("paper Clicked");
}

function scissorsSelection() {
  console.log("scissors Clicked");
}

export default App;
