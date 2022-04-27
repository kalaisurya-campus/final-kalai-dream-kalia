// import React, { useEffect, useState } from "react";
// import "./styles/Animated.scss";
// import mobile from "../../../assets/dreams-images/landing_mobile.webp";
// import landing from "../../../assets/dreams-images/landing_image.webp";
// import "animate.css";
// import { cssTransition } from "react-toastify";
// import { getByDisplayValue } from "@testing-library/react";

// function Animated(props) {
//   useEffect(() => {
//     let id = null;
//     const elem = document.getElementById("animate");
//     let pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 12);
//     function frame() {
//       if (pos == 540) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + "px";
//         elem.style.bottom = pos + "px";
//       }
//     }
//   });
//   return (
//     <>
//       {/* <p><button onclick="myMove()">Click Me</button></p>  */}
//       <div className="mobiles">
//         <div className="mobile_landing">
//           <img src={mobile} />
//         </div>
//         <div id="empty">
//           {/* <img src={landing} className="kalai animate__animated animate__zoomInDown" /> */}

//           <img
//             src={landing}
//             className="kalai animate__animated animate__zoomInDown animate__delay-3s"
//             id="animate"
//           />
//         </div>

//         {/* <div id ="container">
//   <div id ="animate"> <img src={landing} className="kalai animate__animated animate__zoomInDown" /></div>
// </div> */}
//       </div>
//     </>
//   );
// }

// export default Animated;

// // animate__animated animate__zoomInDown animate__delay-2s

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from '../Apiurls';


export default function Animated(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
   
  } = useForm();

  const [datas,Emptydata]=useState();
  // const[datas,Empty]=useState({
  //   username: "",
  //     email: "",
  //     password: "",
  //     mobile_no: "",
  //     address: "",
  //     city: "",
  //     state: "",
  //     country: "",
  //     skills: "",
  //     user_type: "",
  //     company: "",

  // })

// const handlechange=(e)=>
// {
//   const news={...datas}
// news[e.target.name]=e.target.value
// Empty(news)
// console.log(news);
// }
  const onSubmit = (data) => {
  
    console.log("welcome", data);
    Emptydata([data]);
   
    reset();

    api
    .post("manage_users/register/",data      // username: datas.username,
      // email: datas.email,
      // password: datas.password,
      // mobile_no: datas.mobile_no,
      // address: datas.address,
      // city: datas.city,
      // state: datas.state,
      // country: datas.country,
      // skills: datas.skills,
      // user_type: datas.user_type,
      // company: datas.company,
    )
    .then((res) => {
      console.log(res);
      // console.log(res.data);
      if (res.status === 201) {
        // console.log(res.data);
        console.log("welcome");
        this.props.history.push("/login");
      } else {
        console.log("err this message");
      }
    })
    .catch((err) => {
      console.log(err.res);
    });
  };

  return (
    <>
    <p>{datas}</p>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="enter name"
          name="username"
          // value={datas.username}
          // onChange={(e)=>handlechange(e)}
          // ref={register({required:"names is invalid"})}
          {...register("username", { required: "enter your name" })}
          
          // {...register("username", { required: true })}
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>
{/* {errors.username?.type === 'required' && "First name is required"}<br/> */}
        {/* {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}<br/> */}
        <input
          type="email"
          placeholder="enter email"
          name="email"
          // value={datas.email}
          // onChange={(e)=>handlechange(e)}
          {...register("email", { required: "enter your email" })}
        />

        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}<br/>

        <input
          type="password"
          placeholder="enter password"
          name="password"
          // value={datas.password}
          // onChange={(e)=>handlechange(e)}
          {...register("password", { required: "enter your password" })}
        />
    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}<br/>

<input
          type="text"
          placeholder="enter mobile_no"
          name="mobile_no"
          // value={datas.mobile_no}
          // onChange={(e)=>handlechange(e)}
             {...register("mobile_no", { required: "enter your mobile_no" })}
        />
  {errors.mobile_no && <p style={{ color: "red" }}>{errors.mobile_no.message}</p>}<br/>


<input
          type="text"
          placeholder="enter address"
          name="address"
          // value={datas.address}
          // onChange={(e)=>handlechange(e)}
          {...register("address", { required: "enter your address" })}
        />
  {errors.address && <p style={{ color: "red" }}>{errors.address.message}</p>}<br/>


<input
          type="text"
          placeholder="enter city"
          name="city"
          // value={datas.city}
          // onChange={(e)=>handlechange(e)}
          {...register("city", { required: "enter your city" })}
        />

{errors.city && <p style={{ color: "red" }}>{errors.city.message}</p>}<br/>
<input
          type="text"
          placeholder="enter state"
          name="state"
          // value={datas.state}
          // onChange={(e)=>handlechange(e)}
          {...register("state", { required: "enter your state" })}
        />
{errors.state && <p style={{ color: "red" }}>{errors.state.message}</p>}<br/>

<input
          type="text"
          placeholder="enter country"
          name="country"
          // value={datas.country}
          // onChange={(e)=>handlechange(e)}
          {...register("country", { required: "enter your country" })}
        />
{errors.country && <p style={{ color: "red" }}>{errors.country.message}</p>}<br/>
<input
          type="text"
          placeholder="enter skills"
          name="skills"
          // value={datas.skills}
          // onChange={(e)=>handlechange(e)}
          {...register("skills", { required: "enter your skills" })}
        />
{errors.skills && <p style={{ color: "red" }}>{errors.skills.message}</p>}<br/>

<input
          type="text"
          placeholder="enter user_type"
          name="user_type"
          // value={datas.user_type}
          // onChange={(e)=>handlechange(e)}
          {...register("user_type", { required: "enter your user_type" })}
        />
        {/* {user_type==1?<div>
welcome
        </div>:<div></div>} */}
{errors.user_type && <p style={{ color: "red" }}>{errors.user_type.message}</p>}<br/>

<input
          type="text"
          placeholder="enter company"
          name="company"
          {...register("company", { required: "enter your company" })}
        />
{errors.company && <p style={{ color: "red" }}>{errors.company.message}</p>}<br/>
        <input type="submit" />
      </form>
    </>
  );
}
