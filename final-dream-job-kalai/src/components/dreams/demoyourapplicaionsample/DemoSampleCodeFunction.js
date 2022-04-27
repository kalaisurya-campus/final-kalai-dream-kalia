import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class DemoSampleCodeFunction extends Component {
  constructor() {
    super();

    this.state = {
      datas_store: [],
    };
    // <Yourapplication name="kalai" />;
  }

  componentDidMount() {
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
  render() {
    const { datas_store } = this.state;
    return (
      <>
        <div>
          <div className="notification_section">
            <nav className="nav_notification">
              <NavLink to="/yourapplication">
                <button>Back</button>
              </NavLink>
              <div class="cards">
                <div class="card__icon">
                  <h1>Notification page</h1>
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
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-10 mb-4 mt-5">
                          <NavLink to="/yourapplication" className="nav_link">
                            {/* <NavLink
                          to={{
                            pathname: "/yourapplication",
                            sddataProps: {
                              name: "hi",
                            },
                          }}
                        > */}
                            <div class="card">
                              <div className="split_cards">
                                <div className="left_cards">
                                  <img src={item.job.company_image} />
                                  <p className="mt-3 company_name">
                                    {item.job.company_name}
                                  </p>
                                </div>
                                <div className="right_cards">
                                  <h3>Application Sent</h3>
                                  <p>{item.message}</p>
                                  <h5>4 days ago</h5>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>Loading..</div>
                )}
              </div>
              <div className="right_notify">
                <img src="" className="mt-5" />
              </div>
            </div>
          </div>
        </div>
        <TestData />
      </>
    );
  }
}

export default DemoSampleCodeFunction;

class TestData extends Component {
  constructor() {
    super();
    this.state = {
      empty: [],
    };
  }
  componentDidMount() {
    api
      .get("notifications/get_notification_details/", {
        params: {
          applied_id: this.props.applied,
          // applied_id: this.props.applied,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({ empty: this.datas_store });
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  render() {
    const { empty } = this.state;
    return (
      <div>
        <div className="your_application">
          {/* <Data/> */}

          <nav className="nav_application">
            <NavLink to="/employserach" className="nav-link">
              <button className="mt-2">Back</button>
            </NavLink>
            <h1>Your Application </h1>
          </nav>
          <div className="split_your_application">
            <div className="left_split_your_application"></div>
            <div className="right_split_your_application">
              {empty ? (
                <div></div>
              ) : (
                <div>
                  {empty.map((items) => {
                    return (
                      <div>
                        <h1>welcome</h1>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {/* <button onClick={()=>this.sample()}>cklicked</button> */}
          </div>
        </div>
      </div>
    );
  }
}
