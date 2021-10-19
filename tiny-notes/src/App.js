import React, { useEffect } from "react";
import NoteContainer from "./NoteContainer.js";
import { initializeDB } from "./actions";
import NotesForm from "./NotesForm.js";
function App() {
  useEffect(() => initializeDB(), []);
  return (
    <div className="tiny_notes-app">
      <NoteContainer />
      <NotesForm />
    </div>
  );
}

export default App;
