import { FC, useState } from "react";

import { INote } from "../../../models/INote";
import EditNoteForm from "../../forms/edit-note-form/EditNoteForm";

interface NoteItemProps {
  note: INote;
}

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditForm = () => setIsEditing((prev) => !prev);

  return (
    <>
      {isEditing && <EditNoteForm note={note} />}
      <div>
        <p>{note.title}</p>
        <p>{note.content}</p>
        <button onClick={toggleEditForm}>Edit</button>
      </div>
    </>
  );
};

export default NoteItem;
