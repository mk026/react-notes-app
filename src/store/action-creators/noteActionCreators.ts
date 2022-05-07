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
