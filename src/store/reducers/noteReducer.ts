import { createSlice } from "@reduxjs/toolkit";

interface NotesState {
  notes: any[];
}

const initialState: NotesState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {},
});
