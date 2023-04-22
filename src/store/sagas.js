import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
// Dashboard Ecommerce
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";

export default function* rootSaga() {
  yield all([
    fork(LayoutSaga),
    fork(dashboardEcommerceSaga),
  ]);
}
