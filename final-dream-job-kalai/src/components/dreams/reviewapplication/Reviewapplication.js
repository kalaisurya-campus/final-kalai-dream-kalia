import React, { Component } from "react";
import axios from "axios";
import Applications from "../applicationover/Applications";
import review_image from "../../../assets/dreams-images/review.png";
import "./styles/Reviewapplication.scss";
import AOS from "aos";
import Aos from "aos";
import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Reviewapplication extends Component {
  constructor() {
    super();
    this.state = {
      empty_data: [],
    };
  }
  componentDidMount() {
    Aos.init();
    api
      .get("manage_applications/get_jobs_status/", {
        params: {
          status: "review",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          this.setState({ empty_data: res.data.data });
        } else {
          console.log("error this page");
        }
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
            {empty_data ? (
              <div className="cards_change">
                {empty_data.map((items, index) => {
                  return (
                    <div class="col-sm-12 col-md-12 col-lg-10 col-xl-12 mb-5 mt-3">
                      <div class="cards">
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
                              className="mt-5"
                            >
                              {" "}
                              {items.job.company_name}
                            </span>
                          </div>
                          <div className="right_reviews">
                            <span
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.title}
                            </span>
                            <span
                              data-aos="fade-up"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.position}
                            </span>
                            <span
                              data-aos="fade-right"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.skills}
                            </span>
                            <span
                              data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.requirements}
                            </span>
                            <span
                              className="description"
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.description}
                            </span>
                            <span
                              data-aos="fade-right"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.job.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <img src="https://picsum.photos/200/300?grayscale"></img>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Reviewapplication;
