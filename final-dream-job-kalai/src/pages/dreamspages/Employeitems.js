import React, { Component } from "react";
import Employeeitems from "../../components/dreams/employeeitem/Employeeitems";
import { withRouter } from "react-router-dom";
class Employeitems extends Component {
  render() {
    return (
      <div>
        <Employeeitems />
      </div>
    );
  }
}

export default withRouter(Employeitems);
