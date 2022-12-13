import React, { useEffect, useState } from "react";
import Answer from "../answer/answer";
import Question from "../question/question";
import Score from "../score/score";
import Timer from "../timer/timer";
import data from "../../store/questions.json";
import "./general.css";
import End from "../End/End";
export default function General() {
  const [questions, setQuestions] = useState(data.questions[0].question);
  const [answers, setAnswers] = useState(data.questions[0].content);
  const [correctVariant, setCorrectVariant] = useState(
    data.questions[0].correct
  );
  const [id, setId] = useState(0);
  const [score, setScore] = useState(0);
  const [overScore, setOverScore] = useState(0);
  const [win, setWin] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const chechId = () => {
    id == 4 ? setWin(true) : null;
  };

  useEffect(() => {
    setQuestions(data.questions[id].question);
    setAnswers(data.questions[id].content);
    setCorrectVariant(data.questions[id].correct);
    chechId();
  }, [id]);

  return (
    <div className="general">
      <div className="header">
        <Timer />
        <Score score={score} />
      </div>
      <div className="body">
        <Question question={questions} />
        <Answer
          answers={answers}
          setId={setId}
          id={id}
          correct={correctVariant}
          score={score}
          setScore={setScore}
          setGameOver={setGameOver}
          setOverScore={setOverScore}
        />
      </div>
      {win && !gameOver && <End content="Congratulations !" score={score} />}
      {!win && gameOver && <End content="Game Over !" score={overScore} />}
    </div>
  );
}
