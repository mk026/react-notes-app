import { FC } from "react";

const AddNoteForm: FC = () => {
  return (
    <form>
      <label htmlFor="note-title">Note title</label>
      <input id="note-title" type="text" />
      <label htmlFor="note-content">Note content</label>
      <input id="note-content" type="text" />
    </form>
  );
};

export default AddNoteForm;
