import React, { Component } from "react";

export class BtnTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "green"
    };
  }

  changeColor() {
    console.log("click");
    this.setState({
      color: "red"
    });
  }
  render() {
    return (
      <div>
        <button
          onClick={this.changeColor.bind(this)}
          style={{ background: this.state.color }}
        >
          CHANGE
        </button>
      </div>
    );
  }
}

export default BtnTest;
