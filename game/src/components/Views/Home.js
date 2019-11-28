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
        <Col className="header-home">
          <h1>BATTLE OF POWERS</h1>
          <h3>The battle to save or destroy the world!</h3>
        </Col>
        <Row>
          <div className="text-content">
            <p>
              En una imponente guerra épica, donde se enfrenta Greta Thunberg y
              Donald Trump con su poder político, teniendo 2 opciones : poder
              salvar a la Tierra o generar el comienzo de una extinción masiva.
              ¿Existirá realmente el cambio Climático? ¿Se salvará el planeta ?
            </p>
          </div>
        </Row>
        <Col className="home-content">
          <Link to="/GameBoard">
            <button className="btn-start">START</button>
          </Link>
        </Col>
      </Container>
    );
  }
}
export default Home;
