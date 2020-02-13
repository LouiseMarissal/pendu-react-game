import React, { useState } from "react";
import "./App.scss";
import Clavier from "./components/Clavier";
// import Devinette from "./components/Devinette";

function App() {
  const HIDE_LETTER = "_";

  // get the ABC
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
  // Generate random words
  let words = [
    "ALLUMETTE",
    "CIGARETTE",
    "BIERE",
    "TOMATE",
    "POMMES",
    "POIRE",
    "VOITURE"
  ];
  // get random word from array
  let guessWord = words[Math.floor(Math.random() * words.length)];

  // Get each letter separately
  const input = guessWord;
  let output = [];
  output = [...input.split("").join(" ")];

  // Show or not letter if matched
  let letterClicked = [];
  const handleLetterClick = letter => {
    letterClicked.push(letter);
    // letterClickeds.includes(letter) ? letter === letterClicked : letter === "_";
  };
  console.log(output);

  return (
    <div className="JeuContainer">
      <h1>Jeu du Pendu React</h1>
      <div className="PenduDevinette">
        {letterClicked.includes(letters)
          ? output.map((w, index) => (
              <span className="wordTitle" key={index}>
                {w}
              </span>
            ))
          : output.map((w, index) => (
              <span className="wordTitle" key={index}>
                _
              </span>
            ))}
      </div>
      <div className="PenduClavier">
        {letters.map((letter, index) => (
          <Clavier
            key={index}
            letters={letter}
            onClick={() => handleLetterClick(letter)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
