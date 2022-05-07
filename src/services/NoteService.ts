import { AxiosResponse } from "axios";
import { authApi } from "../api";
import { INote } from "../models/INote";

interface NoteResponse {
  notes: INote[];
}

export default class NoteService {
  static async fetchNotes(): Promise<AxiosResponse<NoteResponse>> {
    return authApi.get<NoteResponse>("/notes");
  }
}
