import { FC, useState } from "react";

import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import EditNoteForm from "../../forms/edit-note-form/EditNoteForm";
import { INote } from "../../../models/INote";
import { useActions } from "../../../hooks/useActions";

import classes from "./NoteItem.module.scss";

interface NoteItemProps {
  note: INote;
}

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { deleteNote } = useActions();

  const toggleEditForm = () => setIsEditing((prev) => !prev);
  const deleteNoteHandler = () => deleteNote(note._id);

  return (
    <>
      {isEditing && <EditNoteForm note={note} onClose={toggleEditForm} />}
      <Card className={classes.note}>
        <p className={classes["note__title"]}>{note.title}</p>
        <hr className={classes["note__hr"]} />
        <p>{note.content}</p>
        <Button onClick={toggleEditForm}>Edit</Button>
        <Button onClick={deleteNoteHandler}>Delete</Button>
      </Card>
    </>
  );
};

export default NoteItem;
