import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Yournotify from "../../components/dreams/demoyourapplicaionsample/Yournotify";

class Notify extends Component {
  render() {
    return (
      <div>
       <Yournotify/>
      </div>
    );
  }
}

export default withRouter(Notify);
