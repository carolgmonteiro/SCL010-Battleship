import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";

class Home extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
  }
  start() {
    // eslint-disable-next-line no-alert
    alert("Hola!");
  }
  render() {
    return (
      <Container className="container">
        {/* <Row className="header-home">  */}
        <img
          id="logo"
          src={require("../Views/img/BATTLE OF POWER-logo-gameboard.svg")}
          alt="logo-room"
        />
        <Col className="Sub-title">
          <p>YOU CAN SAVE OR DESTROY THE WORLD!!</p>
        </Col>
        <Col className="text-content">
          <p>Will there really be climate Change? Will the planet be Saved?</p>
        </Col>
        <Col className="home-content">
          <Link to="/gameboard">
            <button className="btn-play"> START </button>
          </Link>
        </Col>
        {/* </Row> */}
      </Container>
    );
  }
}
export default Home;
