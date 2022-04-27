import React, { Component } from "react";
import Navbarjobs from "../../navbarjobs/Navbarjobs";
import "./styles/Appliedjobs.scss";
import applied_view from "../../../../assets/dreams-images/applied_view_image.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import { withRouter } from "react-router-dom";
import api from "../../Apiurls";
import nodata from '../../../../assets/dreams-images/nodata.png';
let id;
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;

class Appliedjobs extends Component {
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
      .get("manage_applications/get_applied_users/", {
        params: {
          job_id: id,
        },
      })
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
      <>
        {/* <Navbarjobs /> */}

        <div className="applied_page">
          <nav className="applied_nav">
            <button className="back">
              <NavLink to="/jobsview" className="nav-link">Back</NavLink>
            </button>
            <h1>Applied Page</h1>
          </nav>
          <div className="split_applied">
            <div className="left_applied_page">
              {datas.length ? (
                <div>
                  {datas.map((items, index) => {
                    return (
                      <div class="col-sm-11 col-md-11 col-lg-11 col-xl-11 mb-5 mt-4">
                        <NavLink
                          to={`/statuspage/${items.id}`}
                          className="navlink"
                        >
                          <div class="card">
                            <div class="card-body">
                              <div className="left_split_data_page">
                                <span
                                  data-aos="fade-up"
                                  data-aos-easing="linear"
                                  data-aos-duration="1700"
                                >
                                  {items.user_details.username}
                                </span>
                                <span
                                  data-aos="fade-down"
                                  data-aos-easing="linear"
                                  data-aos-duration="1700"
                                >
                                  {items.user_details.email}
                                </span>
                                <span
                                  data-aos="fade-right"
                                  data-aos-easing="linear"
                                  data-aos-duration="1700"
                                >
                                  {items.user_details.mobile_no}
                                </span>
                                <span
                                  data-aos="fade-left"
                                  data-aos-easing="linear"
                                  data-aos-duration="1700"
                                >
                                  {items.status}
                                </span>
                              </div>
                              <div className="right_split_data_page">
                                <img src="https://jobstars.com/wp-content/uploads/2015/04/dream-job-2904780_1280-e1533824713645.jpg" />
                              </div>
                            </div>
                          </div>
                        </NavLink>
                        {/* <a href="/home/eternosoft/Downloads/my_resume.txt">Resume.....</a> */}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div>
               <h1 className="text-center fw-bolder">No Data Found...</h1>
                </div>
              )}
            </div>  
            <div className="right_applied_page">
              <img
                src={applied_view}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Appliedjobs);
