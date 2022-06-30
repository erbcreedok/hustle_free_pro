import { useCallback, useState } from "react";
import axios from "axios";

const _api = axios.create({
	baseURL: "https://hustle-free-d0a24-default-rtdb.firebaseio.com",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = async (url: string) => {
		setLoading(true);

		try {
			const response = await _api
				.get(`/sidebar.json`)
				.then((res) => res.data);
			setLoading(false);
			return response;
		} catch (e: any) {
			setLoading(false);
			setError(e.message);
			console.log(e.message);
			throw e;
		}
	};

	const clearError = useCallback(() => setError(null), []);

	return { request, clearError, loading, error };
};
