import React, { Component } from "react";
import Statusview from "../../components/dreams/managerstatus/statuspage/Statusview";
import { withRouter } from "react-router-dom";
class Statusviews extends Component {
  render() {
    return (
      <div>
        <Statusview />
      </div>
    );
  }
}

export default withRouter(Statusviews);
