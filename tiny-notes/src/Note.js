import React from "react";
import { formatDate } from "./utils";
import { deleteNote } from "./actions";
export default function Note({
  rerender,
  note: { content, dateCreated, id: noteId },
}) {
  const date = formatDate(dateCreated);

  const removeNote = (e, noteId, thunk) => {
    e.preventDefault();
    deleteNote(noteId, thunk);
  };

  return (
    <li className="note">
      <p>{content}</p>
      <footer>
        <span>{date}</span>
        <button
          onClick={(e, thunk) => {
            removeNote(e, noteId, thunk);
          }}
        >
          remove
        </button>
      </footer>
    </li>
  );
}
