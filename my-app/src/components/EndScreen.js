import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
function EndScreen() {
  const { setGameState } = useContext(QuizContext);

  return (
    <div>
      <h1>Thanks for takeing the quiz. See you next time.</h1>
      <button onClick={() => setGameState("menue")}>Main menue</button>
    </div>
  );
}

export default EndScreen;
