import React, { useState } from "react";
import Note from "./Note";
// import { notes } from "./notes.json";
import { fetchNotes } from "./actions";

export default function NoteContainer() {
  const notes = fetchNotes();
  const [_, rerender] = useState(); //ever want to trigger a rerender?

  new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

  return (
    <div className="note-container">
      <h1>NoteContainer</h1>
      <ul className="notes-ul">
        {notes &&
          notes.map((note) => (
            <Note rerender={rerender} key={note.id} note={note} />
          ))}
      </ul>
    </div>
  );
}
