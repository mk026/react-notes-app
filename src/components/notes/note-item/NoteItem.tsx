import { FC, useState } from "react";

import Button from "../../ui/button/Button";
import EditNoteForm from "../../forms/edit-note-form/EditNoteForm";
import { INote } from "../../../models/INote";
import { useActions } from "../../../hooks/useActions";

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
      <div>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <Button onClick={toggleEditForm}>Edit</Button>
        <Button onClick={deleteNoteHandler}>Delete</Button>
      </div>
    </>
  );
};

export default NoteItem;
