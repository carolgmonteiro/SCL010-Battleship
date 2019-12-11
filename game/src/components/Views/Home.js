import React, { Component, Fragment } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Col className="container">
          <img
            id="logo"
            src={require("../Views/img/BATTLE OF POWER-logo-homepage-01.svg")}
            alt="logo-room"
          />
          <Col className="Sub-title">
            <p>
              Will there really be climate Change? Will the planet be saved?
            </p>
          </Col>
          <Col className="text-content">
            <p>YOU CAN SAVE OR DESTROY THE WORLD!!</p>
          </Col>
          <Col className="home-content">
            <Link to="/gameboard">
              <button className="btn-play"> LET THE GAMES BEGIN! </button>
            </Link>
          </Col>
        </Col>
      </Fragment>
    );
  }
}
export default Home;
