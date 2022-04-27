import React, { Component } from "react";
import axios from "axios";
import reading_book from "../../../assets/dreams-images/book.jpg";
import resume_apply from "../../../assets/dreams-images/resume.jpg";
import "./styles/Resumeattach.scss";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import history from "../history/history";
import api from '../Apiurls';
let id;
let book;
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Resumeattach extends Component {
  constructor(props) {
    super(props);
    id = this.props.match.params.id;
    // book = this.props.match.params.is_bookmarked;

    this.state = {
      file: "",
      contact_no: "",
      comments: "",
      is_bookmarked: "True",
      job: id,
      alert: "",
    };
    console.log(id);
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }
  componentDidMount() {
    Aos.init();
    // api
    // .get("manage_jobs/1/")
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((err) => {
    //   console.log(err.res);
    // });
  }
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // let readfile = new FileReader();
    // readfile.readAsDataURL(e.target.name[1]);
    // readfile.onload = (e) => {
    //   console.log("image show", e.target.result);
    // };
  };
  submit(event) {
    event.preventDefault();
    api
      .post("apply_jobs/", this.state)
      .then((res) => {
        console.log(res.data);
        this.props.history.push("/success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  sayHello=() =>{
    alert("welcome");
  }

  render() {
    let id;
    id = this.props.match.params.id;
    //  console.log(id);
    if (id === this.state.job) {
      <Redirect to="/success" />;

      console.log("welcoms");
    } else {
      console.log("not accesss");
    }

    return (
      <div className="resume_section">
        <nav className="nav_resume">
          <NavLink to="/employserach/:id" className="nav_link">
            <button className="btn_buttons mt-3">Back</button>
          </NavLink>
          <h1
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1700"
          >
            Final step to Apply
          </h1>
          {/* <img
            src={reading_book}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1700"
          /> */}
        </nav>
        <div className="split_resume">
          <div className="left_resume">
            <form onSubmit={this.submit}>
              {/* <img
                src="https://picsum.photos/id/237/200/300"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <h1
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1700"
              >
                welcome too resume apply page
              </h1> */}

              <input
                type="file"
                id="myFile"
                name="file"
                value={this.state.file}
                onChange={this.change}
                className="browser"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />

              <input
                type="text"
                name="contact_no"
                placeholder="Enter the contact no"
                value={this.state.contact_no}
                onChange={this.change}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              <input
                type="text"
                name="comments"
                value={this.state.comments}
                onChange={this.change}
                placeholder="Enter Your comments"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1700"
              />
              {/* <input
                type="text"
                name="is_bookmarked"
                value={this.state.is_bookmarked}
                onChange={this.change}
                placeholder="Enter Your is_"
              /> */}

              <span>{/* <label>Date</label> */}</span>
              <input
                type="submit"
                value="Submit"
                className=" apply"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1700"
            
              />
           

              {/* <NavLink to="/success/:id">
                <input
                  type="submit"
                  className=" apply mt-2"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1700"
                />
              </NavLink> */}
              {/* {" "}
                <NavLink to="/success">Apply</NavLink>
              </input> */}
            </form>
            {/* <button onClick={() => this.sayHello()}>clicked</button> */}
          </div>
          <div className="right_resume">
            <img src={resume_apply} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Resumeattach);
