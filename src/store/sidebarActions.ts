import { dataFetching, dataFetched, dataFetchingError } from "./sidebarSlice";

export const fetchData = (request: any) => (dispatch: any) => {
	dispatch(dataFetching());
	request()
		.then((data: any) => dispatch(dataFetched(data)))
		.catch(() => dispatch(dataFetchingError()));
};
