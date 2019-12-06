import React, { Component, Fragment } from "react";
import "./App.css";
import "./bootstrap.min.css";
import { Col, Row, Container } from "reactstrap";
import Home from "../src/components/Views/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameBoard from "../src/components/Views/GameBoard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <main className="App">
          <Route path="/gameboard" component={GameBoard} />
        </main>
      </Fragment>
    );
  }
}

export default App;
