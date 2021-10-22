import React from "react";
import { formatDate } from "./utils";
import { deleteNote } from "./actions";
export default function Note({
  rerender,
  note: { content, createdAt, id: noteId },
}) {
  const date = formatDate(createdAt);

  const removeNote = (e, noteId, thunk) => {
    e.preventDefault();
    deleteNote(noteId, thunk);
  };

  return (
    <li id="note" className="note">
      <div className="note-module">
        <span>{content}</span>
      </div>
      <div className="note-segment">
        <span>{date}</span>
        <button
          className="remove"
          onClick={(e, thunk) => {
            removeNote(e, noteId, thunk);
          }}
          style={{ color: "rgb(255, 171,0" }}
        >
          remove
        </button>
      </div>
    </li>
  );
}
