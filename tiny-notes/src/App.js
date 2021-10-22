import React, { useEffect, useState } from "react";
import NoteContainer from "./NoteContainer.js";
import Login from "./Login";
import { fetchNotes } from "./actions";
function App() {
  const [_, rerender] = useState(); //ever want to trigger a rerender?
  let [notes, setNotes] = useState(null);

  const iife = async () => {
    const data = await fetchNotes();
    setNotes(() => data);
    return data;
  };
  useEffect(() => {
    iife().then((notes) => {
      console.log(notes);
    });
  }, []);
  const props = { notes, setNotes, rerender };
  return <NoteContainer {...props} />;
}

export default App;
