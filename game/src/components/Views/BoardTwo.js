import React, { Component } from "react";
import "./BoardTwo.css";
import { Container } from "reactstrap";
import SquareTwo from "../Buttons/SquareTwo";

class BoardTwo extends Component {
  renderSquare(i) {
    return <SquareTwo />;
  }
  render() {
    return (
      <div className="board-enemy">
        <Container>
          <div className="border2-row">
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
          </div>
          <div className="border2-row">
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
          <div className="border2-row">
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
          </div>
        </Container>
      </div>
    );
  }
}

export default BoardTwo;
