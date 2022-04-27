import React, { Component } from "react";
import Bookmarks from "../../components/dreams/bookmarks/Bookmarks";
import { withRouter } from "react-router-dom";
class Booksmarks extends Component {
  render() {
    return (
      <div>
        <Bookmarks />
      </div>
    );
  }
}

export default withRouter(Booksmarks);
