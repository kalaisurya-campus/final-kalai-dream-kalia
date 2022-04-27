import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Homepage from "../../components/dreams/homepage/Homepage";
class Homepages extends Component {
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

export default withRouter(Homepages);
