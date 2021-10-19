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
export const deleteNote = (noteId) => {
  if (!noteId) throw Error("noteId is not defined");
  const notes = JSON.parse(localStorage.getItem("notes")).filter(
    (note) => note.id !== noteId
  );
  updateDB(notes);
  return noteId;
};

export const fetchNotes = () => JSON.parse(localStorage.getItem("notes"));
