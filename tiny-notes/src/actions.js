// import * as promises from "fs";
import db from "./notes.json";

export const updateDB = async (writeableJSON) => {
  if (typeof writeableJSON !== "string") {
    writeableJSON = JSON.stringify(writeableJSON);
  }
  // console.log(promises);
  // localStorage.db = writeableJSON;
  // return promises
  //   .writeFile("./notes.json", JSON.stringify(writeableJSON), "utf8")
  //   .then((what) => console.log(what))
  //   .catch((err) => console.log(err));

  localStorage.setItem("db", writeableJSON);
  console.log(localStorage);
};

export const initializeDB = () => updateDB(db);
// fs.writeFile;
export const deleteNote = (noteId) => {
  const newNotes = JSON.parse(localStorage.getItem("db")).notes.filter(
    (note) => note.id !== noteId
  );
  updateDB(JSON.stringify({ notes: newNotes }));
};

export const fetchNotes = () => JSON.parse(localStorage.getItem("db")).notes;
