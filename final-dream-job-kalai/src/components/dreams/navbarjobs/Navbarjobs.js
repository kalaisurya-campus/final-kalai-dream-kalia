import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navabarjobs.scss";
import home_page from "../../../assets/dreams-images/home_page_logo.png";
class Navbarjobs extends Component {
  render() {
    return (
      <div className="navbar_jobs">
        <div className="small_nav">
          <NavLink to="/create">
            <img src={home_page} data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"/>
          </NavLink>
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            Jobs
          </h1>
        </div>
        <nav className="nav_jobs">
          <NavLink
            to="/jobsview"
            activeClassName="active_page"
            className="nav_link"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            <span className="jobs">Jobs</span>
          </NavLink>
          <NavLink
            to="/jobsview"
            activeClassName="active_page"
            className="nav_link"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
          <span className="jobs">Applied</span>
          </NavLink>
          <NavLink
            to="/jobsview"
            activeClassName="active_page"
            className="nav_link"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            <span className="jobs">Status</span>
          </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbarjobs;
