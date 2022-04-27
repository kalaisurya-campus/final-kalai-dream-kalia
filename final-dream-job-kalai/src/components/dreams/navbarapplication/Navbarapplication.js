import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbarapplication.scss";
class Navbarapplication extends Component {
  render() {
    return (
      <div className="nav_bar_application">
        <nav className="inside_application">
          <NavLink
            to="/reviewapplication"
            activeClassName="active_navbars"
            className="navlink"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            <h4>Review</h4>
          </NavLink>
          <NavLink
            exact
            to="/notsutableapplication"
            activeClassName="active_navbars"
            className="navlink"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            <h4>NotSuitable</h4>
          </NavLink>
          <NavLink
            exact
            to="/interviewapplication"
            activeClassName="active_navbars"
            className="navlink"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            <h4>Interview</h4>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbarapplication;
