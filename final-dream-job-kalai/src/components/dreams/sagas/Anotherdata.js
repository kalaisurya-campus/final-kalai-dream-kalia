import axios from "axios";
import { takeEvery, call, put } from "redux-saga/effects";
import {
  ANOTHER_GET_DATA,
  ANOTHER_SET_DATA,
} from "../reduxkalai/actions/Action";

function* kalaiWorkerGetData() {
  console.log("no");
  const uris = "https://jsonplaceholder.typicode.com/users";
  const datas = yield call(() => axios.get(uris));
  console.log("received", datas);
  yield put({ type: ANOTHER_SET_DATA, payload: datas.data });
}
export const kalaiGetUserDatas = function* () {
  yield takeEvery(ANOTHER_GET_DATA, kalaiWorkerGetData);
};
