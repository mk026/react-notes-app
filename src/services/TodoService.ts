import { AxiosResponse } from "axios";
import { ApiEndpoints, authApi } from "../api";
import { ITodo } from "../models/ITodo";

export default class TodoService {
  static fetchTodos(): Promise<AxiosResponse<ITodo[]>> {
    return authApi.get<ITodo[]>(ApiEndpoints.TODOS);
  }

  static addTodo(title: string): Promise<AxiosResponse<ITodo>> {
    return authApi.post<ITodo>(ApiEndpoints.TODOS, { title });
  }

  static updateTodo(todo: ITodo): Promise<AxiosResponse<ITodo>> {
    return authApi.put<ITodo>(ApiEndpoints.TODOS, todo);
  }

  static deleteTodo(id: string): Promise<AxiosResponse<ITodo>> {
    return authApi.delete<ITodo>(`${ApiEndpoints.TODOS}/${id}`);
  }
}
