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

export const addNote = (newNote) => {
  if (!newNote) throw Error("note is not defined");
  const notes = JSON.parse(localStorage.getItem("notes"));
  const note = {
    id: notes.length + 1,
    dateCreated: new Date(),
    ...newNote,
  };
  notes.push(note);
  debugger;
  updateDB(notes);
  return note;
};
export const fetchNotes = () => JSON.parse(localStorage.getItem("notes"));
