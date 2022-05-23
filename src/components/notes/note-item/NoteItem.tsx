import { FC, useState } from "react";

import { INote } from "../../../models/INote";
import { useActions } from "../../../hooks/useActions";
import EditNoteForm from "../../forms/edit-note-form/EditNoteForm";

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
        <button onClick={toggleEditForm}>Edit</button>
        <button onClick={deleteNoteHandler}>Delete</button>
      </div>
    </>
  );
};

export default NoteItem;
