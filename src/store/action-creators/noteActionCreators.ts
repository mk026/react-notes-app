import { AppDispatch } from "..";
import { INote } from "../../models/INote";
import NoteService from "../../services/NoteService";
import { noteSlice } from "../reducers";

export const fetchNotes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(noteSlice.actions.enableLoading());
    const response = await NoteService.fetchNotes();
    dispatch(noteSlice.actions.fetchNotesSuccess(response.data));
  } catch (e) {
    dispatch(noteSlice.actions.setError((e as Error).message));
  }
};

export const addNote =
  (title: string, content: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(noteSlice.actions.enableLoading());
      const response = await NoteService.addNote(title, content);
      dispatch(noteSlice.actions.addNoteSuccess(response.data));
    } catch (e) {
      dispatch(noteSlice.actions.setError((e as Error).message));
    }
  };

export const updateNote = (note: INote) => async (dispatch: AppDispatch) => {
  try {
    dispatch(noteSlice.actions.enableLoading());
    const response = await NoteService.updateNote(note);
    dispatch(noteSlice.actions.updateNoteSuccess(response.data));
  } catch (e) {
    dispatch(noteSlice.actions.setError((e as Error).message));
  }
};

export const deleteNote = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(noteSlice.actions.enableLoading());
    const response = await NoteService.deleteNote(id);
    dispatch(noteSlice.actions.deleteNoteSuccess(response.data));
  } catch (e) {
    dispatch(noteSlice.actions.setError((e as Error).message));
  }
};

export const showEditNoteForm = (note: INote) => (dispatch: AppDispatch) => {
  dispatch(noteSlice.actions.setSelectedNote(note));
  dispatch(noteSlice.actions.toggleIsEditing());
};
