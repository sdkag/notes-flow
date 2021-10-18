import React from "react";
import { formatDate } from "./utils";
export default function Note({ note: { content, dateCreated, id } }) {
  return (
    <div className="note">
      <p>{content}</p>
      <footer>
        <span>{formatDate(dateCreated)}</span>
        <button>remove</button>
      </footer>
    </div>
  );
}
