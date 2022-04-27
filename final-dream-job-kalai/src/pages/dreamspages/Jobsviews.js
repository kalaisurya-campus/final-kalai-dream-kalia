import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Jobsview from "../../components/dreams/managerstatus/jobsviewpage/Jobsview";

class Jobsviews extends Component {
  render() {
    return (
      <div>
       <Jobsview/>
      </div>
    );
  }
}

export default withRouter(Jobsviews);
