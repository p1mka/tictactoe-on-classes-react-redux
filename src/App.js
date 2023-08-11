import { Playground, Restart } from "./components";
import { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="bg-white w-96">
        <Playground />
        <Restart />
      </div>
    );
  }
}
