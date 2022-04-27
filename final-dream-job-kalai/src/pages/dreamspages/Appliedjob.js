import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import Appliedjobs from "../../components/dreams/managerstatus/appliedjobs/Appliedjobs";
class Appliedjob extends Component {
  render() {
    return (
      <div>
        <Appliedjobs />
      </div>
    );
  }
}

export default withRouter(Appliedjob);
