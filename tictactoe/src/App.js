import { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [player, setPlayer] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(""));
  console.log(squares);

  return (
    <div className="App">
      <Board
        squares={squares}
        setSquares={setSquares}
        player={player}
        setPlayer={setPlayer}
      ></Board>
      <div>`It is Player {player}'s turn`</div>
    </div>
  );
}

export default App;
