import React, { Component, Fragment } from "react";
import BoardOne from "./BoardOne";
import BoardTwo from "./BoardTwo";
import "./GameBoard.css";
import { Col, Row, Container } from "reactstrap";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "../../actions/action";
import { Link } from "react-router-dom";
import BoardEnemy from "./BoardEnemy";
//lee la data que está en testReducerGame.js
const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class GameBoard extends Component {
  state = {
    isOpenBoardTwo: false
  };

  // open and close in the same button "Create Event"
  handleBoardTwoIsOpen = () => {
    this.setState(prevState => ({
      isOpenBoardTwo: !prevState.isOpenBoardTwo
    }));
  };

  render() {
    const {
      data,
      incrementCounter,
      decrementCounter,

      value,
      propKey
    } = this.props;

    const { isOpenBoardTwo } = this.state;
    return (
      <Fragment>
        <Col className="game">
          <Col className="game-board">
            <img
              className="logo"
              src={require("../Views/img/BATTLE OF POWER-logo-gameboard.svg")}
              alt="logo-room"
            />
            <div className="table">
              <Row>
                <Col xs="4">
                  <img
                    className="faces"
                    src={require("./img/GRETA MASK-01.png")}
                    alt="greta"
                  />
                  <p>Greta | My board</p>

                  <BoardOne
                    className="home-content"
                    propKey={propKey}
                    value={value}
                  />
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
                    src={require("./img/DONALD-01.png")}
                    alt="trump"
                  />
                  <p> Donald | Board Enemy </p>
                  {isOpenBoardTwo && (
                    <BoardEnemy
                      className="home-content"
                      propKey={propKey}
                      value={value}
                    />
                  )}
                  {/* <BoardTwo
                    className="home-content"
                    propKey={propKey}
                    value={value}
                  /> */}
                </Col>
              </Row>
            </div>
            <Row>
              <div className="table">
                <Row>
                  <Col xs="4">
                    <img
                      className="faces"
                      src={require("./img/DONALD-01.png")}
                      alt="trump"
                    />
                    <p>Donald | My Board</p>
                    <BoardOne
                      className="home-content"
                      propKey={propKey}
                      value={value}
                    />
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
                    {isOpenBoardTwo && (
                      <BoardEnemy
                        className="home-content"
                        propKey={propKey}
                        value={value}
                      />
                    )}
                    {/* <BoardTwo
                    className="home-content"
                    propKey={propKey}
                    value={value}
                  /> */}
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
export default connect(mapState, actions)(GameBoard);
