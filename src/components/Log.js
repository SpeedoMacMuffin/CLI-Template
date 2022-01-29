import React, { Component } from "react";
import { stylesheet } from "./stylesheets/stylesheet";

export default class Log extends Component {
  render() {
    return (
      <box
        label="Log"
        class={stylesheet.bordered}
        width="60%"
        height="70%"
        draggable={true}
      >
        {0}
      </box>
    );
  }
}
