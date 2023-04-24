import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//calendar
import calendarSaga from "./calendar/saga";

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    fork(calendarSaga),
  ]);
}
