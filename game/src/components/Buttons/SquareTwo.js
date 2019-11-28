import React from "react";
import "./SquareTwo.css";

function SquareTwo(props) {
  return (
    <button type="button" className="btn-square2" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default SquareTwo;
