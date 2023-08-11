import { Component } from "react";

export class Square extends Component {
  render() {
    return (
      <button
        className="w-1/3 h-28 cursor-pointer float-left text-7xl border border-black"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}
