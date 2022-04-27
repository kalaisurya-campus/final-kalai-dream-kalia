import React, { Component } from "react";
import Navbarapplication from "../navbarapplication/Navbarapplication";

import "./styles/Applications.scss";
import home_image from "../../../assets/dreams-images/home_page.png";
import home_naxt from "../../../assets/dreams-images/home_next.jpg";
import { NavLink } from "react-router-dom";
import Reviewapplication from "../reviewapplication/Reviewapplication";
import Aos from "aos";
class Applications extends Component {
  componentDidMount()
  {
    Aos.init();
  }
  render() {
    return (
      <div className="application_nav">
        <nav className="nav_application">
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Application
          </h1>
          {/* <img src={home_image} /> */}
          <NavLink to="/employserach">
            <img src={home_naxt} data-aos="fade-up" data-aos-duration="1500" />
          </NavLink>
        </nav>
        <Navbarapplication />
        {/* <Reviewapplication /> */}
      </div>
    );
  }
}

export default Applications;
