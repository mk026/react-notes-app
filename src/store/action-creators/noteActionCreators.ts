import { AppDispatch } from "..";
import NoteService from "../../services/NoteService";
import { noteSlice } from "../reducers/noteReducer";

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(noteSlice.actions.fetchNotes());
    const response = await NoteService.fetchNotes();
    dispatch(noteSlice.actions.fetchNotesSuccess(response.data));
  } catch (e) {
    dispatch(noteSlice.actions.fetchNotesError((e as Error).message));
  }
};

export const addNote =
  (title: string, content: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(noteSlice.actions.addNote());
      const response = await NoteService.addNote(title, content);
      dispatch(noteSlice.actions.addNoteSuccess(response.data));
    } catch (e) {
      dispatch(noteSlice.actions.addNoteError((e as Error).message));
    }
  };
