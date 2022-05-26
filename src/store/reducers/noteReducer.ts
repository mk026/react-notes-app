import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INote } from "../../models/INote";

interface NotesState {
  notes: INote[];
  isLoading: boolean;
  error: string | null;
}

const initialState: NotesState = {
  notes: [],
  isLoading: false,
  error: null,
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    enableLoading(state) {
      state.isLoading = true;
    },
    fetchNotesSuccess(state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.notes = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNoteSuccess(state, action: PayloadAction<INote>) {
      state.isLoading = false;
      state.notes.push(action.payload);
    },
    updateNoteSuccess(state, action: PayloadAction<INote>) {
      const noteId = action.payload._id;
      const oldNoteIdx = state.notes.findIndex((note) => note._id === noteId);
      state.notes[oldNoteIdx] = action.payload;
      state.isLoading = false;
    },
    deleteNoteSuccess(state, action: PayloadAction<INote>) {
      state.isLoading = false;
      state.notes = state.notes.filter(
        (note) => note._id !== action.payload._id
      );
    },
  },
});
