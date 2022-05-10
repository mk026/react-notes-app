import { FC } from "react";

const EditNoteForm: FC = () => {
  return (
    <form>
      <label htmlFor="edit-note-title">New note title</label>
      <input id="edit-note-title" type="text" />
      <label htmlFor="edit-note-content">New note content</label>
      <input id="edit-note-content" type="text" />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditNoteForm;
