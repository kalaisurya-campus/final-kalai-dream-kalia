import React, { Component } from "react";
import axios from "axios";
import "./styles/Jobsforyou.scss";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Aos from "aos";
import api from "../Apiurls";
import books from "../../../assets/dreams-images/book_show_mark.jpeg";

class Jobsforyou extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
      is_bookmarked: true,
    };
  }

  componentDidMount() {
    Aos.init();
    api
      .get("manage_jobs/jobs_for_user/")
      .then((res) => {
        // console.log(res.data);
        if (res.status == 200) {
          console.log(res.data);
          this.setState({ datas: res.data.data });
        } else {
          console.log("error this message");
        }
      })
      .catch((err) => {
        console.log(err, "error this message");
      });
  }
  changeColor() {
    this.setState({ is_bookmarked: !this.state.is_bookmarked });
    alert("welcome");
  }
  render() {
    const { datas } = this.state;
    let btn_class = this.state.is_bookmarked ? "greenButton" : "redButton";
    return (
      <div className="main_section">
        {datas.length ? (
          <div className="row d-flex">
            {datas.map((items, index) => {
              return (
                <div>
                  <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                    <NavLink to={`/jobapply/${items.id}`} className="nav-link">
                      <div class="card">
                        <div class="card-body_section">
                          <div className="left_cards_section">
                            <img
                              src={items.company_image}
                              data-aos="fade-left"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            />
                            <h4
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.company_name}
                            </h4>
                          </div>
                          <div className="right_cards_section">
                            <div className="split_cards_list">
                              <h4
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                              >
                                {items.title}
                              </h4>
                              {/* <img
                                src={books}
                                className={btn_class}
                                onClick={this.changeColor.bind(this)}
                              /> */}
                            </div>
                            <span
                              data-aos="fade-right"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.position}
                            </span>
                            <span
                              data-aos="fade-up"
                              data-aos-easing="linear"
                              data-aos-duration="1700"
                            >
                              {items.description}
                            </span>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div><h1 className="text-center fw-bold">No Data Found......</h1></div>
        )}
      </div>
    );
  }
}

export default withRouter(Jobsforyou);
