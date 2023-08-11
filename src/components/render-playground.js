import { calculateWinner } from "./utils";
import { Square } from "./render-square";
import { Component } from "react";
import { connect } from "react-redux";
import { setXIsNext, setSquares } from "../actions";

export class PlaygroundContainer extends Component {
  constructor() {
    super();
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  onClick(i) {
    const nextSquares = this.props.squares.slice();
    if (calculateWinner(nextSquares)) {
      return;
    }
    nextSquares[i] = this.props.xIsNext ? "X" : "O";
    this.props.dispatch(setXIsNext(this.props.xIsNext));
    this.props.dispatch(setSquares(nextSquares));
  }

  render() {
    const winner = calculateWinner(this.props.squares);
    const status = winner
      ? "Победитель: " + winner
      : "Ход:" + (this.props.xIsNext ? "X" : "O");

    return (
      <>
        <div className="text-2xl text-center border border-black">{status}</div>
        <div>
          {this.numbers.map((number) => (
            <Square
              value={this.props.squares[number]}
              key={number}
              onClick={() => this.onClick(number)}
            />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  xIsNext: state.xIsNext,
  squares: state.squares,
});

export const Playground = connect(mapStateToProps)(PlaygroundContainer);
