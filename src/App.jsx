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
        <img src={rockButton} alt="Scissors Button" />
        <img src={paperButton} alt="Scissors Button" />
        <img src={scissorButton} alt="Scissors Button" />
      </div>
    </div>
  );
}

export default App;
