import React, { Component } from "react";
import Board from "./Board";
import "./Game.css";
import { Link } from "react-router-dom";

class Game extends Component {
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
          <Link to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </Link>
          <Board onClick={i => this.handleClick(i)} squares={current.squares} />
        </div>
      </div>
    );
  }
}

export default Game;
