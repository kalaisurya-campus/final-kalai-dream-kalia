import React, { Component } from "react";
import Yourdetailsjobs from "../../components/dreams/yourdetailjobs/Yourdetailsjobs";
import { withRouter } from "react-router-dom";
class YourDetailspage extends Component {
  render() {
    return (
      <div>
        <Yourdetailsjobs />
      </div>
    );
  }
}

export default withRouter(YourDetailspage);
