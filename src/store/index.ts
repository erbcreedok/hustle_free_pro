import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "../store/sidebarSlice";
const stringMiddleware = (store: any) => (next: any) => (action: any) => {
	if (typeof action === "string") {
		return next({
			type: action,
		});
	}

	return next(action);
};

const store: any = configureStore({
	reducer: {
		sidebar: sidebarSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NOVE_ENV !== "production",
});

export default store;
