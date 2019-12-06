import React, { Component } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./BoardOne.css";
import { Container, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

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
    event.preventDefault();
    console.log("testeando", propKey);
    const arrayPiecesPlayerOne = this.state.arrayPiecesPlayerOne;
    console.log("arrayPiecesPlayerOne", arrayPiecesPlayerOne);

    if (this.pieces.length <= 5) {
      this.pieces.push(propKey);
      console.log("Piezas", this.pieces);

      event.target.style.background = "red";
    } else {
      alert(" Solo puedes colocar 6 piezas ");
    }
    return this.pieces;
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   //para hacer update del evento
  //   if (this.state.id) {
  //     this.props.updateEvent(this.state);
  //   } else {
  //     //para crear nuevo evento
  //     this.props.createEvent(this.state);
  //   }
  // };

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
          <div className="border1-row">{this.renderSquare(9)}</div>
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
