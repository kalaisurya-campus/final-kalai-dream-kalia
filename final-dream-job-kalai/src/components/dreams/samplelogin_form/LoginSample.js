import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import axios from "axios";
import api from "../Apiurls";
const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email").required("Required"),
  password: Yup.string()
    .required("Password Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Enter Correct Password"
    ),
});

class LoginSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHidePassword: false,
      industry_selected: null,
    };
    this.showError = this.showError.bind(this);
    this.onchange = this.onchange.bind(this);
    this.onsubmitform = this.onsubmitform.bind(this);
  }

  forgotpassword = () => {
    this.props.history.push("/ForgotPassword");
  };
  onchange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showError() {
    this.toast.show({
      severity: "error",
      summary: "Error Message",
      detail: "Email or Password INVALID",
      life: 5000,
    });
  }
  componentDidMount() {
    api
      .post("manage_users/login/", this.state)
      .then((res) => {
        // console.log(res.data);
        if (res.status == 200) {
          console.log(res.data);
          let token = document.cookie.split(";");
          // console.log(token);
          let payload = null;
          if (token) {
            token.forEach((item) => {
              if (item.startsWith("header=")) {
                // console.log(item)
                payload = item.split("=")[1];
                // console.log(payload);
              }
            });
            // console.log(payload);

            if (payload) {
              let info = JSON.parse(atob(payload.split(".")[1]));
              // console.log(info);
              // console.log(info.user_type
              let data = this.setState({ empty_store: info });
              // console.log(data);

              return info;
            }
            console.error("no token");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          
          // console.log(values);

          // console.log("formdata",formData)

          validationSchema={SigninSchema}
        >
          <Form className="customForm mt-3" onSubmit={this.onsubmitform}>
            <div className="form-group mt-5">
              <label className="label" htmlFor="name">
                Email
              </label>
              <Field
                name="email"
                type="text"
                value={this.state.email}
                onchange={this.change}
              />
              <ErrorMessage name="email" className="ms-5">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-group mt-2">
              <label className="label" htmlFor="password">
                Password
              </label>
              <div className="d-flex flex-row">
                <Field
                  name="password"
                  value={this.state.password}
                  onChange={this.change}
                  type={this.state.showHidePassword ? "text" : "password"}
                />
                <button
                  class={
                    this.state.showHidePassword
                      ? "fa-solid fa-eye eye-icon"
                      : "fa-solid fa-eye-slash eye-icon"
                  }
                  onClick={() =>
                    this.setState({
                      showHidePassword: !this.state.showHidePassword,
                    })
                  }
                ></button>
              </div>
              <div>
                <ErrorMessage name="password">
                  {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>

            <button type="submit" className="btn-blue mx-auto mt-5">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default LoginSample;
