import React, { Component } from "react";
import Slider from "react-slick";
import axios from "axios";
import Aos from "aos";
import "./styles/Employeeitems.scss";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import api from "../Apiurls";
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class Employeeitems extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      store: [],
    };
  }
  componentDidMount() {
    Aos.init();
    // api
    //   .get("/")
    //   .then((res) => {
    //     if (res.status == 200) {
    //       //   console.log(res.data);
    //       this.setState({ data: res.data });
    //     } else {
    //       console.log("errror the message");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //   });
    api
      .get("manage_jobs/recent_jobs/")
      .then((res) => {
        if (res.status == 200) {
          // console.log(res);
          this.setState({ store: res.data.data });
        } else {
          console.log("error the url code!!");
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  
  render() {
    const { data, store } = this.state;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <div className="box">
          {data.length ? (
            <div className="row px-4">
              <h1
                data-aos="fade-left"
                data-aos="fade-left"
                data-aos-duration="1700"
                data-aos-easing="ease-in-sine "
                className="mb-5 mt-5"
              >
                Recent jobs
              </h1>

              {data.map((items, index) => {
                return (
                  <div class="col-sm-12 col-lg-10 col-xxl-10 mb-5 mt-5 col-md-12 mb-3 mt-3">
                    <div class="card">
                      <div className="sample_box">
                        <div className="left_box ">
                          <span
                            data-aos="fade-up"
                            data-aos-duration="1700"
                            data-aos-easing="ease-in-sine"
                          >
                            {items.name}
                          </span>
                          <span>{items.username}</span>
                        </div>
                        <div
                          className="right_box"
                          data-aos="fade-left"
                          data-aos-duration="2500"
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="another_api_call">
          {store.length ? (
            <div className="row px-4">
              {store.map((datas, index) => {
                return (
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6  col-xxl-6mb-5 mt-5 mb-5">
                    <NavLink to={`/jobapply/${datas.id}`} className="nav-link">
                      <div class="card">
                        <div className="split_slides">
                          <div className="left_slide">
                            {!datas.url ? (
                              <div>
                                <img
                                  src={datas.company_image}
                                  className="mb-4"
                                  data-aos="fade-right"
                                  data-aos-duration="1700"
                                  data-aos-easing="ease-in-sine"
                                />
                              </div>
                            ) : (
                              <div className="image_slide">
                                <img
                                  src={datas.url}
                                  data-aos="fade-left"
                                  data-aos-duration="1700"
                                  data-aos-easing="ease-in-sine"
                                />
                              </div>
                            )}
                            <p
                              data-aos="fade-up"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {datas.title}
                            </p>
                            {datas.type == 2 ? (
                              <div
                                data-aos="fade-down"
                                data-aos-duration="1700"
                                data-aos-easing="ease-in-sine"
                              >
                                Full time
                              </div>
                            ) : (
                              <div
                                data-aos="fade-left"
                                data-aos-duration="1700"
                                data-aos-easing="ease-in-sine"
                              >
                                Part time
                              </div>
                            )}
                          </div>
                          <div
                            className="right_slide"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <p
                              data-aos="fade-up"
                              data-aos-duration="1700"
                              data-aos-easing="ease-in-sine"
                            >
                              {datas.description}
                            </p>
                          </div>
                          {/* <img src={datas.company_image}/> */}
                        </div>
                      </div>
                    </NavLink>
                  </div>
                );
              })}
            </div>
          ) : (
            <div><h1 className="text-center fw-bold">No Data Found......</h1></div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(Employeeitems);
