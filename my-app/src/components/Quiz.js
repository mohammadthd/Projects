import React, { useContext, useState } from "react";
import { Questions } from "../helpers/QuestionBank";
import { QuizContext } from "../helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button>{Questions[currentQuestion].optionA}</button>
        <button>{Questions[currentQuestion].optionB}</button>
        <button>{Questions[currentQuestion].optionC}</button>
        <button>{Questions[currentQuestion].optionD}</button>
      </div>
      <div className="prevnext">
        <button onClick={prevQuestion} id="nextQuestion">
          Previous
        </button>
        {currentQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz} id="nextQuestion">
            Finish Quiz
          </button>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
