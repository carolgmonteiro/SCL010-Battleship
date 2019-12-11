import React, { Component, Fragment } from "react";
import Square from "../Buttons/Square";
import "./BoardOne.css";
import "./BoardTwo.css";
import "./GameBoard.css";
import "../../components/Buttons/Square.css";
import { Col, Row } from "reactstrap";
import { animateScroll as scroll } from "react-scroll";

class GameBoard extends Component {
  constructor(props) {
    super(props);
    // this.hitsFailEnemyOne = []; //Tablero enemigo player 02 hits fail
    // this.hitsEnemyTwo = []; //Tablero enemigo player 01 hits fail
    // this.hitsDamagedEnemyOne = []; //Tablero enemigo player 02 hits damaged
    // this.hitsDamagedEnemyTwo = []; //Tablero enemigo player 01 hits damaged

    this.renderEnemyBoardOne = this.renderEnemyBoardOne.bind(this);
    this.handlePiecesEnemyBoardOne = this.handlePiecesEnemyBoardOne.bind(this);
    this.renderBoardTwo = this.renderBoardTwo.bind(this);
    this.handlePiecesPlayerTwo = this.handlePiecesPlayerTwo.bind(this);
    this.renderEnemyBoardTwo = this.renderEnemyBoardTwo.bind(this);
    this.handlePiecesEnemyBoardTwo = this.handlePiecesEnemyBoardTwo.bind(this);
    this.renderBoardOne = this.renderBoardOne.bind(this);
    this.handlePiecesPlayerOne = this.handlePiecesPlayerOne.bind(this);

    this.state = {
      turn: true,
      arrayPiecesPlayerOne: [],
      arrayPiecesPlayerTwo: [],
      arrayHitsEnemyTwo: [],
      isOpenBoardTwo: false
    };
  }

  //SCROLL TOP DEL GAMEBOARD
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  //SCROLL BOTTOM DEL GAMEBOARD
  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  squareFunction;

  // FUNCION DE CAMBIO DE ESTADO BOARD 01
  handlePiecesPlayerOne(event, propKey) {
    event.preventDefault();
    if (this.state.arrayPiecesPlayerOne.length < 5) {
      this.setState({
        ...this.state,
        arrayPiecesPlayerOne: this.state.arrayPiecesPlayerOne.concat([propKey]),
        turn: !this.state.turn
      });
    } else {
      alert("It´s your turn to hit Donald!");
    }
    console.log("arrayPiecesPlayerOne", this.state);

    return this.state.arrayPiecesPlayerOne;
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
          width: y
        };
        board.push(cellInfo);
        console.log("cellInfo", cellInfo);
      }
    }
    return board.map(e => (
      // if( this.state.arrayHitsEnemyTwo.includes(e.key) &&
      // this.state.arrayPiecesPlayerOne.includes(e.key)){
      <Square
        key={e.key}
        propKey={e.key}
        clickFunc={this.handlePiecesPlayerOne}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        classNameToReflect={
          this.state.arrayHitsEnemyTwo.includes(e.key) &&
          this.state.arrayPiecesPlayerOne.includes(e.key)
            ? "btn-hit-pieces-fail"
            : this.state.arrayPiecesPlayerOne.includes(e.key)
            ? "btn-pieces-trees"
            : "btn-square1"
          // this.state.arrayHitsEnemyTwo.includes(e.key) &&
          // this.state.arrayPiecesPlayerOne.includes(e.key)
          //   ? "btn-pieces-trees"
          //   : "btn-square1"
        }
      />
    ));
  }

  // FUNCION DE CAMBIO DE ESTADO ENEMY BOARD 02
  handlePiecesEnemyBoardTwo(event, propKey) {
    event.preventDefault();
    // this.hitsEnemyTwo.push(propKey);
    if (this.state.playerOneIsNext === false) {
      this.setState({
        ...this.state,
        arrayPiecesPlayerOne: this.state.arrayPiecesPlayerOne.concat([propKey])
      });
      console.log("hitsEnemyTwo", this.hitsEnemyTwo);
    } else {
      alert("its greta");
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
        clickFunc={this.handlePiecesEnemyBoardTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
        classNameToReflect={
          this.state.arrayHitsEnemyTwo.includes(e.key) &&
          this.state.arrayPiecesPlayerOne.includes(e.key)
            ? "btn-hit-pieces-fail"
            : this.state.arrayPiecesPlayerOne.includes(e.key)
            ? "btn-pieces-trees"
            : "btn-square1"
        }
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
        clickFunc={this.handlePiecesPlayerTwo}
        style={{ className: this.state.className }}
        height={e.height}
        width={e.width}
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
      />
    ));
  }

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
                    src={require("./img/BATTLE OF POWER-greta.png")}
                    alt="greta"
                  />
                  {/* <p>My board</p> */}

                  <Col xs="11">
                    <div className="board">
                      <div className="border1-row">
                        {this.renderBoardOne(25)}
                      </div>
                    </div>
                  </Col>
                </Col>
                <Col xs="4">
                  <Row>
                    <img
                      className="VS"
                      src={require("./img/BATTLE OF POWER-VS.svg")}
                      alt="trump"
                    />
                  </Row>
                  <button className="btn-start" onClick={this.scrollToBottom}>
                    DONALD TURN
                  </button>
                </Col>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/BATTLE OF POWER-trump.png")}
                    alt="trump"
                  />
                  {/* <p> Enemy Board </p> */}

                  <Col xs="11">
                    <div className="board">
                      <div className="boardEnemy">
                        {this.renderEnemyBoardOne(25)}
                      </div>
                    </div>
                  </Col>
                </Col>
              </Row>
            </div>
            <Row>
              {/* <img
                className="logo"
                src={require("../Views/img/BATTLE OF POWER-logo-gameboard.svg")}
                alt="logo-room"
              /> */}
              <div className="table" id="Donald">
                <Row>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/BATTLE OF POWER-trump.png")}
                      alt="trump"
                    />
                    {/* <p>Donald | My Board</p> */}

                    <Col xs="11">
                      <div className="board">
                        <div className="border2-row">
                          {/* <img
                          className="board"
                          src={require("./img/BATTLE OF POWER-tierra-white.svg")}
                          alt="trump"
                        /> */}
                          {this.renderBoardTwo(25)}
                        </div>
                      </div>
                    </Col>
                  </Col>
                  <Col xs="4">
                    <button className="btn-start" onClick={this.scrollToTop}>
                      GRETA TURN
                    </button>
                  </Col>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/BATTLE OF POWER-greta.png")}
                      alt="greta"
                    />
                    {/* <p> Greta | Board Enemy </p> */}

                    <Col xs="11">
                      <div className="board">
                        <div className="border2-row">
                          {this.renderEnemyBoardTwo(25)}
                        </div>
                      </div>
                    </Col>
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
