import React, { Component } from "react";
import "./styles/Success.scss";
import AOS from "aos";
import success from "../../../assets/dreams-images/success.jpg";
import { NavLink } from "react-router-dom";
import {withRouter} from 'react-router-dom';
class Success extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="success_page">
        <div className="right_success">
          <img
            src={success}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1700"
          />
          <h1
            className="mt-4 mb-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Success
          </h1>
          <h1
            className="mb-5"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
           You have successfully applied to the job...
          </h1>
          <button
            className="apply"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <NavLink to="/employserach/:id" className="nav_link">
              Expoler Jobs
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Success);
