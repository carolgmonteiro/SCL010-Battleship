import React from "react";

const BtnStart = ({ text, onClick, type }) => (
  <button class="btn btn-outline-secondary" type={type} onClick={onClick}>
    {text}
  </button>
);

export default BtnStart;
