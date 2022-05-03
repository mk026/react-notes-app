import { FC } from "react";

import NotesList from "../../components/notes/notes-list/NotesList";

const NotesPage: FC = () => {
  return (
    <div>
      <h1>Notes</h1>
      <NotesList />
    </div>
  );
};

export default NotesPage;
