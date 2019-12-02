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

    for (let x = 0; x < boardHeight; x++) {
      let row = [];
      for (let y = 0; y < boardWidth; y++) {
        row[y] = { x, y };

        console.log("row", row[y]);
      }

      board[x] = row;
    }
    console.log("board", board);
    return board.map(squares =>
      squares.map(place => (
        <SquareOne
          key={`${place.x}${place.y}`}
          x={place.x}
          y={place.y}
          propKey={`${place.x}${place.y}`}
          // value={this.props.squaresInBoard[place.x][place.y]}
          onClick={() => this.props.onClick(place.x, place.y)}
        />
      ))
    );
  }

  handleClick(x, y) {
    let pieces;
    console.log("%d, %d", x, y);
    console.log("clique");
    const arrayPieces = pieces.push(x, y);
    console.log(arrayPieces);
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
