import { connect } from "react-redux";
import { RESTART } from "../actions";
import { Component } from "react";

export class RestartContainer extends Component {
  constructor(props) {
    super(props);
    this.onRestartClick = this.onRestartClick.bind(this);
  }

  onRestartClick() {
    this.props.dispatch(RESTART);
  }

  render() {
    return (
      <div>
        <button
          className="w-full h-12 text-center cursor-pointer "
          onClick={this.onRestartClick}
        >
          Начать заново
        </button>
      </div>
    );
  }
}

export const Restart = connect()(RestartContainer);
