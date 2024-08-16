// This is a tic tac toe sqaure component. It is a button that displays an "X" or "O" when clicked.

import React from "react";
import "../App.css";

function Square(props) {
  function handleClick(index) {
    props.setPlayer(props.player === "X" ? "O" : "X");
    const tempSquares = props.squares;
    console.log("tempSquares: ", tempSquares);
    tempSquares[index] = props.player;
    props.setSquares(tempSquares);
  }

  return (
    <button className="square" onClick={() => handleClick(props.index)}>
      {props.value}
    </button>
  );
}

export default Square;
