import { all, fork } from "redux-saga/effects";
//calendar
import calendarSaga from "./calendar/saga";

export default function* rootSaga() {
  yield all([
    fork(calendarSaga),
  ]);
}
