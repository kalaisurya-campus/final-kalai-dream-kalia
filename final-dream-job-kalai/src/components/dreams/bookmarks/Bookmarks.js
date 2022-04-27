import React, { Component } from "react";
import "./styles/Bookmarks.scss";
import read_book from "../../../assets/dreams-images/book_read.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";
import appliaction_image from "../../../assets/dreams-images/appliaction_image.jpg";
import Aos from "aos";
import api from "../Apiurls";
import { withRouter } from "react-router-dom";
let id;
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Bookmarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
    id = this.props.match.params.id;
    console.log(id);
  }
  componentDidMount() {
    Aos.init();
    api
      .get("apply_jobs/get_bookmarks/")
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          this.setState({ datas: res.data.data });
        } else {
          console.log("error this page");
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  render() {
    const { datas } = this.state;
    return (
      <div className="books_section">
        <nav className="book_nav">
          <h1 data-aos="fade-down" data-aos-duration="2800">
            Bookmarks
          </h1>
          <NavLink to="employserach">
            <img
              src={appliaction_image}
              data-aos="fade-up"
              data-aos-duration="2900"
            />
          </NavLink>
        </nav>
        <div className="books_read_split">
          <div className="left_read_book">
            <img
              src={read_book}
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-duration="3000"
            />
          </div>
          <div className="right_read_book">
            {datas.length ? (
              <div>
                {datas.map((items, index) => {
                  return (
                    <div class="col-sm-12 col-lg-11 col-md-12 col-xl-12 mb-5 mt-4">
                      <NavLink to={`/jobapply/${items.id}`} className="navlink">
                        <div class="card" key={index}>
                          <div class="card-body">
                            <div className="left_book_cards">
                              <img
                                src={items.company_image}
                                // data-aos="fade-left"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                              ></img>
                              <p
                                // data-aos="fade-right"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                                className="mt-4"
                              >
                                {items.company_name}
                              </p>
                            </div>
                            <div className="right_book_cards">
                              <p
                              // data-aos="fade-up"
                              // data-aos-easing="linear"
                              // data-aos-duration="1700"
                              >
                                {items.title}
                              </p>
                              <p
                              // data-aos="fade-down"
                              // data-aos-easing="linear"
                              // data-aos-duration="1700"
                              >
                                {items.location}
                              </p>
                              <p
                                // data-aos="fade-right"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                                className="description"
                              >
                                {items.description}
                              </p>
                              {items.salary ? (
                                <div>{items.salary}</div>
                              ) : (
                                <div></div>
                              )}
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
                <h1 className="text-center fw-bold">No Bookmarks.....</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Bookmarks);
