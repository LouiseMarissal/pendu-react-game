import React, { useState, useEffect } from "react";
import "./App.scss";
import Clavier from "./components/Clavier";

function App() {
  const [count, setCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [letterWord, setLettersWord] = useState([]);
  const [clickedLetters, setClickedLetters] = useState([]);
  const [won, setWon] = useState("");

  // get the ABC
  const alphabet = [
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
  let wordsArray = [
    "ALLUMETTE",
    "CIGARETTE",
    "BIERE",
    "TOMATE",
    "POMMES",
    "POIRE",
    "VOITURE",
    "APPLE"
  ];

  // generate Word
  const generateWord = () => {
    let word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setLettersWord([...word.split("")]);
  };
  // get random word from array words
  useEffect(() => {
    generateWord();
  }, []);

  //onClick compare the letters, if matched show letter bg green, if not bg red
  const handleClick = letter => {
    setClickedLetters(clickedLetters => [...clickedLetters, letter]);
  };

  const handleReset = evt => {
    generateWord();
    setClickedLetters([]);
  };

  const renderWord = (letterWord, clickedLetters) => {
    return letterWord.map(letter =>
      clickedLetters.includes(letter) ? letter : "_"
    );
  };
  console.log(letterWord);
  return (
    <div className="JeuContainer">
      <h1>Jeu du Pendu React</h1>
      <span>Tries: {count}</span>
      <span>Points : {points}</span>
      <div className="PenduDevinette">
        <span className="wordTitle">
          {renderWord(letterWord, clickedLetters)}
        </span>
      </div>
      {/* Clavier */}
      <div className="PenduClavier">
        {alphabet.map((letter, index) => (
          <Clavier
            key={index}
            letters={letter}
            onClick={evt => handleClick(letter)}
          />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
