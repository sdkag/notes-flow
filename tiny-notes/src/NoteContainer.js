import React, { useEffect } from "react";
import Note from "./Note";
import * as data from "./notes.json";
import { fetchNotes } from "./actions";

export default function NoteContainer() {
  // debugger;
  const notes = fetchNotes();

  new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

  return (
    <div className="note-container">
      <h1>NoteContainer</h1>
      <ul className>
        {notes && notes.map((note) => <Note key={note.id} note={note} />)}
      </ul>
    </div>
  );
}
