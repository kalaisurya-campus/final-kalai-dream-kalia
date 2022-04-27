import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
import { GET_USERS_DATA, SET_USERS_DATA } from "../reduxkalai/actions/Action";

function* workerGetUsers() {
  console.log("not working");
  const uri = "https://jsonplaceholder.typicode.com/albums";
  const result = yield call(() => axios.get(uri));
  //   console.log(result);
  yield put({ type: SET_USERS_DATA, value: result.data });
}
export const watcherGetUsers = function* () {
  yield takeEvery(GET_USERS_DATA, workerGetUsers);
};
