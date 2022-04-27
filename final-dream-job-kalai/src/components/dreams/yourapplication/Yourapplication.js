import React, { Component } from "react";
import axios from "axios";
import { NavLink, withRouter } from "react-router-dom";
import "./styles/Yourapplication.scss";
import Your_application from "../../../assets/dreams-images/your_application_images_page.jpg";
import Aos from "aos";

import api from '../Apiurls';

let id;
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class Yourapplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas_stored: [],
    };
    id = this.props.match.params.id;
  }

  componentDidMount() {
    Aos.init();
 
    // console.log(id);
    api
      .get("notifications/get_notification_details/", {
        params: {
          applied_id: id,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data.data);
          this.setState({ datas_stored: [res.data.data] });
        } else {
          console.log("welcome");
        }
      });
  }

  render() {
    const { datas_stored } = this.state;
    console.log(datas_stored);

    return (
      <>
        <div className="your_application">
          {/* <Data/> */}

          <nav className="nav_application">
            <NavLink to="/notification" className="nav-link">
              <button
                className="mt-2"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine"
              >
                Back
              </button>
            </NavLink>
            <h1
              data-aos="fade-down"
              data-aos-duration="1700"
              data-aos-easing="ease-in-sine"
            >
              Your Application{" "}
            </h1>
          </nav>
          <div className="split_your_application">
            <div className="left_split_your_application">
              <img
                src={Your_application}
                data-aos="fade-down"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="right_split_your_application">
              {datas_stored ? (
                <div>
                  {datas_stored.map((total, index) => {
                    return (
                      <div
                        class="col-sm-12 col-md-12 col-xl-12 col-xxl-12 mt-5 "
                        key={index}
                      >
                        <div class="lists">
                          <div class="card-body1">
                            <img
                              src={total.company_image}
                              data-aos="fade-left"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            />
                            <p
                              data-aos="fade-up"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                              className="mt-3"
                            >
                              {total.company_name}
                            </p>
                          </div>
                          <div class="card-body2">
                            <span
                              data-aos="fade-right"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {total.title}
                            </span>
                            <span
                              data-aos="fade-left"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {total.position}
                            </span>
                            <span
                              data-aos="fade-down"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {total.type} Part Time
                            </span>
                            <span
                              className="description"
                              data-aos="fade-up"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {total.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>false</div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Yourapplication);
