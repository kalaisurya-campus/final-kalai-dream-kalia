import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Create.scss";
import axios from "axios";
import Aos from "aos";
import jobs_read from "../../../assets/dreams-images/jobs_readf.png";
// import create_image from '../../../assets/dreams-images/create_page_image.webp';
import create_image from "../../../assets/dreams-images/creat_image_girl.webp";
const api = axios.create({
  baseURL: "http://localhost:11000/",
});
api.defaults.withCredentials = true;
class Create extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      type: "",
      position: "",
      company_name: "",
      skills: "",
      company_image: "",
      description: "",
      requirements: "",
      location: "",
      salary: "",
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    Aos.init();
    // api
    //   .get("/")
    //   .then((res) => {
    //     if (res.status == 200) {
    //       console.log(res.data);
    //     } else {
    //       console.log("error the page");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err.res);
    //   });
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    api
      .post("manage_jobs/", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <div className="create_page">
        <nav className="navsed">
          <span
            className="create_user mt-5"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Create Jobs
          </span>
          <div className="boxed">
            <NavLink to="/jobsview">
              <img
                src={jobs_read}
                data-aos="fade-up"
                data-aos-duration="1700"
              />
            </NavLink>
          </div>
          <button className="back">
            <NavLink to="/login" className="nav-link">
              Back
            </NavLink>
          </button>
        </nav>

        <div className="create_forms">
          <div className="left_forms">
            <form onSubmit={this.submit}>
              <label
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Tile:
              </label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                placeholder="Enter job title"
                onChange={this.change}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              ></input>
              {/* <select name="jobs timing" onChange={this.change}>
                <option value="jobtiming">Job timing</option>
                <option value="1">part Time</option>
                <option value="2">Full Time</option>
              </select> */}
              <label
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                1-part time and 2-full time
              </label>
              <input
                type="text"
                name="type"
                value={this.state.type}
                onChange={this.change}
                placeholder="Enter the type 1-Part time 2-Full time"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
              />
              <label
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Position:
              </label>
              <input
                type="text"
                placeholder="Enter job position"
                name="position"
                value={this.state.position}
                onChange={this.change}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                company_name:
              </label>
              <input
                type="text"
                placeholder="Enter the Company Name"
                name="company_name"
                value={this.state.company_name}
                onChange={this.change}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Upload_photo:
              </label>
              <input
                type="file"
                placeholder="Upload Your Company Image"
                name="company_image"
                value={this.state.company_image}
                onChange={this.change}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Skills:
              </label>
              <input
                type="text"
                placeholder="Enter the Skills needed"
                name="skills"
                value={this.state.skills}
                onChange={this.change}
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Description:
              </label>
              <input
                type="text"
                placeholder="Enter the Description"
                name="description"
                value={this.state.description}
                onChange={this.change}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Requirements:
              </label>
              <input
                type="text"
                placeholder="Enter the  requirements"
                name="requirements"
                value={this.state.requirements}
                onChange={this.change}
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Location:
              </label>
              <input
                type="text"
                placeholder="Enter the Location"
                name="location"
                value={this.state.location}
                onChange={this.change}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <label
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                Salary:
              </label>
              <input
                type="text  "
                placeholder="Enter the Salary"
                name="salary"
                value={this.state.salary}
                onChange={this.change}
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              {/* <select name="cars">
                <option value="zero year">Years</option>
                <option value="oneyear">1 year</option>
                <option value="twoyear">2 year</option>
                <option value="threeyear">3 year</option>
              </select> */}
              <input
                type="submit"
                value="Submit"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
            </form>
          </div>
          <div className="right_forms">
            {/* <img src="https://picsum.photos/seed/picsum/200/300" /> */}
            <img
              src={create_image}
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1700"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
