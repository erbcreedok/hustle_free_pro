import { Dispatch } from ".";
import { dataFetching, dataFetched, dataFetchingError } from "./sidebarSlice";

type Request<R = unknown> = () => Promise<R>;
export const fetchData =
	<R = unknown>(request: Request<R>) =>
	(dispatch: Dispatch) => {
		dispatch(dataFetching());
		request()
			.then((data) => dispatch(dataFetched(data)))
			.catch(() => dispatch(dataFetchingError()));
	};
