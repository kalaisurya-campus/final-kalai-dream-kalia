import React, { Component } from "react";
import FormValidator from "../../../components/dreams/validator/FormValidator";
import "./styles/FormValidationCreate.scss";
import axios from "axios";
import { Redirect } from "react-router";

import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class FormValidationCreate extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "title",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Yoe Title.",
      },
      {
        field: "type",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your Type .",
      },

      {
        field: "position",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a  position",
      },

      {
        field: "company_name",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your company_name",
      },
      {
        field: "skills",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your skills",
      },
      {
        field: "state",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your State",
      },
      {
        field: "company_image",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your company_image",
      },
      {
        field: "description",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your description",
      },
      {
        field: "requirements",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your requirements",
      },
      {
        field: "location",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your location",
      },
    ]);
    this.state = {
      title: "",
      type: "",
      position: "",
      company_name: "",
      skills: "",
      company_image: "",
      description: "",
      requirements: "",
      location: "",

      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
//   passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
    api
      .post("manage_jobs/", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    // if (this.state.password === this.state.password) {
    //   <Redirect to="/login" />;
    // } else {
    //   alert("not success");
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="registrationForm" onSubmit={this.submit}>
              <h2>Create</h2>
              <div
                className={validation.title.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="title" className="mb-2">
                  userName
                </label>
                <input
                  type="string"
                  className="form-control"
                  name="title"
                  placeholder="Enter your title"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.title.message}</span>{" "}
              </div>

              <div
                className={validation.type.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="type" className="mb-2">
                  Email address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="type"
                  placeholder="Enter type"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.type.message}</span>{" "}
              </div>

              <div
                className={validation.position.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="position" className="mb-2">
                  position
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="position"
                  placeholder="Enter position"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.position.message}
                </span>{" "}
              </div>

              <div
                className={validation.company_name.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="company_name" className="mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_name"
                  placeholder="Entre company_name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.company_name.message}
                </span>{" "}
              </div>

              <div
                className={validation.skills.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="skills" className="mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  placeholder="Enter Your skills"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.skills.message}</span>{" "}
              </div>

              <div
                className={validation.company_image.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="company_image" className="mb-2">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company_image"
                  placeholder="Enter company_image"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.company_image.message}
                </span>{" "}
              </div>

              <div
                className={validation.description.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="description" className="mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Enter description"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.description.message}
                </span>{" "}
              </div>

              <div
                className={validation.requirements.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="requirements" className="mb-2">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="requirements"
                  placeholder="Entre requirements"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.requirements.message}
                </span>{" "}
              </div>

              <div
                className={validation.location.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="location" className="mb-2">
                  location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Entre location"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.location.message}
                </span>{" "}
              </div>

              <button
                onClick={this.handleFormSubmit}
                className="btn btn-primary mb-4 mt-2 px-4 py-2 "
              >
                {" "}
                Register{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default FormValidationCreate;
