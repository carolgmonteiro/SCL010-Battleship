import React, { Component } from "react";
import BtnStart from "../Buttons/BtnStart";
import "./Home.css";
import Game from "../Views/Game";
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
        <h1>BATTLE OF POWERS</h1>
        <h3>The battle to save or destroy the world!</h3>
        <BtnStart onClick={this.start} text="START" />
        <Game />
      </div>
    );
  }
}

export default Home;
