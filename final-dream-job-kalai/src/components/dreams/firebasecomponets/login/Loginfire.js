import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles/Loginfire.scss";
function Loginfire(props) {
  const histroy = useHistory();
  console.log(histroy);
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const onsubmitfire = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="form_main">
      <button onClick={() => histroy.goBack()}>click back home</button>
      <div className="form-div">
        <form onSubmit={onsubmitfire}>
          <div>
            <input
              type="email"
              placeholder="Entre email"
              name="email"
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              type="password"
              placeholder="Entre password"
              name="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="logins_button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginfire;
