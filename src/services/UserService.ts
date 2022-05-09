import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { IUser } from "../models/IUser";

export default class UserService {
  static async updateName(name: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>("/users", { name });
  }

  static async updateEmail(email: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>("/users", { email });
  }

  static async updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>("/users", { oldPassword, newPassword });
  }
}
