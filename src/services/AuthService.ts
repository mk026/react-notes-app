import { AxiosResponse } from "axios";
import { api, authApi } from "../api";
import { IUser } from "../models/IUser";

export interface AuthResponse {
  user: IUser;
  token: string;
}

export default class AuthService {
  static tokenKey = "token";

  static async signin(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/signin", { email, password });
  }

  static async signup(
    name: string,
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>("/signup", { name, email, password });
  }

  static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
    return authApi.get<AuthResponse>("/check");
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
