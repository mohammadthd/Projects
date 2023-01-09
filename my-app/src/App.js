import React, { useState, createContext } from "react";
import EndScreen from "./components/EndScreen";
import MainMenue from "./components/MainMenue";
import Quiz from "./components/Quiz";
import { QuizContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menue");
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menue" && <MainMenue />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
