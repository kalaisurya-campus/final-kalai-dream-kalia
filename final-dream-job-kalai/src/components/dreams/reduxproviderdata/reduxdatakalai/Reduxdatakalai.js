import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  ANOTHER_GET_DATA,
  GET_USERS_DATA,
  SET_USERS_DATA,
} from "../../reduxkalai/actions/Action";

// import axios from "axios";

// const apis = axios.create({
//   baseURL: "https://jsonplaceholder.typicode.com/users",
// });
function Reduxdatakalai(props) {
  useEffect(() => {
    // apis
    //   .get("/")
    //   .then((res) => {
    //     console.log(res.data);
    //     props.datased(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err, "no data found");
    //   });
    props.getdatas();
    props.anotherdatas();
  }, []);
  return (
    <div>
      <h1 className="mb-5 mt-3">redux datas and redux-saga data!!</h1>
      <p>{props.name}</p>
      <div className="container">
        {props.reduxdata ? (
          <div className="row">
            {props.reduxdata.map((test, index) => {
              return (
                <div key={index} className="row">
                  {/* <p>{test.name}</p>
                <p>{test.username}</p> */}

                  <p>{test.title}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
      <div>
        {props.anotherreduxdata ? (
          <div>
            {props.anotherreduxdata.map((sample, index) => {
              return (
                <div key={index}>
                  <p>{sample.name}</p>
                  <h1>{sample.username}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          <div>thanks</div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reduxdata: state.kalaidata,
    anotherreduxdata: state.anotherdata,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // datased: (reduxdata) => {
    //   dispatch({ type: SET_USERS_DATA, value: reduxdata });
    // },
    getdatas: () => {
      dispatch({ type: GET_USERS_DATA });
    },
    anotherdatas: () => {
      dispatch({ type: ANOTHER_GET_DATA });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Reduxdatakalai));
