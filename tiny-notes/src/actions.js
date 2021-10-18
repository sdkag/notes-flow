import { writeFile } from "fs.promises";
import { notes } from "./notes.json";

export const updateNotesDB = async (writeableJSON) => {
  //
  if (typeof writeableJSON !== "string") {
    writeableJSON = JSON.stringify(writeableJSON);
  }
  return writeFile("./notes.json", JSON.stringify(writeableJSON), "utf8")
    .then((what) => console.log(what))
    .catch((err) => console.log(err));
};

// fs.writeFile;
export const deleteNote = (noteId) => {
  console.log(notes);

  notes.filter((note) => note.id !== noteId);
  updateNotesDB(JSON.stringify({ notes }));
};

export const fetchNotes = () => notes;
