import React from "react";
import "./Square.css";

function Square(props) {
  return (
    <button type="button" className="btn-square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
