import React, { Component } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./BoardOne.css";
import { Container } from "reactstrap";

class BoardOne extends Component {
  constructor(props) {
    super(props);
    this.pieces = [];
    this.renderSquare = this.renderSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerOne: this.pieces
    };
  }

  handleClick(event, propKey) {
    console.log("testeando", propKey);
    const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);
    if (this.pieces.length <= 2) {
      this.pieces.push(propKey);
      console.log("Piezas", this.pieces);
    } else {
      alert("no mas piezas");
    }
    return this.pieces;
  }
  //lalalalal
  renderSquare() {
    let board = [];
    let boardHeight = 3;
    let boardWidth = 3;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `${x}${y}`;
        console.log("board", board);
        cellInfo = {
          key: key,
          height: x,
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <SquareOne propKey={e.key} clickFunc={this.handleClick} />
    ));
  }

  render() {
    return (
      <div className="board-me">
        <Container>
          <div className="border1-row">{this.renderSquare(9)}</div>
          {/* <div className="border1-row">{this.renderSquare(9)}</div> */}

          {/* <div className="border1-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="border1-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="border1-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div> */}
        </Container>
      </div>
    );
  }
}

export default BoardOne;
