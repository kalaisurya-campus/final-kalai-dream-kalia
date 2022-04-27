import { Component } from "react";
import { withRouter } from "react-router-dom";
import Login from "../../components/dreams/login/Login";

class Logins extends Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default withRouter(Logins);
