import React from "react";
import { addNote } from "./actions";

export default function NotesForm() {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    const content = inputRef.current.value;
    addNote({ content });
    inputRef.current.value = "";
  };

  return (
    <div className="options">
      <form onSubmit={submitHandler}>
        <input ref={inputRef} type="text" placeholder="Enter your note..." />
        <button style={{ color: "rgb(255, 171, 0)" }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
