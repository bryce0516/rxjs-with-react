import React, { Component } from "react";

export default class ErrorMessage extends Component {
  render() {
    if (!this.props.errorMesage) return null;
    return <div className="errorMessage">{this.props.errorMesage}</div>;
  }
}
