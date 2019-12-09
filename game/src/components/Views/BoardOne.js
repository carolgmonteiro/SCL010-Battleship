import React, { Component } from "react";
import Square from "../Buttons/Square";
import "./BoardOne.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

class BoardOne extends Component {
  constructor(props) {
    super(props);
    this.piecesOne = [];
    this.renderSquare = this.renderSquare.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerOne: this.piecesOne,
      isActive: false
    };
  }

  handleClick(event, propKey) {
    event.preventDefault();
    // console.log("testeando", propKey);
    // const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    // console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);

    if (this.piecesOne.length < 5) {
      this.piecesOne.push(propKey);
      console.log("PiecesOne", this.piecesOne);

      event.target.className = "btn-pieces-greta";
    } else {
      alert("It´s your turn to hit Donald!");
    }
    return this.piecesOne;
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
          <div className="border1-row">{this.renderSquare(25)}</div>
        </Col>
        {/* <Col>
          <Link to="/">
            <button className="btn-start">Home</button>
          </Link>
          <button className="btn-start" type="submit">
            BATTLE
          </button>
        </Col> */}
      </Row>
    );
  }
}

export default BoardOne;
