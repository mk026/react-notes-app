import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { INote } from "../models/INote";

export default class NoteService {
  static async fetchNotes(): Promise<AxiosResponse<INote[]>> {
    return authApi.get<INote[]>("/notes");
  }

  static async addNote(
    title: string,
    content: string
  ): Promise<AxiosResponse<INote>> {
    return authApi.post<INote>("/notes", { title, content });
  }

  static async updateNote(note: INote): Promise<AxiosResponse<INote>> {
    return authApi.put<INote>("/notes", note);
  }
}
