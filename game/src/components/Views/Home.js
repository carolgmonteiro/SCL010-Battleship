import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
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
      <div className="container">
        <header className="header-home">
          <h1>BATTLE OF POWERS</h1>
          <h3>The battle to save or destroy the world!</h3>
        </header>
        <div className="home-content">
          <Link to="/GameBoard">
            <button className="btn btn-outline-secondary">START</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
