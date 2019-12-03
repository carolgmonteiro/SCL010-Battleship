import React from "react";
import "./SquareOne.css";

function SquareOne({ propKey, clickFunc }) {
  return (
    <button
      key={propKey}
      type="button"
      className="btn-square1"
      onClick={event => {
        clickFunc(event, propKey);
      }}
    >
      {propKey}
    </button>
  );
}

export default SquareOne;
