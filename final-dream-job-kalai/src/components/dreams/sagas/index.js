import { all, fork } from "redux-saga/effects";
import { kalaiGetUserDatas } from "./Anotherdata";
import { watcherGetUsers } from "./getdata";

export default function* () {
  console.log("worked");
  yield all([fork(watcherGetUsers), fork(kalaiGetUserDatas)]);
}
