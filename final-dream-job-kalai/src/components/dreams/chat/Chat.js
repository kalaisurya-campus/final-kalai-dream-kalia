import React, { Component } from "react";
import Reduxdatakalai from "../reduxproviderdata/reduxdatakalai/Reduxdatakalai";
import "./styles/Chat.scss";

// const sum = (a, b) => {
//   return a + b;
// };
// const result = (type) => {
//   if (type == "sum") {
//     return sum;
//   }
// };

const anothercomponent = (Datas) => {
  return (props) => {
    return (
      <div className="border border-danger">
        <Datas {...props} />
      </div>
    );
  };
};
const Applydata = anothercomponent(Reduxdatakalai);
class Chat extends Component {
  constructor(props) {
    super(props);
    // console.log(result("sum")(10, 10));
  }

  render() {
    return (
      <div className="mains">
        <h1>welcome too kalaisurya</h1>
      </div>
    );
  }
}

export default Chat;
