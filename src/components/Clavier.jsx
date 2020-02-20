import React from "react";

export default function Clavier({ letters, onClick, bgColor }) {
  return (
    <div
      className="letters"
      onClick={onClick}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <span>{letters}</span>
    </div>
  );
}
