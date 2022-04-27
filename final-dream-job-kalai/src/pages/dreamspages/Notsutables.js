import React, { Component } from "react";
import Notsutable from "../../components/dreams/notsutable/Notsutable";
import { withRouter } from "react-router-dom";
class Notsutables extends Component {
  render() {
    return (
      <div>
        <Notsutable />
      </div>
    );
  }
}

export default withRouter(Notsutables);
