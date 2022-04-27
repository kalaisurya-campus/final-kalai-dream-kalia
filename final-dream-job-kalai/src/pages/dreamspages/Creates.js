import React, { Component } from "react";
import Create from "../../components/dreams/createjobs/Create";
import { withRouter } from "react-router";
class Creates extends Component {
  render() {
    return (
      <div>
        <Create />
      </div>
    );
  }
}

export default withRouter(Creates);
