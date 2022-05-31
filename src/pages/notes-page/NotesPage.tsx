import { FC, useState } from "react";

import AddNoteForm from "../../components/forms/add-note-form/AddNoteForm";
import NotesList from "../../components/notes/notes-list/NotesList";
import Button from "../../components/ui/button/Button";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";

const NotesPage: FC = () => {
  const [isAddingNote, setIsAddingNote] = useState(false);

  const toggleAddNoteFormHandler = () => setIsAddingNote((prev) => !prev);

  return (
    <Page>
      <PageTop>
        <h1>Notes</h1>
        <Button onClick={toggleAddNoteFormHandler}>Add new note</Button>
      </PageTop>
      {isAddingNote && <AddNoteForm onClose={toggleAddNoteFormHandler} />}
      <NotesList />
    </Page>
  );
};

export default NotesPage;
