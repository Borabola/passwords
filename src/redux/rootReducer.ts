import { combineReducers } from "redux";
import authSlice from "./auth/sliceReducer";

export default combineReducers({
	auth: authSlice,
});
