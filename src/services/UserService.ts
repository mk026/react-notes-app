import { AxiosResponse } from "axios";
import { ApiEndpoints, authApi } from "../api";
import { IUser } from "../models/IUser";

export default class UserService {
  static async updateName(name: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { name });
  }

  static async updateEmail(email: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { email });
  }

  static async updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { oldPassword, newPassword });
  }

  static async deleteAccount(): Promise<AxiosResponse> {
    return authApi.delete(ApiEndpoints.USERS);
  }
}
