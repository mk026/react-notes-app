import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { INote } from "../models/INote";

export default class NoteService {
  static async fetchNotes(): Promise<AxiosResponse<INote[]>> {
    return authApi.get<INote[]>("/notes");
  }
}
