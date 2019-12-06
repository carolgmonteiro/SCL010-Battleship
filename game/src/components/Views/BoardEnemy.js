import React, { Component } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./BoardEnemy.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class BoardEnemy extends Component {
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
    event.preventDefault();
    console.log("testeando", propKey);
  }

  renderSquare() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `Enemy${x}${y}`;
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
      <Row>
        <Col xs="10">
          <div className="boardEnemy">{this.renderSquare(9)}</div>
        </Col>
      </Row>
    );
  }
}

export default BoardEnemy;
