import axios, { AxiosRequestConfig } from "axios";
import AuthService from "../services/AuthService";

export const API_URL = "http://localhost:8080/api";

export enum ApiEndpoints {
  SIGNIN = "/signin",
  SIGNUP = "/signup",
  CHECK = "/check",
  NOTES = "/notes",
  USERS = "/users",
  TODOS = "/todos",
  IMAGES = "/images",
}

export const api = axios.create({ baseURL: API_URL });

export const authApi = axios.create({ baseURL: API_URL });

const authInterceptor = (config: AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${AuthService.getStoredToken()}`;
  return config;
};

authApi.interceptors.request.use(authInterceptor);
