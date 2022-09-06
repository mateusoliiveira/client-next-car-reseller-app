import axios, { AxiosInstance } from "axios";
import { clientURLApi, serverURLApi } from "./config/apiDEV";

export const ApiServer: AxiosInstance = axios.create({
	baseURL: serverURLApi,
});

export const ApiClient: AxiosInstance = axios.create({
	baseURL: clientURLApi,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});
