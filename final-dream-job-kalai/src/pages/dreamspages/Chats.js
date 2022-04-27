import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Chat from "../../components/dreams/chat/Chat";

class Chats extends Component {
  render() {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}

export default withRouter(Chats);
