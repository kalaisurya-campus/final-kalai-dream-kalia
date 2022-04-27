import axios from "axios";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./styles/Notification.scss";
import notification from "../../../assets/dreams-images/notification.webp";
import { NavLink } from "react-router-dom";
import back_arrow from "../../../assets/dreams-images/back_fixed.png";
import Yourapplication from "../../../components/dreams/yourapplication/Yourapplication";
import DemoSampleCodeFunction from "../demoyourapplicaionsample/DemoSampleCodeFunction";
import Aos from "aos";
import api from '../Apiurls';

// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class Notification extends Component {
  constructor() {
    super();

    this.state = {
      datas_store: [],
    };
    // <Yourapplication name="kalai" />;
  }

  componentDidMount() {
    Aos.init();
    api
      .get("notifications/get_notifications/")
      .then((res) => {
        // console.log(res.data);
        this.setState({ datas_store: res.data.data });
      })
      .catch((err) => {
        console.log(err.res);
      });
  }

  // componentWillReceiveProps() {
  //   <Yourapplication name="kalai" />;
  // }
  // componentDidUpdate() {
  //   <Yourapplication name="kalai" />;
  // }
  render() {
    const { datas_store } = this.state;

    return (
      <>
        <div className="notification_section">
          <nav className="nav_notification">
            <NavLink to="/employserach">
              <button
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine"
              >
                Back
              </button>
            </NavLink>
            <div class="cards">
              <div class="card__icon">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1700"
                  data-aos-easing="ease-in-sine"
                >
                  Notifications
                </h1>
                {/* <p>{this.props.message}</p> */}
                {/* <button onClick={() => this.Data()}>clicke ddata</button> */}
              </div>
            </div>
          </nav>
          <div className="next_image_notification">
            <div className="left_notify">
              {datas_store ? (
                <div className="row px-4">
                  {datas_store.map((item, index) => {
                    return (
                      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 mt-5">
                        <NavLink
                          to={`/yourapplication/${item.applied}`}
                          className="nav_link"
                        >
                          {/* <NavLink
                          to="/yourapplication"
                          state={{
                            form: "hi",
                          }}
                        > */}
                          <div class="card">
                            <div className="split_cards">
                              <div className="left_cards">
                                <img
                                  src={item.job.company_image}
                                  // data-aos="fade-up"
                                  // data-aos-duration="1700"
                                  // data-aos-easing="ease-in-sine"
                                />
                                <p className="mt-3 company_name">
                                  {item.job.company_name}
                                </p>
                              </div>
                              <div className="right_cards">
                                {/* <h3>Application Sent</h3> */}
                                <p>{item.message}</p>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>No Data Found......</div>
              )}
            </div>
            <div className="right_notify">
              <img
                src={notification}
                className="mt-5"
                data-aos="fade-down"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Notification;

// function datata(props)
// {
//   return(
//     <>
//     <h1>thnak</h1>
//     <p>{props.name}</p>

//     </>
//   )
// }
