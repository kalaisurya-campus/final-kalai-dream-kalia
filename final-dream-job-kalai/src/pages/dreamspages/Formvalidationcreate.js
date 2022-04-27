import React, { Component } from "react";
import FormValidationCreate from "../../components/dreams/formvalidationcreatepage/FormValidationCreate";
import {withRouter} from 'react-router-dom';
class Formvalidationcreate extends Component {
  render() {
    return (
      <div>
        <FormValidationCreate />
      </div>
    );
  }
}

export default withRouter(Formvalidationcreate);
