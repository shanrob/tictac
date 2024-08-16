// This is the component for the board of the game. It is a 3x3 grid of squares.

import "../App.css";
import Square from "./Square";

function Board(props) {
  return (
    <div className="board">
      {props.squares.map((square, index) => (
        <Square
          key={index}
          index={index}
          value={square}
          player={props.player}
          squares={props.squares}
          setPlayer={props.setPlayer}
          setSquares={props.setSquares}
        />
      ))}
    </div>
  );
}

export default Board;
