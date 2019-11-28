import React from "react";
import "./SquareOne.css";

function SquareOne(props) {
  return (
    <button type="button" className="btn-square1" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default SquareOne;
