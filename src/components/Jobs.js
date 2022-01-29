import React, { Component } from "react";
import { stylesheet } from "./stylesheets/stylesheet";

export default class Jobs extends Component {
  render() {
    return (
      <box
        label="Jobs"
        class={stylesheet.bordered}
        left="60%"
        width="40%"
        height="60%"
      />
    );
  }
}
