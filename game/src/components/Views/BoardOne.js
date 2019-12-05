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
      arrayPiecesPlayerOne: this.pieces,
      isActive: false,
      background: "white"
    };
  }

  handleClick(event, propKey) {
    console.log("testeando", propKey);
    const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);

    if (this.pieces.length <= 2) {
      this.pieces.push(propKey);
      console.log("Piezas", this.pieces);

      event.target.style.background = "red";
    } else {
      alert(" Solo puedes colocar 3 piezas ");
    }
    return this.pieces;
  }

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
          width: y,
          isActive: false
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      <SquareOne
        key={e.key}
        propKey={e.key}
        clickFunc={this.handleClick}
        style={{ background: this.state.background }}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  render() {
    return (
      <div className="board-me">
        <Container>
          <div className="border1-row">{this.renderSquare(9)}</div>
        </Container>
      </div>
    );
  }
}

export default BoardOne;
