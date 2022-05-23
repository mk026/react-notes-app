import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";
import { INote } from "../../../models/INote";

interface EditNoteFormProps {
  note: INote;
  onClose: () => void;
}

const EditNoteForm: FC<EditNoteFormProps> = ({ note, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { updateNote } = useActions();

  const editNoteHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateNote({ _id: note._id, title, content });
  };

  return (
    <form onSubmit={editNoteHandler}>
      <label htmlFor="edit-note-title">New note title</label>
      <input
        id="edit-note-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="edit-note-content">New note content</label>
      <input
        id="edit-note-content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Save</button>
      <button onClick={onClose}>Close</button>
    </form>
  );
};

export default EditNoteForm;
