import React from "react";
import Home from "../firebasecomponets/home/Home";

import Navbarfire from "../kalaifirebasenavbar/navbars/Navbarfire";
import "./styles/Testfires.scss";
function TestfireBase(props) {
  return (
    <div className="test">
      <Navbarfire />
      <Home />
    </div>
  );
}

export default TestfireBase;
