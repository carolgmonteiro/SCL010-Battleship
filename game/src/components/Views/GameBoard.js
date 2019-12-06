import React, { Component, Fragment } from "react";
import BoardOne from "./BoardOne";
import BoardTwo from "./BoardTwo";
import "./GameBoard.css";
import { Col, Row, Container } from "reactstrap";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions/action";
import { Link } from "react-router-dom";
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
      <Fragment>
        <Col className="game">
          <Col className="game-board">
            <img
              className="logo"
              src={require("../Views/img/BATTLE OF POWER-logo-room.svg")}
              alt="logo-room"
            />
            {/* <Link to="/">
            <button className="btn btn-outline-secondary">Home</button>
          </Link> */}

            <div className="table">
              <Row>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/GRETA MASK-01.png")}
                    alt="trump"
                  />
                  <p> My Board</p>
                  <BoardOne
                    className="home-content"
                    propKey={propKey}
                    value={value}
                  />
                </Col>
                <Col xs="4">
                  <Link to="/">
                    <button className="btn-start">BATTLE</button>
                  </Link>
                </Col>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/DONALD-01.png")}
                    alt="trump"
                  />
                  <p> Board Enemy </p>
                  <BoardTwo
                    className="home-content"
                    propKey={propKey}
                    value={value}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Col>
      </Fragment>
    );
  }
}
export default connect(mapState, actions)(GameBoard);
