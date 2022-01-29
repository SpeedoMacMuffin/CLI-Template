import React, { Component } from "react";
import { stylesheet } from "./stylesheets/stylesheet";

export default class Request extends Component {
  render() {
    return (
      <box label="Request" class={stylesheet.bordered} top="70%" width="30%">
        {0}
      </box>
    );
  }
}
