import { FC } from "react";
import { INote } from "../../../models/INote";

interface NoteItemProps {
  note: INote;
}

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteItem;
