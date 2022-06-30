import { createSlice } from "@reduxjs/toolkit";
const initialState = {
	sidebarData: [],
	loadingStatus: "none",
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		dataFetching: (state) => {
			state.loadingStatus = "loading";
		},
		dataFetched: (state, action) => {
			state.loadingStatus = "none";
			state.sidebarData = action.payload;
		},
		dataFetchingError: (state) => {
			state.loadingStatus = "error";
		},
	},
});

const { actions, reducer } = sidebarSlice;

export default reducer;
export const { dataFetching, dataFetched, dataFetchingError } = actions;
