import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { ITodo } from "../models/ITodo";

export default class TodoService {
  static async fetchTodos(): Promise<AxiosResponse<ITodo[]>> {
    return authApi.get<ITodo[]>("/todos");
  }

  static async addTodo(title: string): Promise<AxiosResponse<ITodo>> {
    return authApi.post<ITodo>("/todos", { title });
  }

  static async updateTodo(todo: ITodo): Promise<AxiosResponse<ITodo>> {
    return authApi.put<ITodo>("/todos", todo);
  }
}
