import React, { Component } from "react";
import "./styles/Jobsapply.scss";
import login_image from "../../../assets/dreams-images/jobapply.webp";
import login_apply from "../../../assets/dreams-images/jobapplys_image.gif";
import reading_book from "../../../assets/dreams-images/book.jpg";
import read_book from "../../../assets/dreams-images/book_read.jpg";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import books from "../../../assets/dreams-images/book_show_mark.jpeg";
import api from "../Apiurls";

let id;
let data;
// const api = axios.create({
//   baseURL: "http://localhost:11000/",
// });
// api.defaults.withCredentials = true;
class Jobsapply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apply_data: [],
      is_bookmarked: false,
      job: id,
      // bookmarkdata:
    };
    // data=this.state.is_bookmarked;
    id = this.props.match.params.id;
    console.log(id);
  }
  componentDidMount() {
    console.log(id);
    api
      .get(`manage_jobs/${id}/`)
      .then((res) => {
        if (res.status == 200) {
          console.log(res.data.data);
          this.setState({ apply_data: [res.data.data] });
        } else {
          console.log("error the page!!");
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
  }
  change_bookmarks = () => {
    // console.log('hai');
    // api.post('/admin/login')
    // .then(res=>{
    //   console.log(res);
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
  };
  changeColor() {
    // e.preventDefault();
   //.then((data)=>{

    if(!this.state.is_bookmarked){
    // alert("welcome");
    api
      .post("bookmarks/", { job: id, is_bookmarked: this.state.is_bookmarked })
      .then((res) => {
        // console.log(res.data);
        if (res.status == 201) {
          this.setState({ is_bookmarked: !this.state.is_bookmarked });
          // console.log(res.data);

          // console.log("welcome")
          // this.setState({is_bookmarked:res.data});
        }
      })
      .catch((err) => {
        console.log(err.res);
      });
    }
    else{
      api.delete("bookmarks/"+id, { job: id, is_bookmarked: this.state.is_bookmarked }).then(res=>{
        console.log(res);
        if(res.status==204)
        {
          this.setState({ is_bookmarked: !this.state.is_bookmarked });
        }
      })
    }
  //});
  }
  render() {
    const { apply_data, is_bookmarked } = this.state;
    let btn_class = this.state.is_bookmarked ? "greenButton" : "redButton";
    console.log(is_bookmarked);
    return (
      <div className="job_apply">
        <nav className="nav_apply">
          <button className="back">
            <NavLink to="/employserach" className="nav-link">Back</NavLink>
          </button>
          <h1>Apply Jobs</h1>
          <img
            src={books}
            className={btn_class}
            onClick={this.changeColor.bind(this)}
          />
          {/* <button onClick={() => this.change_bookmarks()} className="Bookmark">Bookmark</button> */}

          {/* <button
        onClick={() => {
          this.state.is_bookmarked ?  this.state.is_bookmarked(false) :  this.state.is_bookmarked(true);
        }}
        className={ this.state.is_bookmarked ? "btnClass clicked" : "btnClass"}
      >
        button
      </button> */}
        </nav>
        <div className="apply_split">
          <div className="left_spalit">
            {apply_data ? (
              <div>
                {apply_data.map((items, index) => {
                  return (
                    <div className="right_apply">
                      <img src={items.company_image} />
                      <h1 className="">{items.company_name}</h1>
                      <h2 className="">{items.title}</h2>
                      <h3>{items.position}</h3>
                      <h4>
                        {items.type == 1 ? (
                          <div>Full Time</div>
                        ) : (
                          <div>Part Time</div>
                        )}
                      </h4>
                      <h4>{items.skills}</h4>
                      <h4>{items.requirements}</h4>
                      <h4 className="description">{items.description}</h4>
                      <h2 className="h2">{items.location}</h2>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>thanks</div>
            )}
            <NavLink to={`/resumeattch/${id}`}>
              <button className="apply mt-5">Apply</button>
            </NavLink>
          </div>
          <div className="right_spalit">
            {/* <img src={login_image}/> */}
            <img src={login_apply} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Jobsapply);
