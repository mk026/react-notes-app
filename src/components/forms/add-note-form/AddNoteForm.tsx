import { FC, FormEvent, useState } from "react";

import { useAppDispatch } from "../../../hooks/redux";
import { addNote } from "../../../store/action-creators/noteActionCreators";

const AddNoteForm: FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const addNoteHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addNote(title, content));
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
