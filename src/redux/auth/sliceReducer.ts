import {
	createSlice, PayloadAction
} from "@reduxjs/toolkit";
import { AuthStatusEnum } from "../../types";

const initialState = {
	authorizationStatus: AuthStatusEnum.UNKNOWN,
};

const userSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		requireAuthorization(
			state, action: PayloadAction<AuthStatusEnum>
		) {
			state.authorizationStatus = action.payload;
		},
		logout(state) {
			state.authorizationStatus = AuthStatusEnum.NO_AUTH;
		},
	},
});

export const { requireAuthorization, logout } = userSlice.actions;

export default userSlice.reducer;
