import React, { Component } from "react";
import "./styles/Login.scss";
import { Redirect, withRouter } from "react-router";
import { NavLink } from "react-router-dom";
// import login_image from "../../../assets/dreams-images/login_image.webp";
import login_image from "../../../assets/dreams-images/login_images.svg";
import axios from "axios";
import Cookies from "js-cookie";
import Aos from "aos";
import api from "../Apiurls";
import * as bootstrap from "bootstrap";
import sign_ups from "../../../assets/dreams-images/lock.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import {withRouter} from 'react-router-dom';

// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
const notify = () => toast("Succfessfully Login");
class Login extends Component {
    constructor() {
        super();

        let Login = false;
        this.state = {
            checkbox: false,
            email: "",
            password: "",
            empty_store: [],
            Login,
        };

        this.onchange = this.onchange.bind(this);
        this.onsubmitform = this.onsubmitform.bind(this);
    }

    onchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    componentDidMount() {
        Aos.init();

        //   api
        //     .get("http://192.168.0.125:8000/manage_users/login")
        //     .then((res) => {
        //       console.log(res.data.token);
        //     })
        //     .catch((err) => {
        //       console.log(err.res);
        //     });
    }

    // parse_user_token = () => {
    //   let token = document.cookie.split(";");
    //   let payload = null;
    //   if (token) {
    //     token.forEach((item) => {
    //       if (item.startsWith("header=")) {
    //         // console.log(item)
    //         payload = item.split("=")[1];
    //         console.log(payload);
    //       }
    //     });
    //     // console.log(payload);
    //     if (payload) {
    //       let info = JSON.parse(atob(payload.split(".")[1]));
    //       console.log(info);
    //       return info;
    //     }
    //     console.error("no token");
    //   }
    // };

    onsubmitform = (e) => {
        e.preventDefault();
        const { email, password, empty_store } = this.state;
        console.log(email, password, empty_store);

        // if (!email === "") {
        //   console.log("successs");
        // } else {
        //   // let emailerror="error this message";
        //   emailerror("Error this message email");
        // }
        // if (!password === "") {
        //   console.log("success this message password");
        // } else {
        //   passworderror("Error this message password");
        // }

        api.post("manage_users/login/", this.state)
            .then((res) => {
                console.log(res.data);
                if (res.status == 200) {
                    // console.log(res.data);
                    let token = document.cookie.split(";");
                    console.log("tokes", token);

                    let payload = null;
                    if (token) {
                        token.forEach((item) => {
                            if (item.startsWith("header=")) {
                                console.log("no", item);
                                payload = item.split("=")[1];
                                console.log("pay",payload);
                            }
                        });
                        // console.log("pay",payload);

                        if (payload) {
                            let info = JSON.parse(atob(payload.split(".")[1]));
                            console.log(info);
                            console.log(info.user_type);
                            let data = this.setState({ empty_store: info });
console.log("dt",data);
                            return info;
                        }
                        // console.error("no token");
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });

        // if (username === "kalai" && password === "kalai") {
        //   this.setState({ Login: true });
        // }
        // console.log(username, password);
        // api.post("http://192.168.0.125:8000/manage_users/login").then((res) => {
        // localStorage.setItem(
        //   "Login",
        //   JSON.stringify({
        //     Login: true,
        //     token: res.data.token,
        //   })
        // );
        // if (username === this.state.username && password === this.state.password) {
        // this.setState({ Login: true });
        // }
        // console.log(username, password);
        // });
    };

    togglebutton = () => {
        var input = document.getElementById("password");
        if (input.type === "password") {
            input.type = "text";
        } else {
            input.type = "password";
        }
    };
    componentDidUpdate() {
        console.log(this.state);
    }
    render() {
        const { email, password, empty_store } = this.state;
        console.log("empty", empty_store);
        // if (this.state.Login) {
        //   return <Redirect to="/create" />;
        // }
        if (empty_store.user_type == 1) {
            return <Redirect to="/employserach/:id" />;
        } else if (empty_store.user_type == 2) {
            return <Redirect to="/create" />;
        } else {
            console.log("welcome too login page");
        }
        return (
            <div className="login_dreams">
                <div className="left_login_dreams">
                    <h1
                        className="mb-5"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                    >
                        Login
                    </h1>

                    <img
                        src={sign_ups}
                        className="mt-5"
                        data-aos="fade-right"
                        data-aos-duration="1700"
                        data-aos-easing="ease-in-sine"
                    />
                </div>

                <div className="right_login_dreams">
                    <form onSubmit={this.onsubmitform}>
                        <lable
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        >
                            Email:
                        </lable>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.onchange}
                            placeholder="Enter your email-id"
                            required
                            data-aos="fade-up"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                        />
                        {/* <input type="checkbox" defaultChecked={this.state.checkbox} onChange={(e)=>this.setState({checkbox:!this.state.checkbox})} />
            {this.state.checkbox === true ? <h1>hai</h1>:<h1>hello</h1>} */}

                        {/* {emailerror ? <div>thanks</div> : <div>welcome</div>} */}
                        <lable
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1800"
                        >
                            Password:
                        </lable>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.onchange}
                            placeholder="Enter the password"
                            required
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1700"
                        />

                        {/* <button className="submits mt-5 " id="data">
              <NavLink to="/create">Login</NavLink>
            </button> */}
                        {/* <button
              onClick={() => this.togglebutton()}
              className="password_show mt-3"
            >
              view_password
            </button> */}

                        <input
                            type="submit"
                            className="submits mt-3"
                            id="data"
                            value="Login"
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1800"
                            onSubmit={notify}
                        />
                        <button className="back mt-4">
                            <NavLink to="/signup" className="nav-link">
                                SignUp
                            </NavLink>
                        </button>
                    </form>

                    {/* <button>
            <NavLink to="/signup">SignUp</NavLink>
          </button> */}
                    {/* <button onClick={notify}>Notify!</button> */}
                    <ToastContainer />
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
