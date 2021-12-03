import { combineReducers } from "redux";
import fetchUserReducer from "./userReducer";

const rootReducer = combineReducers({
    users: fetchUserReducer
})

export default rootReducer;