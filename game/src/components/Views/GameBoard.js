import React, { Component } from "react";
import BoardOne from "./BoardOne";
// import BoardTwo from "./BoardTwo";
import "./GameBoard.css";
// import "./Home.css";
import { Col, Row, Container } from "reactstrap";
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
  render() {
    const {
      data,
      incrementCounter,
      decrementCounter,
      value,
      propKey
    } = this.props;

    return (
      <Container className="game">
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
              {/* <Link to="/"> */}
              <button className="btn-start"> START</button>

              {/* </Link> */}
            </Col>
          </Col>
          <Row>
            <Col xs="5">
              <BoardOne
                propKey={propKey}
                value={value}
                // onClick={this.handleClick}
                // squaresInBoard={current.squaresInBoard}
              />
            </Col>
            <Col xs="5">
              <p>{}</p>
              <h3>Puntaje {data} </h3>
              <button onClick={incrementCounter} className="btn btn-success">
                +
              </button>
              <button onClick={decrementCounter} className="btn btn-danger">
                -
              </button>
            </Col>
            {/* <Col xs="4">
              <BoardTwo
                onClick={i => this.handleClick(i)}
                squares={current.squares}
              />
            </Col> */}
          </Row>
        </Col>
      </Container>
    );
  }
}
export default connect(mapState, actions)(GameBoard);
