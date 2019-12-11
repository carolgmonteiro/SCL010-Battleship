import React from "react";
import "./Square.css";

function Square({ propKey, clickFunc, classNameToReflect, height, width }) {
  return (
    <button
      key={propKey}
      height={height}
      width={width}
      type="button"
      className={classNameToReflect}
      onClick={event => {
        clickFunc(event, propKey);
      }}
    ></button>
  );
}

export default Square;
