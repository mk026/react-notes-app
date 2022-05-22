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
    fetchNotes(state) {
      state.isLoading = true;
    },
    fetchNotesSuccess(state, action: PayloadAction<INote[]>) {
      state.isLoading = false;
      state.notes = action.payload;
    },
    fetchNotesError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    addNote(state) {
      state.isLoading = true;
    },
    addNoteSuccess(state, action: PayloadAction<INote>) {
      state.isLoading = false;
      state.notes.push(action.payload);
    },
    addNoteError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateNote(state) {
      state.isLoading = true;
    },
    updateNoteSuccess(state, action: PayloadAction<INote>) {
      const noteId = action.payload._id;
      const oldNoteIdx = state.notes.findIndex((note) => note._id === noteId);
      state.notes[oldNoteIdx] = action.payload;
      state.isLoading = false;
    },
    updateNoteError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteNote(state) {
      state.isLoading = true;
    },
    deleteNoteSuccess(state, action: PayloadAction<INote>) {
      state.isLoading = false;
      state.notes = state.notes.filter(
        (note) => note._id !== action.payload._id
      );
    },
    deleteNoteError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
