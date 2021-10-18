import React, { useEffect } from "react";
import NoteContainer from "./NoteContainer.js";
import { initializeDB } from "./actions";
function App() {
  initializeDB();
  useEffect(() => initializeDB(), []);
  return <NoteContainer />;
}

export default App;
