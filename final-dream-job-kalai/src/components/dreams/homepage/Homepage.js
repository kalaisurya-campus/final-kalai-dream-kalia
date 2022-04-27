import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Homepage.scss";
class Homepage extends Component {
  render() {
    return (
      <div className="home_page">
        <div className="pages">
        <h1 className="every"> Every moment is a fresh beginning</h1>
       <button className="sign_up"> <NavLink to="/signup" className="nav-link">SignUp</NavLink></button>
        <button className="login"><NavLink to="/login" className="nav-link">Login</NavLink></button>
        </div>
      </div>
    );
  }
}

export default Homepage;
