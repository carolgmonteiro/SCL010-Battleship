import React, { Component } from "react";
import Square from "../Buttons/Square";
import "./BoardOneEnemy.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class BoardEnemy extends Component {
  constructor(props) {
    super(props);
    this.hitsPlayerOne = ["L11", "L23", "L04", "L42", "L30"];
    this.renderSquare = this.renderSquare.bind(this);
    this.handleHit = this.handleHit.bind(this);
    this.state = {
      playerOneIsNext: true,
      isActive: false
    };
  }

  handleHit(event, propKey) {
    event.preventDefault();
    // console.log("testeando", propKey);
    // const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    // console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);
    if (this.hitsPlayerOne.includes(propKey)) {
      console.log("poto");
      event.target.className = "btn-hit-pieces-one";
    } else {
      event.target.className = "btn-hit-pieces-one-water";
    }
  }

  renderSquare() {
    let board = [];
    let boardHeight = 5;
    let boardWidth = 5;
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      for (let y = 0; y < boardWidth; y++) {
        key = `L${x}${y}`;
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
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handleHit}
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
