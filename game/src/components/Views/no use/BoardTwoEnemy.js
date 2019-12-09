import React, { Component } from "react";
import Square from "../../Buttons/Square";
import "./BoardTwo.css";
import { Container, Col, Row } from "reactstrap";

class BoardTwo extends Component {
  constructor(props) {
    super(props);
    this.hitsPlayerTwo = [];
    this.renderSquare = this.renderSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerTwo: this.piecesTwo,
      isActive: false
    };
  }

  handleClick(event, propKey) {
    // console.log("testeando", propKey);
    // const arrayPiecesPlayerTwo = this.state.arrayPiecesPlayerTwo;
    // console.log("PiecesTwo", arrayPiecesPlayerTwo);

    if (this.hitsPlayerTwo.length < 1) {
      this.hitsPlayerTwo.push(propKey);
      console.log("PiecesTwo", this.hitsPlayerTwo);

      event.target.className = "btn-hit-pieces-two";
    } else {
    }
    return this.hitsPlayerTwo;
  }

  renderSquare() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `R${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y,
          isActive: false
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handleClick}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  render() {
    return (
      <Row>
        <Col xs="10">
          <div className="border2-row">{this.renderSquare(25)}</div>
        </Col>
      </Row>
    );
  }
}

export default BoardTwo;
