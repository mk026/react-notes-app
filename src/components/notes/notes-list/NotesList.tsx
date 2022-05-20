import { FC, useEffect } from "react";

import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { getNoteState } from "../../../store/selectors";
import NoteItem from "../note-item/NoteItem";

const NotesList: FC = () => {
  const { notes, isLoading, error } = useAppSelector(getNoteState);
  const { fetchNotes } = useActions();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

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
        <NoteItem key={note._id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
