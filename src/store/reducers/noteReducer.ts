import { createSlice } from "@reduxjs/toolkit";

import { INote } from "../../models/INote";

interface NotesState {
  notes: INote[];
}

const initialState: NotesState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
});
