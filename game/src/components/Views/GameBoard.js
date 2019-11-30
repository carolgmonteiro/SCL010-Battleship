import React, { Component } from "react";
import Board1 from "./Board1";
import Board2 from "./Board2";
import "./GameBoard.css";
// import "./Home.css";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions/action";

//lee la data que está en testReducerGame.js
const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

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
    const { data, incrementCounter, decrementCounter } = this.props;
    const steps = this.state.steps;
    const current = steps[this.state.stepNumber];
    return (
      <div className="game">
        <Col className="game-board">
          <h1>BATTLE OF POWERS</h1>
          <h3>The battle to save or destroy the world!</h3>
          {/* <Link to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </Link> */}
          <Col className="text-content">
            <p>
              En una imponente guerra épica, donde se enfrenta Greta Thunberg y
              Donald Trump con su poder político, teniendo 2 opciones : poder
              salvar a la Tierra o generar el comienzo de una extinción masiva.
              ¿Existirá realmente el cambio Climático? ¿Se salvará el planeta ?
            </p>

            <Col className="home-content">
              <Link to="/">
                <button className="btn-start">START</button>
              </Link>
            </Col>
          </Col>
          <Row>
            <Col>
              <h3>Puntaje {data} </h3>
              <button onClick={incrementCounter} className="btn btn-success">
                +
              </button>
              <button onClick={decrementCounter} className="btn btn-danger">
                -
              </button>
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
        </Col>
      </div>
    );
  }
}
export default connect(mapState, actions)(GameBoard);
