import React, { Component } from "react";
import { withRouter } from "react-router";
import EmployeeSearch from "../../components/dreams/employeeserach/EmployeeSearch";

class EmployeeSearchpage extends Component {
  render() {
    return (
      <div>
        <EmployeeSearch />
      </div>
    );
  }
}

export default withRouter(EmployeeSearchpage);
