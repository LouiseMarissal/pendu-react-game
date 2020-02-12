import React from "react";

export default function Clavier({ letters, onClick }) {
  return (
    <div className="letters" onClick={onClick}>
      <span>{letters}</span>
    </div>
  );
}
