import React from "react";
import "./App.css";
import "./bootstrap.min.css";
//import Home from "./components/Views/Home";
// import { Container, Row, Col } from "reactstrap";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameBoard from "../src/components/Views/GameBoard";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Switch> */}
      {/* <Route exact path="/" component={GameBoard} /> */}
      <GameBoard />
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/GameBoard" component={GameBoard} /> */}
      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
