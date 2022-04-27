import React, { Component } from "react";
import FormValidator from "../../../components/dreams/validator/FormValidator";
import "./styles/FormCode.scss";
import axios from "axios";
import { Redirect } from "react-router";
import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class FormCode extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "username",
        method: "isEmpty",
        validWhen: false,
        message: "Enter username name.",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your email address.",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Enter valid email address.",
      },
      {
        field: "mobile_no",
        method: "isEmpty",
        validWhen: false,
        message: "Enter a phone number.",
      },
      {
        field: "mobile_no",
        method: "matches",
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
        validWhen: true,
        message: "Enter valid phone number.",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Enter password.",
      },
      {
        field: "password_confirmation",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Password confirmation.",
      },
      {
        field: "password_confirmation",
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: "Password and password confirmation do not match.",
      },
      {
        field: "address",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your address.",
      },
      {
        field: "city",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your City",
      },
      {
        field: "state",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your State",
      },
      {
        field: "country",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your Country",
      },
      {
        field: "skills",
        method: "isEmpty",
        validWhen: false,
        message: "Enter Your skills",
      },
      {
        field: "user_type",
        method: "isEmpty",
        validWhen: false,
        message: "Enter your user_type",
      },
      // {
      //   field: "company",
      //   method: "isEmpty",
      //   validWhen: false,
      //   message: "Enter Your Company",
      // },
    ]);
    this.state = {
      username: "",
      email: "",
      password: "",
      mobile_no: "",
      address: "",
      city: "",
      state: "",
      country: "",
      skills: "",
      user_type: "",
      company: "",
      password_confirmation: "",

      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
  passwordMatch = (confirmation, state) => state.password === confirmation;
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
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
      .post("manage_users/register/", this.state)
      .then((res) => {
        // console.log(res.data);
        if (res.status === 201) {
          console.log(res.data);
          console.log("welcome");
          // <Redirect to="/login"></Redirect>;
        } else {
          console.log("err this message");
        }
        // localStorage.setItem("token",res.data.token);
      })
      .catch((err) => {
        console.log(err.res);
      });
  };

  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    if (this.state.password === this.state.password) {
      <Redirect to="/login" />;
    } else {
      alert("not success");
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="registrationForm" onSubmit={this.submit}>
              <h2>Register Page</h2>
              <div
                className={validation.username.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="user_name" className="mb-2">
                  userName
                </label>
                <input
                  type="string"
                  className="form-control"
                  name="username"
                  placeholder="Full Name"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.username.message}
                </span>{" "}
              </div>
              <div
                className={validation.email.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="email" className="mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.email.message}</span>{" "}
              </div>
              <div
                className={validation.mobile_no.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="mobile_no" className="mb-2">
                  mobile (Enter only 10 digit Numbers)
                </label>
                <input
                  type="phone"
                  className="form-control"
                  name="mobile_no"
                  placeholder="Mobile Number"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.mobile_no.message}
                </span>{" "}
              </div>

              <div
                className={validation.address.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="address" className="mb-2">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Entre Address"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.address.message}</span>{" "}
              </div>

              <div
                className={validation.city.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="city" className="mb-2">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="Enter Your City"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.city.message}</span>{" "}
              </div>

              <div
                className={validation.state.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="state" className="mb-2">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  placeholder="Enter State"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.state.message}</span>{" "}
              </div>

              <div
                className={validation.country.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="country" className="mb-2">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  placeholder="Enter country"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.country.message}</span>{" "}
              </div>

              <div
                className={validation.skills.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="skills" className="mb-2">
                  Skills
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  placeholder="Entre Skills"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">{validation.skills.message}</span>{" "}
              </div>

              <div
                className={validation.user_type.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="user_type" className="mb-2">
                  User_type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="user_type"
                  placeholder="Entre User_type"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.user_type.message}
                </span>{" "}
              </div>

              <div
                className={validation.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="company" className="mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="company"
                  placeholder="Enter Company"
                  onChange={this.handleInputChange}
                />{" "}
                {/* <span className="help-block">{validation.company.message}</span>{" "} */}
              </div>

              <div
                className={validation.password.isInvalid && "has-error"}
                className="mb-4 mt-3"
              >
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.password.message}
                </span>{" "}
              </div>
              <div
                className={
                  validation.password_confirmation.isInvalid && "has-error"
                }
                className="mb-4 mt-3"
              >
                <label htmlFor="password_confirmation" className="mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  name="password_confirmation"
                  onChange={this.handleInputChange}
                />{" "}
                <span className="help-block">
                  {validation.password_confirmation.message}
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
export default FormCode;
