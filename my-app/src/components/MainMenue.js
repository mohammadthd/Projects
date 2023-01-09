import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../App.css";
export default function MainMenue() {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <div className="menue">
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start quiz
      </button>
    </div>
  );
}
