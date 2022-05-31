import { FC, useState } from "react";

import AddNoteForm from "../../components/forms/add-note-form/AddNoteForm";
import NotesList from "../../components/notes/notes-list/NotesList";
import Button from "../../components/ui/button/Button";
import Page from "../../components/ui/page/Page";

const NotesPage: FC = () => {
  const [isAddingNote, setIsAddingNote] = useState(false);

  const toggleAddNoteFormHandler = () => setIsAddingNote((prev) => !prev);

  return (
    <Page>
      <h1>Notes</h1>
      <Button onClick={toggleAddNoteFormHandler}>Add new note</Button>
      {isAddingNote && <AddNoteForm onClose={toggleAddNoteFormHandler} />}
      <NotesList />
    </Page>
  );
};

export default NotesPage;
