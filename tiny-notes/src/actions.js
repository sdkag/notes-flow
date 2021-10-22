// import * as promises from "fs";
import { notes } from "./notes.json";

export const updateDB = async (writeableJSON) => {
  if (typeof writeableJSON !== "string") {
    writeableJSON = JSON.stringify(writeableJSON);
  }

  localStorage.setItem("notes", writeableJSON);
};

export const initializeDB = () => updateDB(notes);
// fs.writeFile;
export const deleteNote = (noteId, thunk) => {
  if (!noteId) throw Error("noteId is not defined");
  const notes = JSON.parse(localStorage.getItem("notes")).filter(
    (note) => note.id !== noteId
  );
  updateDB(notes);
  thunk();
  return noteId;
};

export const addNote = async (newNote) => {
  const response = await fetch("/api/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newNote),
  });
  return await response.json();
};
export const fetchNotes = async () => {
  const { notes } = await fetch("/api/notes").then((res) => res.json());
  return notes;
};
