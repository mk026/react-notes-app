import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { ITodo } from "../models/ITodo";

interface TodoResponse {
  notes: ITodo[];
}

export default class TodoService {
  static async fetchTodos(): Promise<AxiosResponse<TodoResponse>> {
    return authApi.get<TodoResponse>("/todos");
  }
}
