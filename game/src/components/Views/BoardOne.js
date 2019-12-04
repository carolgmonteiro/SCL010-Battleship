import React, { Component, useState } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./BoardOne.css";
import { Container } from "reactstrap";
import BtnTest from "../Buttons/BtnTest";

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
      color: "white"
    };
  }

  handleClick(event, propKey) {
    console.log("testeando", propKey);
    const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);

    if (this.pieces.length <= 2) {
      this.pieces.push(propKey);
      console.log("Piezas", this.pieces);
      this.setState({
        color: "red"
      });
    } else {
      alert("no mas piezas");
    }
    return this.pieces;
  }

  renderSquare() {
    let board = [];
    // let boardHeight = 3;
    // let boardWidth = 3;
    let key;
    let cellInfo;
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
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
        style={{ background: this.state.color }}
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
          <BtnTest />
          <div className="border1-row">{this.renderSquare(9)}</div>
        </Container>
      </div>
    );
  }
}

export default BoardOne;
