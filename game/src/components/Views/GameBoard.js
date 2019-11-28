import React, { Component } from "react";
import Board1 from "./Board1";
import Board2 from "./Board2";
import "./Game.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOne: true,
      stepNumber: 0,
      steps: [{ squares: Array(9).fill(null) }]
    };
  }
  handleClick(i) {
    const steps = this.state.steps.slice(0, this.state.stepNumber + 1);
    const current = steps[steps.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.playerOne ? "miss" : "hit";
    this.setState({
      steps: steps.concat({
        squares: squares
      }),
      playerOne: !this.state.playerOne,
      stepNumber: steps.length
    });
  }
  render() {
    const steps = this.state.steps;
    const current = steps[this.state.stepNumber];
    return (
      <div className="game">
        <div className="game-board">
          <h1>BATTLE OF POWERS</h1>
          <h3>The battle to save or destroy the world!</h3>
          <Link to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </Link>
          <Row>
            <Col>
              <Board1
                onClick={i => this.handleClick(i)}
                squares={current.squares}
              />
            </Col>
            <Col>
              <Board2
                onClick={i => this.handleClick(i)}
                squares={current.squares}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default GameBoard;
