import { combineReducers } from "redux";

//Calendar
import Calendar from "./calendar/reducer";

const rootReducer = combineReducers({
  Calendar,
});

export default rootReducer;
