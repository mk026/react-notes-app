import { FC, FormEvent, useState } from "react";

import { useActions } from "../../../hooks/useActions";

const AddNoteForm: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useActions();

  const addNoteHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNote(title, content);
  };

  return (
    <form onSubmit={addNoteHandler}>
      <label htmlFor="note-title">Note title</label>
      <input
        id="note-title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="note-content">Note content</label>
      <input
        id="note-content"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default AddNoteForm;
