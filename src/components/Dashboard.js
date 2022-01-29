import React, { Component } from "react";
import Stats from "./Stats";
import Progress from "./Progress";
import Jobs from "./Jobs";
import Response from "./Response";
import Request from "./Request";
import Log from "./Log";
import { stylesheet } from "./stylesheets/stylesheet";

export default class Dashboard extends Component {
  render() {
    return (
      <element>
        <Log />
        <Request />
        <Response />
        <Jobs />
        <Progress />
        <Stats />
      </element>
    );
  }
}
