import { AxiosRequestConfig } from "axios";

export function axiosGetDiagnose(): AxiosRequestConfig {
	return {
		method: "GET",
		url: "http://localhost:5000/diagnose",
	};
}
