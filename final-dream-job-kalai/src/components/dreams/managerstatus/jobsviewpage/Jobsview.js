import React, { Component } from "react";
import Navbarjobs from "../../navbarjobs/Navbarjobs";
import "./styles/Jobsview.scss";
import axios from "axios";
import jobsview from "../../../../assets/dreams-images/jobs_view_image.webp";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import { withRouter } from "react-router-dom";
import api from "../../Apiurls";
// import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Jobsview extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
    };
  }
  componentDidMount() {
    Aos.init();
    api
      .get("manage_jobs/")
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          this.setState({ datas: res.data.data });
        } else {
          console.log("error the message");
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  render() {
    const { datas } = this.state;
    return (
      <div className="jobs_view">
        {/* <Navbarjobs /> */}
        <nav className="jobs_nav">
          <button className="back">
            <NavLink to="/create" className="nav-link">Back</NavLink>
          </button>
          <h1>Jobs Page</h1>
        </nav>
        <div className="split_jobs">
          <div className="left_split_jobs">
            <img
              src={jobsview}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1700"
            />
          </div>
          <div className="right_split_jobs">
            {datas.length ? (
              <div className="inside_scrolls">
                {datas.map((item, index) => {
                  return (
                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-4 mt-5">
                      <NavLink
                        to={`/appliedpage/${item.id}`}
                        className="nav_links"
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1700"
                      >
                        <div class="card">
                          <div class="card-body">
                            <div className="left_card_jobs">
                              <img
                                src={item.company_image}
                                // data-aos="fade-right"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                              />
                              <p
                                className="mt-4"
                                // data-aos="fade-left"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                              >
                                {item.company_name}
                              </p>
                            </div>
                            <div className="right_card_jobs">
                              <span
                                // data-aos="fade-up"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                              >
                                {item.title}
                              </span>
                              <span
                                // data-aos="fade-down"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                              >
                                {item.position}
                              </span>
                              <span
                                // data-aos="fade-right"
                                // data-aos-easing="linear"
                                data-aos-duration="1700"
                              >
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1 className="text-center fw-bolder">No Jobs Found...</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Jobsview);
