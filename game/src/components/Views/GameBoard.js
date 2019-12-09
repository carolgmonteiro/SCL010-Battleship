import React, { Component, Fragment } from "react";
import Square from "../Buttons/Square";
import "./BoardOne.css";
import "./BoardTwo.css";
import "./GameBoard.css";
import "../../components/Buttons/Square.css";
import { Col, Row } from "reactstrap";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.piecesOne = [];
    // this.hitsPlayerTwo = [];
    this.piecesTwo = [];
    this.renderEnemyBoardOne = this.renderEnemyBoardOne.bind(this);
    this.handlePiecesEnemyBoardOne = this.handlePiecesEnemyBoardOne.bind(this);
    this.renderBoardTwo = this.renderBoardTwo.bind(this);
    this.handlePiecesPlayerTwo = this.handlePiecesPlayerTwo.bind(this);
    this.renderEnemyBoardTwo = this.renderEnemyBoardTwo.bind(this);
    this.handlePiecesEnemyBoardTwo = this.handlePiecesEnemyBoardTwo.bind(this);
    this.renderBoardOne = this.renderBoardOne.bind(this);
    this.handlePiecesPlayerOne = this.handlePiecesPlayerOne.bind(this);

    this.state = {
      playerOneIsNext: true,
      arrayPiecesPlayerOne: this.piecesOne,
      arrayPiecesPlayerTwo: this.piecesTwo,
      isOpenBoardTwo: false
    };
  }

  // FUNCION DE CAMBIO DE ESTADO BOARD 01
  handlePiecesPlayerOne(event, propKey) {
    event.preventDefault();
    if (this.piecesOne.length < 5) {
      this.piecesOne.push(propKey);
      console.log("PiecesOne", this.piecesOne);
      event.target.className = "btn-pieces-greta";
    } else {
      alert("It´s your turn to hit Donald!");
    }
    return this.piecesOne;
  }

  // FUNCION DE IMPRIMIR BOARD 01
  renderBoardOne() {
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
        clickFunc={this.handlePiecesPlayerOne}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO ENEMY BOARD 02
  handlePiecesEnemyBoardTwo(event, propKey) {
    event.preventDefault();
    if (this.piecesOne.includes(propKey)) {
      event.target.className = "btn-hit-pieces-two";
    } else {
      event.target.className = "btn-hit-pieces-two-fail";
    }
  }

  // FUNCION DE IMPRIMIR BOARD ENEMY 02
  renderEnemyBoardTwo() {
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
        clickFunc={this.handlePiecesEnemyBoardTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO BOARD 02
  handlePiecesPlayerTwo(event, propKey) {
    if (this.piecesTwo.length < 5) {
      this.piecesTwo.push(propKey);
      console.log("PiecesTwo", this.piecesTwo);

      event.target.className = "btn-pieces-donald";
    } else {
      alert("It´s your turn to hit Greta!");
    }
    return this.piecesTwo;
  }
  // FUNCION DE IMPRIMIR BOARD 02
  renderBoardTwo() {
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
        clickFunc={this.handlePiecesPlayerTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO ENEMY BOARD 01
  handlePiecesEnemyBoardOne(event, propKey) {
    event.preventDefault();
    if (this.piecesTwo.includes(propKey)) {
      console.log("HOLA");
      event.target.className = "btn-pieces-donald";
    } else {
      event.target.className = "btn-hit-pieces-two-fail";
    }
  }

  // FUNCION DE IMPRIMIR ENEMY BOARD 02
  renderEnemyBoardOne() {
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
        clickFunc={this.handlePiecesEnemyBoardOne}
        height={e.height}
        width={e.width}
        isActive={e.isActive}
      />
    ));
  }

  // open and close in the same button "Create Event"
  handleBoardTwoIsOpen = () => {
    this.setState(prevState => ({
      isOpenBoardTwo: !prevState.isOpenBoardTwo
    }));
  };

  render() {
    return (
      <Fragment>
        <Col className="game">
          <Col className="game-board">
            <img
              className="logo"
              src={require("../Views/img/BATTLE OF POWER-logo-gameboard.svg")}
              alt="logo-room"
            />
            <div className="table" id="greta">
              <Row>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/GRETA MASK-01.png")}
                    alt="greta"
                  />
                  <p>Greta | My board</p>

                  {/* <BoardOne className="home-content" propKey={propKey} /> */}
                  <Row>
                    <Col xs="10">
                      <div className="border1-row">
                        {this.renderBoardOne(25)}
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col xs="4">
                  <button
                    className="btn-start"
                    onClick={this.handleBoardTwoIsOpen}
                  >
                    BATTLE DONALD
                  </button>
                </Col>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/DONALD-01.png")}
                    alt="trump"
                  />
                  <p> Donald | Board Enemy </p>
                  <Row>
                    <Col xs="10">
                      <div className="boardEnemy">
                        {this.renderEnemyBoardOne(25)}
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Row>
              <div className="table" id="Donald">
                <Row>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/DONALD-01.png")}
                      alt="trump"
                    />
                    <p>Donald | My Board</p>
                    <Row>
                      <Col xs="10">
                        <div className="border2-row">
                          {this.renderBoardTwo(25)}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="4">
                    <button
                      className="btn-start"
                      onClick={this.handleBoardTwoIsOpen}
                    >
                      BATTLE
                    </button>
                  </Col>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/GRETA MASK-01.png")}
                      alt="greta"
                    />
                    <p> Greta | Board Enemy </p>
                    <Row>
                      <Col xs="10">
                        <div className="border2-row">
                          {this.renderEnemyBoardTwo(25)}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Col>
      </Fragment>
    );
  }
}
export default GameBoard;
