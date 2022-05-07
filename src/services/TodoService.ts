import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { ITodo } from "../models/ITodo";

export default class TodoService {
  static async fetchTodos(): Promise<AxiosResponse<ITodo[]>> {
    return authApi.get<ITodo[]>("/todos");
  }
}
