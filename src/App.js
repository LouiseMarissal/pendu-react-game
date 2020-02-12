import React from "react";
import "./App.scss";
import Clavier from "./Clavier";

function App() {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  const handleLetterClick = evt => {
    evt.preventDefault();
    console.log("CLICK", evt);
  };

  return (
    <div className="JeuContainer">
      <h1>Jeu du Pendu React</h1>
      <div className="PenduClavier">
        {letters.map((letter, index) => (
          <Clavier
            key={index}
            letters={letter}
            onClick={evt => handleLetterClick(evt)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
