import { Component } from "react";
import { withRouter } from "react-router-dom";

import Signup from "../../components/dreams/signup/Signup";

class Dreams extends Component {
  render() {
    return (
      <div>
        <Signup />
      </div>
    );
  }
}

export default withRouter(Dreams);
