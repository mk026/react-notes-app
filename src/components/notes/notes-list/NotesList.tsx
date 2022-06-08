import { FC, useEffect } from "react";

import NoteItem from "../note-item/NoteItem";
import { useAppSelector } from "../../../hooks/redux";
import { useActions } from "../../../hooks/useActions";
import { getNoteState } from "../../../store/selectors";

import classes from "./NotesList.module.scss";

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
    <>
      <div className={classes["notes-list"]}>
        {notes.map((note) => (
          <NoteItem key={note._id} note={note} />
        ))}
      </div>
    </>
  );
};

export default NotesList;
