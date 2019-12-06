import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { Col, Row, Container } from "reactstrap";
// import Home from "../src/components/Views/Home";

// import Home from "./components/Views/Home";
// import { Container, Row, Col } from "reactstrap";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameBoard from "../src/components/Views/GameBoard";

function App() {
  return (
    <main className="App">
      <Container>
        {/* <Home /> */}
        <GameBoard />
        {/* <Router>
        <Switch>
          <Route exact path="/" component={GameBoard} />
          <Route exact path="/" component={Home} />
          <Route path="/GameBoard" component={GameBoard} />
        </Switch>
      </Router> */}
      </Container>
    </main>
  );
}

export default App;
