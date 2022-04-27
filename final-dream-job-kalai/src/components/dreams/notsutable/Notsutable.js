import React, { Component } from "react";
import Applications from "../applicationover/Applications";
import review_image from "../../../assets/dreams-images/review.png";
import axios from "axios";
import './styles/Notsutable.scss';
import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });

// api.defaults.withCredentials = true;

class Notsutable extends Component {
  constructor() {
    super();
    this.state = {
      empty_data: [],
    };
  }
  componentDidMount() {
    api
      .get("manage_applications/get_jobs_status/", {
        params: {
          status: "not suitable",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          this.setState({ empty_data: res.data.data });
        } else {
          console.log("error this page");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { empty_data } = this.state;
    return (
      <div className="review_page">
        <Applications />
        <div className="split_review">
          <div className="left_review_page">
            <img
              src={review_image}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1700"
            />
          </div>
          <div className="right_review_page">
            {empty_data.length ? (
              <div className="cards_change">
                {empty_data.map((items, index) => {
                  return (
                    <div class="col-sm-12 col-md-12 col-lg-10 col-xl-12 col-xxl-11 mb-5 mt-3">
                      <div class="card">
                        <div class="card-body">
                          <div className="left_reviews">
                            <img
                              src={items.job.company_image}
                              data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            />
                            <span
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                              className="mt-4"
                            >
                              {" "}
                              {items.job.company_name}
                            </span>
                          </div>
                          <div className="right_reviews">
                            <span  data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700">{items.job.title}</span>
                            <span  data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700">{items.job.position}</span>
                            <span  data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700">{items.job.skills}</span>
                            <span>{items.job.requirements}</span>
                            <span className="description">
                              {items.job.description}
                            </span>
                            <span  data-aos="fade-up"
                                data-aos-easing="linear"
                                data-aos-duration="1700">{items.job.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
              <h1 className="text-center fw-bold">No Jobs Found........</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Notsutable;
