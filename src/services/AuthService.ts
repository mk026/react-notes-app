import { AxiosResponse } from "axios";
import { api } from "../api";
import { IUser } from "../models/IUser";

export default class AuthService {
  static async signin(
    email: string,
    password: string
  ): Promise<AxiosResponse<IUser>> {
    return api.post<IUser>("/signin", { email, password });
  }
}
