import { FC } from "react";

import AddNoteForm from "../../components/forms/add-note-form/AddNoteForm";
import NotesList from "../../components/notes/notes-list/NotesList";
import Page from "../../components/ui/page/Page";

const NotesPage: FC = () => {
  return (
    <Page>
      <h1>Notes</h1>
      <AddNoteForm />
      <NotesList />
    </Page>
  );
};

export default NotesPage;
