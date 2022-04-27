import React, { Component } from "react";
import "./styles/Yourdetailsjobs.scss";
import jobs_application from "../../../assets/dreams-images/jobs_application_image.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";

import api from '../Apiurls';
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Yourdetailsjobs extends Component {
  constructor() {
    super();
    this.state = {
      datas: [],
    };
  }
  componentDidMount() {
    api
      .get("manage_jobs/1/")
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data.data);
          this.setState({ datas: [res.data.data] });
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
      <div className="your_deatile_jobs">
        <nav className="nav_your_jobs">
          <h1>Your Application View</h1>
        </nav>
        <div className="inside_detailes_jobs">
          <div className="left_detail_page">
            <img src={jobs_application} />
          </div>
          <div className="right_detail_page">
            {datas ? (
              <div>
                {datas.map((item, index) => {
                  return (
                    <div>
                      <div className="cards_left_box">
                        <div className="right_box_page">
                          <span>
                            <img src={item.company_image} />
                          </span>
                          <span>{item.title}</span>
                          <span>{item.position}</span>
                          <span>{item.company_name}</span>
                          <span>{item.requirements}</span>
                          <span>{item.type} PartTime</span>
                          <span>{item.description}</span>
                          <span>{item.location}</span>
                          <NavLink to="/jobapply"><button className="buttons mb-5 mt-5">Apply</button></NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>thanks</div>
            )}
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default Yourdetailsjobs;
