import React, { Component } from "react";
import { Redirect, browserHistory, withRouter } from "react-router-dom";
import "./styles/Signup.scss";
import job_image from "../../../assets/dreams-images/job-search.webp";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import SelectOptions from "../selectoptions/SelectOptions";
import Aos from "aos";
import history from "../history/history";
import api from "../Apiurls";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            mobile_no: "",
            address: "",
            city: "",
            state: "",
            country: "",
            skills: "",
            user_type: "",
            company: "",
            test: true,
        };
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        Aos.init();
        // const config={
        //   headers:
        //   {
        //     Authorization:"Bearer"+localStorage.getItem("toke")
        //   }
        // };
        // api
        //   .get("/", {})
        //   .then((res) => {
        //     console.log(res.data);
        //   })
        //   .catch(function (error) {
        //     if (error.response) {
        //       console.log(error.response.data);
        //       console.log(error.response.status);
        //       console.log(error.response.headers);
        //     }
        //   });
    }

    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submit = (e) => {
        // alert(`${this.state.username} ${this.state.email}`);
        e.preventDefault();

        // console.log(this.state);
        // let data_store = this.state;
        // let formdata = new FormData();
        // console.log(data_store);

        // formdata.append("data_store", data_store);
        // // formdata.append("username", "kalaisurya");
        // // formdata.append("email", "kalai@gmaio.com");
        // // formdata.append("password", "kalaiom");
        // // formdata.append("mobile_no", "674567547");
        // // formdata.append("address", "com");
        // // formdata.append("city", "fgdgdfgcom");
        // // formdata.append("state", "cokjhm");
        // // formdata.append("country", "com");
        // // formdata.append("user_type", "");
        // this.props.history.push("/login");

        api.post("manage_users/register/", this.state)
            .then((res) => {
                // console.log(res.data);
                if (res.status === 201) {
                    console.log(res.data);
                    console.log("welcome");
                    // this.props.history.push("/login");
                } else {
                    console.log("err this message");
                }
            })
            .catch((err) => {
                console.log(err.res);
            });
        this.props.history.push("/login");
        // <Redirect to="/login" />;
    };

    toggleHidden() {
        this.setState({ isHidden: !this.state.isHidden });
    }

    redirect_login = () => {
        console.log("jhi");
    };

    alerted() {
        alert("Success this Register page!!");
    }
    render() {
        const { test } = this.state;
        console.log(test);
        return (
            <div className="signup_section">
                <div className="left_dream">
                    <h1
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000"
                        className="mt-5 mb-5"
                    >
                        Every moment is a fresh beginning
                    </h1>
                    <img
                        src={job_image}
                        className="image1 mt-5"
                        data-aos="fade-left"
                        data-aos-duration="1600"
                        data-aos-easing="ease-in-sine"
                    />
                </div>
                <div className="right_dream">
                    <h1
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                    >
                        Your Dream jobs
                    </h1>
                    <div className="inside_right_dream">
                        <form onSubmit={this.submit}>
                            <label
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                Name
                            </label>
                            <input
                                type="username"
                                name="username"
                                value={this.state.username}
                                onChange={this.change}
                                placeholder="Enter your name"
                                //required
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            />
                            <label
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.change}
                                placeholder="Enter your email address"
                                //required
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            />
                            <label
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.change}
                                placeholder="Enter the password"
                                //required
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            />
                            <label
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                Mobile_no
                            </label>
                            <input
                                type="text"
                                name="mobile_no"
                                value={this.state.mobile_no}
                                onChange={this.change}
                                placeholder="Enter your mobile number"
                                //required
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            />
                            <label
                                data-aos="fade-left"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={this.state.address}
                                onChange={this.change}
                                placeholder="Enter your address"
                                //required
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            />
                            <label
                                data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1700"
                            >
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={this.state.city}
                                onChange={this.change}
                                placeholder="Enter your city"
                                //required
                                // data-aos="fade-left"
                                // data-aos-easing="linear"
                                // data-aos-duration="1700"
                            />
                            <label
                            //  data-aos="fade-left"
                            //   data-aos-easing="linear"
                            //   data-aos-duration="1700"
                            >
                                State
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={this.state.state}
                                onChange={this.change}
                                placeholder="Enter your state"
                                //required
                            />
                            <label>Country</label>
                            <input
                                type="text"
                                name="country"
                                value={this.state.country}
                                onChange={this.change}
                                placeholder="Enter your country"
                                //required
                            />

                            <label>
                                Enter 1 if you are a Job seeker or 2 if you are
                                a hirer
                            </label>
                            <input
                                type="text"
                                placeholder="Enter 1 or 2"
                                name="user_type"
                                value={this.state.user_type}
                                onChange={this.change}
                            />
                            {this.state.user_type == 1 ? (
                                <div>
                                    <input
                                        type="text"
                                        name="skills"
                                        value={this.state.skills}
                                        onChange={this.change}
                                        placeholder="Entre Skills"
                                    ></input>
                                </div>
                            ) : (
                                <div></div>
                            )}
                            {this.state.user_type == 2 ? (
                                <div>
                                    <input
                                        type="text"
                                        name="company"
                                        placeholder="Entre Your Company Name"
                                        value={this.state.company}
                                        onChange={this.change}
                                    />
                                </div>
                            ) : (
                                <div></div>
                            )}

                            <input
                                href="/login"
                                type="submit"
                                value="Register"
                                //required
                                className="buttonsed mt-5"
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Signup);

// import React, { Component } from "react";
// import FormValidator from "../../../components/dreams/validator/FormValidator";
// // import "./styles/FormCode.scss";
// import "./styles/Signup.scss";
// import axios from "axios";
// import { Redirect } from "react-router";
// import job_image from "../../../assets/dreams-images/job-search.webp";

// import api from "../Apiurls";

// class Signup extends Component {
//   constructor() {
//     super();
//     this.validator = new FormValidator([
//       {
//         field: "username",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter username name.",
//       },
//       {
//         field: "email",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter your email address.",
//       },
//       {
//         field: "email",
//         method: "isEmail",
//         validWhen: true,
//         message: "Enter valid email address.",
//       },
//       {
//         field: "mobile_no",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter a phone number.",
//       },
//       {
//         field: "mobile_no",
//         method: "matches",
//         args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
//         validWhen: true,
//         message: "Enter valid phone number.",
//       },
//       {
//         field: "password",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter password.",
//       },
//       {
//         field: "password_confirmation",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter Password confirmation.",
//       },
//       {
//         field: "password_confirmation",
//         method: this.passwordMatch, // notice that we are passing a custom function here
//         validWhen: true,
//         message: "Password and password confirmation do not match.",
//       },
//       {
//         field: "address",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter your address.",
//       },
//       {
//         field: "city",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter Your City",
//       },
//       {
//         field: "state",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter Your State",
//       },
//       {
//         field: "country",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter Your Country",
//       },
//       {
//         field: "skills",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter Your skills",
//       },
//       {
//         field: "user_type",
//         method: "isEmpty",
//         validWhen: false,
//         message: "Enter your user_type",
//       },
//       // {
//       //   field: "company",
//       //   method: "isEmpty",
//       //   validWhen: false,
//       //   message: "Enter Your Company",
//       // },
//     ]);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//       mobile_no: "",
//       address: "",
//       city: "",
//       state: "",
//       country: "",
//       skills: "",
//       user_type: "",
//       company: "",
//       password_confirmation: "",

//       validation: this.validator.valid(),
//     };
//     this.submitted = false;
//   }
//   passwordMatch = (confirmation, state) => state.password === confirmation;
//   handleInputChange = (event) => {
//     event.preventDefault();
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };
//   handleFormSubmit = (event) => {
//     event.preventDefault();
//     const validation = this.validator.validate(this.state);
//     this.setState({
//       validation,
//     });
//     this.submitted = true;
//     if (validation.isValid) {
//       //reaches here if form validates successfully...
//     }
//     api
//       .post("manage_users/register/", this.state)
//       .then((res) => {
//         // console.log(res.data);
//         if (res.status === 201) {
//           console.log(res.data);
//           console.log("welcome");
//           // <Redirect to="/login"></Redirect>;
//         } else {
//           console.log("err this message");
//         }
//         // localStorage.setItem("token",res.data.token);
//       })
//       .catch((err) => {
//         console.log(err.res);
//       });
//   };
//   render() {
//     return <div className="signup_section">
//         <div className="left_dream">
//         <h1
//             data-aos="flip-left"
//             data-aos-easing="ease-out-cubic"
//             data-aos-duration="3000"
//             className="mt-5 mb-5"
//           >
//             Every moment is a fresh beginning
//           </h1>
//           <img
//             src={job_image}
//             className="image1 mt-5"
//             data-aos="fade-left"
//             data-aos-duration="1600"
//             data-aos-easing="ease-in-sine"
//           />
//         </div>
//         <div className="right_dream">
//         <div className="container">
//         <div className="row">
//           <div className="col-md-4 col-md-offset-4">
//             <form className="registrationForm" onSubmit={this.submit}>
//               <h2>Register Page</h2>
//               <div
//                 className={validation.username.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="user_name" className="mb-2">
//                   userName
//                 </label>
//                 <input
//                   type="string"
//                   className="form-control"
//                   name="username"
//                   placeholder="Full Name"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">
//                   {validation.username.message}
//                 </span>{" "}
//               </div>
//               <div
//                 className={validation.email.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="email" className="mb-2">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   name="email"
//                   placeholder="Email address"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.email.message}</span>{" "}
//               </div>
//               <div
//                 className={validation.mobile_no.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="mobile_no" className="mb-2">
//                   mobile (Enter only 10 digit Numbers)
//                 </label>
//                 <input
//                   type="phone"
//                   className="form-control"
//                   name="mobile_no"
//                   placeholder="Mobile Number"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">
//                   {validation.mobile_no.message}
//                 </span>{" "}
//               </div>

//               <div
//                 className={validation.address.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="address" className="mb-2">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="address"
//                   placeholder="Entre Address"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.address.message}</span>{" "}
//               </div>

//               <div
//                 className={validation.city.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="city" className="mb-2">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="city"
//                   placeholder="Enter Your City"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.city.message}</span>{" "}
//               </div>

//               <div
//                 className={validation.state.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="state" className="mb-2">
//                   State
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="state"
//                   placeholder="Enter State"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.state.message}</span>{" "}
//               </div>

//               <div
//                 className={validation.country.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="country" className="mb-2">
//                   Country
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="country"
//                   placeholder="Enter country"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.country.message}</span>{" "}
//               </div>

//               <div
//                 className={validation.skills.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="skills" className="mb-2">
//                   Skills
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="skills"
//                   placeholder="Entre Skills"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">{validation.skills.message}</span>{" "}
//               </div>

//               <div
//                 className={validation.user_type.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="user_type" className="mb-2">
//                   User_type
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="user_type"
//                   placeholder="Entre User_type"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">
//                   {validation.user_type.message}
//                 </span>{" "}
//               </div>

//               <div
//                 className={validation.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="company" className="mb-2">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   name="company"
//                   placeholder="Enter Company"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 {/* <span className="help-block">{validation.company.message}</span>{" "} */}
//               </div>

//               <div
//                 className={validation.password.isInvalid && "has-error"}
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="password" className="mb-2">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   name="password"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">
//                   {validation.password.message}
//                 </span>{" "}
//               </div>
//               <div
//                 className={
//                   validation.password_confirmation.isInvalid && "has-error"
//                 }
//                 className="mb-4 mt-3"
//               >
//                 <label htmlFor="password_confirmation" className="mb-2">
//                   Confirm Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Confirm Password"
//                   name="password_confirmation"
//                   onChange={this.handleInputChange}
//                 />{" "}
//                 <span className="help-block">
//                   {validation.password_confirmation.message}
//                 </span>{" "}
//               </div>
//               <button
//                 onClick={this.handleFormSubmit}
//                 className="btn btn-primary mb-4 mt-2 px-4 py-2 "
//               >
//                 {" "}
//                 Register{" "}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//         </div>
//     </div>;
//   }
// }

// export default Signup;
