import React, { Component } from "react";
import { stylesheet } from "./stylesheets/stylesheet";

export default class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = { progress: 0, color: "#c639b0" };

    const interval = setInterval(() => {
      if (this.state.progress >= 100) return clearInterval(interval);

      this.setState({ progress: this.state.progress + 1 });
    }, 50);
  }

  render() {
    const { progress } = this.state,
      label = `Progress - ${progress}%`;

    return (
      <progressbar
        label={label}
        onComplete={() => this.setState({ color: "green" })}
        class={stylesheet.bordered}
        filled={progress}
        top="60%"
        left="60%"
        width="40%"
        height="10%"
        style={{ bar: { bg: this.state.color } }}
      />
    );
  }
}
