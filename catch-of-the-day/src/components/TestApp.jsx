import React, { Component } from "react";
import SfcChild from "./SfcChild";

class TestApp extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>I'm the parent App component</p>
        <SfcChild code="HTML" />
      </React.Fragment>
    );
  }
}

export default TestApp;
