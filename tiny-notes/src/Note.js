import React from "react";
import { formatDate } from "./utils";
import { deleteNote } from "./actions";
export default function Note({ note: { content, dateCreated, noteId } }) {
  const date = formatDate(dateCreated);

  const removeNote = (e, noteId) => {
    e.preventDefault();
    deleteNote(noteId);
  };

  return (
    <li className="note">
      <p>{content}</p>
      <footer>
        <span>{date}</span>
        <button onClick={(e) => removeNote(e, noteId)}>remove</button>
      </footer>
    </li>
  );
}
