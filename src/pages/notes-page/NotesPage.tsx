import { FC } from "react";

import AddNoteForm from "../../components/forms/add-note-form/AddNoteForm";
import NotesList from "../../components/notes/notes-list/NotesList";

const NotesPage: FC = () => {
  return (
    <div>
      <h1>Notes</h1>
      <AddNoteForm />
      <NotesList />
    </div>
  );
};

export default NotesPage;
