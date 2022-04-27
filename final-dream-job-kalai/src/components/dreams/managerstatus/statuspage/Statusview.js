import React, { Component } from "react";
import Navbarjobs from "../../navbarjobs/Navbarjobs";
import "./styles/Statusview.scss";
import status_iamge from "../../../../assets/dreams-images/status_image.jpg";
import save_crops from "../../../../assets/dreams-images/save_crops.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import status_image from "../../../../assets/dreams-images/status_images.png";
import { withRouter } from "react-router-dom";
import api from "../../Apiurls";
let id;

class Statusview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      status: "",
      job: id,
    };
    this.onChange = this.change.bind(this);
    id = this.props.match.params.id;
    console.log(id);
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cliked() {
    api
      .patch(`manage_applications/${id}/`, { status: this.state.status })
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data);
          this.setState({ datas: res.data });
        } else {
          console.log("error the message");
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  render() {
    const { datas, status, job } = this.state;
    console.log(status);
    return (
      <div className="status">
        {/* <Navbarjobs /> */}
        <nav className="status_nav">
          <button className="back">
            <NavLink to={`/appliedpage/${this.state.job}`} className="nav-link">
              Back
            </NavLink>
          </button>
          <h1>Status page</h1>
        </nav>
        <div className="split_status_page">
          <div className="left_split_status_page">
            <img src={status_iamge} />
          </div>
          <div className="right_split_status_page">
            <div class="cards">
              <div class="card-body">
                <div className="left_card_jobs">
                  <img src={save_crops} className="" />
                  <select
                    name="status"
                    value={this.state.status}
                    onChange={this.change}
                  >
                    <option>Select Status</option>
                    <option value="interview">Interview</option>
                    <option value="not suitable">Notsuitable</option>
                  </select>

                  <button
                    className="mt-5 mb-4 back py-2 px-2"
                    style={{ borderRadius: "20px" }}
                    onClick={() => this.cliked()}
                  >
                    <NavLink
                      to={`/appliedpage/${this.state.job}`}
                      className="nav-link"
                    >
                      Submit
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Statusview);
