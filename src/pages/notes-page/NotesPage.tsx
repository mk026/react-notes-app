import { FC } from "react";

import AddNoteForm from "../../components/forms/add-note-form/AddNoteForm";
import EditNoteForm from "../../components/forms/edit-note-form/EditNoteForm";
import NotesList from "../../components/notes/notes-list/NotesList";
import Button from "../../components/ui/button/Button";
import Drawer, { DrawerPosition } from "../../components/ui/drawer/Drawer";
import PageTop from "../../components/ui/page-top/PageTop";
import Page from "../../components/ui/page/Page";
import { useAppSelector } from "../../hooks/redux";
import { useActions } from "../../hooks/useActions";
import { getNoteState } from "../../store/selectors";

const NotesPage: FC = () => {
  const { isAdding, isEditing, selectedNote } = useAppSelector(getNoteState);
  const { toggleIsAdding, toggleIsEditing } = useActions();

  const toggleAddNoteFormHandler = () => toggleIsAdding();
  const toggleEditNoteFormHadler = () => toggleIsEditing();

  return (
    <>
      <Drawer
        isActive={isAdding}
        onClose={toggleAddNoteFormHandler}
        position={DrawerPosition.RIGHT}
      >
        <AddNoteForm onClose={toggleAddNoteFormHandler} />
      </Drawer>
      <Drawer
        isActive={isEditing}
        onClose={toggleEditNoteFormHadler}
        position={DrawerPosition.RIGHT}
      >
        {selectedNote && (
          <EditNoteForm
            note={selectedNote}
            onClose={toggleEditNoteFormHadler}
          />
        )}
      </Drawer>
      <Page>
        <PageTop title="My Notes">
          <Button onClick={toggleAddNoteFormHandler}>Add new note</Button>
        </PageTop>
        <NotesList />
      </Page>
    </>
  );
};

export default NotesPage;
