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
  },
});
