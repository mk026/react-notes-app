import { AxiosResponse } from "axios";
import { ApiEndpoints, authApi } from "../api";
import { IUser } from "../models/IUser";

export default class UserService {
  static updateName(name: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { name });
  }

  static updateEmail(email: string): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { email });
  }

  static updatePassword(
    oldPassword: string,
    newPassword: string
  ): Promise<AxiosResponse<IUser>> {
    return authApi.put<IUser>(ApiEndpoints.USERS, { oldPassword, newPassword });
  }

  static deleteAccount(): Promise<AxiosResponse> {
    return authApi.delete(ApiEndpoints.USERS);
  }
}
