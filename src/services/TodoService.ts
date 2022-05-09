import { AxiosResponse } from "axios";
import { ApiEndpoints, authApi } from "../api";
import { ITodo } from "../models/ITodo";

export default class TodoService {
  static async fetchTodos(): Promise<AxiosResponse<ITodo[]>> {
    return authApi.get<ITodo[]>(ApiEndpoints.TODOS);
  }

  static async addTodo(title: string): Promise<AxiosResponse<ITodo>> {
    return authApi.post<ITodo>(ApiEndpoints.TODOS, { title });
  }

  static async updateTodo(todo: ITodo): Promise<AxiosResponse<ITodo>> {
    return authApi.put<ITodo>(ApiEndpoints.TODOS, todo);
  }
}
