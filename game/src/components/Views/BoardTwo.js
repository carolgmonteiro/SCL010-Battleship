import React, { Component } from "react";
import SquareTwo from "../Buttons/SquareTwo";
import "./BoardTwo.css";
import { Container } from "reactstrap";

class BoardTwo extends Component {
  constructor(props) {
    super(props);
    this.piecesTwo = [];
    this.renderSquare = this.renderSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerOne: this.piecesTwo,
      isActive: false,
      background: "white"
    };
  }

  handleClick(event, propKey) {
    console.log("testeando", propKey);
    const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);

    if (this.piecesTwo.length <= 2) {
      this.piecesTwo.push(propKey);
      console.log("Piezas", this.piecesTwo);

      event.target.style.background = "red";
    } else {
      alert(" Solo puedes colocar 3 piezas ");
    }
    return this.piecesTwo;
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
      <SquareTwo
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
          <div className="border2-row">{this.renderSquare(9)}</div>
        </Container>
      </div>
    );
  }
}

export default BoardTwo;
