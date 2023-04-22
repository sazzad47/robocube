import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";
// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  DashboardEcommerce,
});

export default rootReducer;
