import React, { Component } from "react";
import blessed from "blessed";
import { render } from "react-blessed";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return <Dashboard />;
  }
}

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "react-blessed hello world",
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

const component = render(<App />, screen);
