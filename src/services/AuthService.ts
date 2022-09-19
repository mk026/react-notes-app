import { AxiosResponse } from "axios";
import { api, ApiEndpoints, authApi } from "../api";
import { IUser } from "../models/IUser";

export interface AuthResponse {
  user: IUser;
  token: string;
}

export default class AuthService {
  static tokenKey = "token";

  static signin(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(ApiEndpoints.SIGNIN, { email, password });
  }

  static signup(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(ApiEndpoints.SIGNUP, {
      name,
      email,
      password,
    });
  }

  static checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return authApi.get<AuthResponse>(ApiEndpoints.CHECK);
  }

  static storeToken(token: string) {
    localStorage.setItem(AuthService.tokenKey, token);
  }

  static getStoredToken() {
    return localStorage.getItem(AuthService.tokenKey);
  }

  static removeStoredToken() {
    localStorage.removeItem(AuthService.tokenKey);
  }
}
