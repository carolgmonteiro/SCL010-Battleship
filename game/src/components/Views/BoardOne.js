import React, { Component } from "react";
import SquareOne from "../Buttons/SquareOne";
import "./BoardOne.css";
import { Container } from "reactstrap";

class BoardOne extends Component {
  // renderSquare(boardKey) {

  //   return (
  //     <SquareOne
  //       key={boardKey}
  //       value={this.props.squaresInBoard[boardKey]}
  //       onClick={() => this.props.onClick(boardKey)}
  //     />
  //   );
  // }

  renderSquare() {
    let board = [];
    let boardHeight = 3;
    let boardWidth = 3;
    let keySquare = "";
    let key;
    let cellInfo;
    for (let x = 0; x < boardHeight; x++) {
      let square = [];
      for (let y = 0; y < boardWidth; y++) {
        square[y] = { x, y };
        key = `${x}${y}`;
        cellInfo = {
          key: key
        };

        console.log("cellInfo", cellInfo);
      }

      board[x] = square;
      // key = board;
      // keySquare = JSON.stringify({ key: key });
      console.log("keySquare", keySquare);
    }
    console.log("board", board);
    return board.map(squares =>
      squares.map(place => (
        <SquareOne
          key={`${place.x}${place.y}`}
          x={place.x}
          y={place.y}
          propKey={`${place.x}${place.y}`}
          // value={this.props.board[place.x][place.y]}
          onClick={() => this.props.onClick(place.x, place.y)}
        />
      ))
    );
  }

  render() {
    return (
      <div className="board-me">
        <Container>
          <div className="border1-row">{this.renderSquare(9)}</div>
          {/* <div className="border1-row">{this.renderSquare(9)}</div> */}

          {/* <div className="border1-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="border1-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="border1-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div> */}
        </Container>
      </div>
    );
  }
}

export default BoardOne;
