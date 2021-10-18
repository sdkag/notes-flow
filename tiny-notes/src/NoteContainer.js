import React, { useEffect } from "react";
import Note from "./Note";
import * as data from "./notes.json";
//TODO write ajax version

const fetchNotes = () => {
  return data.notes;
};

export default function NoteContainer() {
  const notes = fetchNotes();
  // debugger;
  // const [notes, setNotes] = React.useState([]);
  new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(new Date());

  return (
    <>
      <h1>NoteContainer</h1>
      <div>
        {notes && notes.map((note) => <Note key={note.id} note={note} />)}
      </div>
    </>
  );
}
