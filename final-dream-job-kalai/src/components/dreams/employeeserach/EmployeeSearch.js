import React, { Component } from "react";
import "./styles/EmployeeSearch.scss";
import Slider from "react-slick";
import axios from "axios";
import Employeeitems from "../employeeitem/Employeeitems";

import { NavLink } from "react-router-dom";
import booksmark from "../../../assets/dreams-images/bookmarks.jpg";
import jobs from "../../../assets/dreams-images/bktr.jpg";
import jobss from "../../../assets/dreams-images/bk1.jpg";
import "animate.css";
import { withRouter } from "react-router-dom";

import green from "../../../assets/dreams-images/green.png";
import capital from "../../../assets/dreams-images/capital.png";
import Jobsforyou from "../jobsforyou/Jobsforyou";
import books from "../../../assets/dreams-images/book_show_mark.jpeg";

import api from "../Apiurls";
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class EmployeeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchdata: null,
            total: false,
            black: true,
            // is_bookmarked: true,
        };
    }

    search(e) {
        api.get("manage_jobs/job_filter/", {
            params: {
                keyword: e,
            },
        }).then((res) => {
            // console.log(res.data);
            if (res.status == 200) {
                console.log(res.data);
                this.setState({ searchdata: res.data.data });
            } else {
                this.setState({ total: true });
            }
        });
    }
    changeColor() {
        this.setState({ black: !this.state.black });
        alert("welcome");
    }

    render() {
        let btn_class = this.state.black ? "greenButton" : "redButton";
        const { data, searchdata } = this.state;

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        return (
            <>
                <div className="search_box">
                    {/* <nav className="navs">
            <h1
              className="let"
              data-aos="fade-left"
              data-aos-duration="1700"
              data-aos-easing="ease-in-sine"
            >
              Let's Find Your Dreams Jobs
            </h1>
            <form className="d-flex">
              <input
                onChange={(event) => this.search(event.target.value)}
                class="form-control me-2 mt-1"
                type="text"
                placeholder="Search"
                aria-label="Search"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <button
                class="btn btn-outline-success btns mt-2"
                type="submit"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Search
              </button>
            </form>
            <div class="cards col-md-12 col-sm-12">
              <div class="card__icon">
                <NavLink to="/notification">
                  <svg
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1700"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0964 16.6667C12.0964 18.5077 10.6039 20 8.76297 20C6.922 20 5.42969 18.5077 5.42969 16.6667C5.42969 14.8257 6.922 13.3333 8.76297 13.3333C10.6039 13.3333 12.0964 14.8257 12.0964 16.6667Z"
                      fill="#22215B"
                    />
                    <path
                      d="M14.603 9.93424C11.778 9.5308 9.59641 7.1016 9.59641 4.16673C9.59641 3.33329 9.77463 2.54258 10.0905 1.82496C9.66385 1.72501 9.22058 1.66673 8.76297 1.66673C5.54642 1.66673 2.92969 4.2833 2.92969 7.50001V9.82331C2.92969 11.4725 2.20718 13.0292 0.939636 14.1008C0.61554 14.3774 0.429688 14.7817 0.429688 15.2083C0.429688 16.0126 1.08383 16.6667 1.88797 16.6667H15.638C16.4423 16.6667 17.0964 16.0126 17.0964 15.2083C17.0964 14.7817 16.9106 14.3774 16.5781 14.0933C15.3481 13.0525 14.6347 11.5416 14.603 9.93424Z"
                      fill="#22215B"
                    />
                    <path
                      d="M19.5964 4.16672C19.5964 6.4679 17.7309 8.33328 15.4297 8.33328C13.1285 8.33328 11.263 6.4679 11.263 4.16672C11.263 1.86554 13.1285 0 15.4297 0C17.7309 0 19.5964 1.86554 19.5964 4.16672Z"
                      fill="#4CE364"
                    />
                  </svg>
                </NavLink>
              </div>
            </div>
            <NavLink to="/bookmarks">
              <img
                src={booksmark}
                className="image_book"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
            </NavLink>
            <NavLink to="/reviewapplication">
              <img
                src={jobs}
                className="books"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
            </NavLink>
          </nav> */}
                    <div className="bars">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">
                                    {" "}
                                    <h1
                                        className="let"
                                        data-aos="fade-left"
                                        data-aos-duration="1700"
                                        data-aos-easing="ease-in-sine"
                                    >
                                        Let's Find Your Dreams Jobs
                                    </h1>
                                </a>
                                <button
                                    class="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div
                                    class="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul class="navbar-nav mx-auto mb-4 gap-5 mb-lg-0">
                                        <li class="nav-item">
                                            <a
                                                class="nav-link active"
                                                aria-current="page"
                                                href="#"
                                            >
                                                <NavLink to="/notification">
                                                    <svg
                                                        data-aos="fade-up"
                                                        data-aos-easing="linear"
                                                        data-aos-duration="1700"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 20 20"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M12.0964 16.6667C12.0964 18.5077 10.6039 20 8.76297 20C6.922 20 5.42969 18.5077 5.42969 16.6667C5.42969 14.8257 6.922 13.3333 8.76297 13.3333C10.6039 13.3333 12.0964 14.8257 12.0964 16.6667Z"
                                                            fill="#22215B"
                                                        />
                                                        <path
                                                            d="M14.603 9.93424C11.778 9.5308 9.59641 7.1016 9.59641 4.16673C9.59641 3.33329 9.77463 2.54258 10.0905 1.82496C9.66385 1.72501 9.22058 1.66673 8.76297 1.66673C5.54642 1.66673 2.92969 4.2833 2.92969 7.50001V9.82331C2.92969 11.4725 2.20718 13.0292 0.939636 14.1008C0.61554 14.3774 0.429688 14.7817 0.429688 15.2083C0.429688 16.0126 1.08383 16.6667 1.88797 16.6667H15.638C16.4423 16.6667 17.0964 16.0126 17.0964 15.2083C17.0964 14.7817 16.9106 14.3774 16.5781 14.0933C15.3481 13.0525 14.6347 11.5416 14.603 9.93424Z"
                                                            fill="#22215B"
                                                        />
                                                        <path
                                                            d="M19.5964 4.16672C19.5964 6.4679 17.7309 8.33328 15.4297 8.33328C13.1285 8.33328 11.263 6.4679 11.263 4.16672C11.263 1.86554 13.1285 0 15.4297 0C17.7309 0 19.5964 1.86554 19.5964 4.16672Z"
                                                            fill="#4CE364"
                                                        />
                                                    </svg>
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">
                                                {" "}
                                                <NavLink to="/bookmarks">
                                                    <img
                                                        src={jobs}
                                                        className="image_book"
                                                        data-aos="fade-down"
                                                        data-aos-easing="linear"
                                                        data-aos-duration="1700"
                                                    />
                                                </NavLink>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <NavLink to="/reviewapplication">
                                                    <img
                                                        src={jobss}
                                                        className="books"
                                                        data-aos="fade-right"
                                                        data-aos-easing="linear"
                                                        data-aos-duration="1700"
                                                    />
                                                </NavLink>
                                            </a>
                                        </li>
                                    </ul>
                                    <form class="d-flex">
                                        <input
                                            onChange={(e) =>
                                                this.search(e.target.value)
                                            }
                                            class="form-control me-2 mt-1"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            data-aos="fade-left"
                                            data-aos-easing="linear"
                                            data-aos-duration="1700"
                                        />
                                        <button
                                            class="btn btn-outline-success btns mt-2"
                                            type="submit"
                                            data-aos="fade-up"
                                            data-aos-easing="linear"
                                            data-aos-duration="1700"
                                        >
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <button className="back">
                                <NavLink to="/login" className="nav-link">
                                    Back
                                </NavLink>
                            </button>
                        </nav>
                    </div>

                    <div className="search_data_field">
                        <div className="empty_store">
                            {searchdata ? (
                                <div className="row d-flex">
                                    {searchdata.map((itemsed, index) => {
                                        return (
                                            <div key={index}>
                                                <div class="col-sm-12 col-md-12 col-lg-12 col-xxl-6 mt-4">
                                                    <NavLink
                                                        to={`/jobapply/${itemsed.id}`}
                                                        className="nav-link"
                                                    >
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <div className="left_image_body">
                                                                    <img
                                                                        src={
                                                                            itemsed.company_image
                                                                        }
                                                                        data-aos="fade-down"
                                                                        data-aos-easing="linear"
                                                                        data-aos-duration="1700"
                                                                    />
                                                                    <h3 class="card-title mt-3 mb-3">
                                                                        {
                                                                            itemsed.title
                                                                        }
                                                                    </h3>
                                                                </div>
                                                                <div className="right_image_body">
                                                                    <span
                                                                        data-aos="fade-right"
                                                                        data-aos-easing="linear"
                                                                        data-aos-duration="1700"
                                                                    >
                                                                        {
                                                                            itemsed.position
                                                                        }
                                                                    </span>
                                                                    <span
                                                                        data-aos="fade-up"
                                                                        data-aos-easing="linear"
                                                                        data-aos-duration="1700"
                                                                    >
                                                                        {
                                                                            itemsed.skills
                                                                        }
                                                                    </span>
                                                                    <span
                                                                        data-aos="fade-down"
                                                                        data-aos-easing="linear"
                                                                        data-aos-duration="1700"
                                                                    >
                                                                        {
                                                                            itemsed.requirements
                                                                        }
                                                                    </span>
                                                                    <span
                                                                        data-aos="fade-left"
                                                                        data-aos-easing="linear"
                                                                        data-aos-duration="1700"
                                                                    >
                                                                        {
                                                                            itemsed.description
                                                                        }
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
                                <div className="d-flex row card_sm_section mt-4 mb-3">
                                    <h1
                                        data-aos="fade-up"
                                        data-aos-easing="linear"
                                        data-aos-duration="1700"
                                    >
                                        {" "}
                                        Jobs For You
                                    </h1>
                                    <Jobsforyou />

                                    {/* <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
                    <div class="cards">
                      <div className="split_green">
                        <div className="left_green">
                          <img src={capital} />
                          <h5 class="card-title mt-4">Business Analysis</h5>
                        </div>
                        <div class="right_green">
                          <p>
                            The green business definition describes a company
                            that does not make any negative impact on the
                            environment, economy, or community. ... Green
                            businesses use environmentally sustainable resources
                            and uphold socially responsible policies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-4">
                    <div class="cards ">
                      <div className="split_green">
                        <div className="left_green">
                          <img src={green} />
                          <h5 class="card-title mt-4">FrontEnd Develepor</h5>
                        </div>
                        <div class="right_green">
                          <p>
                            The green business definition describes a company
                            that does not make any negative impact on the
                            environment, economy, or community. ... Green
                            businesses use environmentally sustainable resources
                            and uphold socially responsible policies
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="slicks">
                        <Employeeitems />
                        {/* <img
              src={books}
              className={btn_class}
              onClick={this.changeColor.bind(this)}
            /> */}
                        {/* Bookmar */}
                        {/* {this.state.is_bookmarked === true ? <div>1</div> : <div>2</div>} */}
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(EmployeeSearch);
