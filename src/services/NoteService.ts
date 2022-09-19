import { AxiosResponse } from "axios";
import { ApiEndpoints, authApi } from "../api";
import { INote } from "../models/INote";

export default class NoteService {
  static fetchNotes(): Promise<AxiosResponse<INote[]>> {
    return authApi.get<INote[]>(ApiEndpoints.NOTES);
  }

  static addNote(
    title: string,
    content: string
  ): Promise<AxiosResponse<INote>> {
    return authApi.post<INote>(ApiEndpoints.NOTES, { title, content });
  }

  static updateNote(note: INote): Promise<AxiosResponse<INote>> {
    return authApi.put<INote>(ApiEndpoints.NOTES, note);
  }

  static deleteNote(id: string): Promise<AxiosResponse<INote>> {
    return authApi.delete<INote>(`${ApiEndpoints.NOTES}/${id}`);
  }
}
