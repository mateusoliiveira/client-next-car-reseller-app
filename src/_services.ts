import axios, { AxiosInstance } from "axios";
import { clientURLApiDEV, serverURLApiDEV } from "../apiDEV";

export const ApiServer: AxiosInstance = axios.create({
	baseURL: serverURLApiDEV,
});

export const ApiClient: AxiosInstance = axios.create({
	baseURL: clientURLApiDEV,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});
