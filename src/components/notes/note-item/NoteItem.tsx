import { FC, useState } from "react";

import Card from "../../ui/card/Card";
import Button from "../../ui/button/Button";
import { INote } from "../../../models/INote";
import { useActions } from "../../../hooks/useActions";

import classes from "./NoteItem.module.scss";

interface NoteItemProps {
  note: INote;
}

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { showEditNoteForm, deleteNote } = useActions();

  const isExpandable = note.content.length > 100;

  const contentStyles = [classes["note__content"]];

  if (isExpandable && !isExpanded) {
    contentStyles.push(classes["note__content--preview"]);
  }

  const editNoteHandler = () => showEditNoteForm(note);
  const deleteNoteHandler = () => deleteNote(note._id);
  const toggleFullNoteHandler = () => setIsExpanded((prev) => !prev);

  return (
    <Card className={classes["note"]}>
      <p className={classes["note__title"]}>{note.title}</p>
      <hr className={classes["note__hr"]} />
      <p className={contentStyles.join(" ")}>{note.content}</p>
      <div className={classes["note__controls"]}>
        <Button onClick={editNoteHandler}>Edit</Button>
        <Button onClick={deleteNoteHandler}>Delete</Button>
        {isExpandable && (
          <Button onClick={toggleFullNoteHandler}>
            {isExpanded ? "Hide" : "Expand"}
          </Button>
        )}
      </div>
    </Card>
  );
};

export default NoteItem;
