import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchNotes } from "../../../store/action-creators/noteActionCreators";
import { getNoteState } from "../../../store/selectors/noteSelectors";
import NoteItem from "../note-item/NoteItem";

const NotesList: FC = () => {
  const { notes, isLoading, error } = useAppSelector(getNoteState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!notes.length) {
    return <div>No notes found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
