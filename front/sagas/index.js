import { all, call } from "redux-saga/effects";
import axios from "axios";
import user from "../sagas/user";
import post from "../sagas/post";
import { backUrl } from "../config/config";

axios.defaults.baseURL = `${backUrl}/api`;

export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
