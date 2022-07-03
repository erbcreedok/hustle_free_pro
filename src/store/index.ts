import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../store/sidebarSlice";

const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
	},
	devTools: process.env.NOVE_ENV !== "production",
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
